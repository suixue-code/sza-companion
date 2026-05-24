#!/usr/bin/env node
/**
 * Finish Cloudflare cutover for survivezombiearenaguide.com:
 * 1) Optionally set Spaceship nameservers via API
 * 2) Poll Cloudflare zone until active
 * 3) Deploy Cloudflare Pages (static dist)
 * 4) Ensure Pages custom domains (apex + www)
 *
 * Usage:
 *   node scripts/finish-dns-and-deploy.mjs
 *   node scripts/finish-dns-and-deploy.mjs --skip-spaceship
 *
 * Optional env (Spaceship API — create at Spaceship → API Keys, domains:write):
 *   SPACESHIP_API_KEY=...
 *   SPACESHIP_API_SECRET=...
 *
 * Cloudflare auth: uses wrangler OAuth token from ~/.wrangler/config/default.toml
 */

import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const DOMAIN = 'survivezombiearenaguide.com';
const WWW = `www.${DOMAIN}`;
const PAGES_PROJECT = 'sza-companion';
const CF_NS = ['carlos.ns.cloudflare.com', 'emely.ns.cloudflare.com'];
const ZONE_ID = 'dbd9b267c309c37ad06687eeee12b88a';
const ACCOUNT_ID = '057efc99ed7cb4797a3f379e13600206';
const POLL_MS = 60_000;
const MAX_POLLS = 120;

const skipSpaceship = process.argv.includes('--skip-spaceship');

function cfToken() {
  const p = join(homedir(), 'Library/Preferences/.wrangler/config/default.toml');
  const m = readFileSync(p, 'utf8').match(/^oauth_token = "([^"]+)"/m);
  if (!m) throw new Error('Wrangler OAuth token not found. Run: npx wrangler login');
  return m[1];
}

async function cfApi(token, path, options = {}) {
  const res = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
  });
  const data = await res.json();
  if (!data.success) throw new Error(JSON.stringify(data.errors ?? data));
  return data.result;
}

async function cfZoneStatus(token) {
  const zone = await cfApi(token, `/zones/${ZONE_ID}`);
  return zone.status;
}

async function ensurePagesProject(token) {
  try {
    await cfApi(token, `/accounts/${ACCOUNT_ID}/pages/projects/${PAGES_PROJECT}`);
    console.log(`[pages] project exists: ${PAGES_PROJECT}`);
  } catch {
    await cfApi(token, `/accounts/${ACCOUNT_ID}/pages/projects`, {
      method: 'POST',
      body: JSON.stringify({
        name: PAGES_PROJECT,
        production_branch: 'main',
      }),
    });
    console.log(`[pages] created project: ${PAGES_PROJECT}`);
  }
}

async function ensurePagesDomain(token, name) {
  const domains = await cfApi(
    token,
    `/accounts/${ACCOUNT_ID}/pages/projects/${PAGES_PROJECT}/domains`,
  );
  if (domains.some((d) => d.name === name)) {
    console.log(`[pages] domain already attached: ${name}`);
    return;
  }
  await cfApi(token, `/accounts/${ACCOUNT_ID}/pages/projects/${PAGES_PROJECT}/domains`, {
    method: 'POST',
    body: JSON.stringify({ name }),
  });
  console.log(`[pages] attached domain: ${name}`);
}

async function spaceshipSetNs() {
  const key = process.env.SPACESHIP_API_KEY;
  const secret = process.env.SPACESHIP_API_SECRET;
  if (!key || !secret) {
    console.log('[spaceship] skip — set SPACESHIP_API_KEY + SPACESHIP_API_SECRET to automate NS');
    return false;
  }

  const res = await fetch(`https://spaceship.dev/api/v1/domains/${DOMAIN}/nameservers`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': key,
      'X-Api-Secret': secret,
    },
    body: JSON.stringify({ provider: 'custom', hosts: CF_NS }),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`Spaceship API ${res.status}: ${text}`);
  console.log('[spaceship] nameservers updated to Cloudflare');
  return true;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  if (!skipSpaceship) await spaceshipSetNs();

  const token = cfToken();
  console.log('[cloudflare] polling zone status…');
  for (let i = 0; i < MAX_POLLS; i++) {
    const status = await cfZoneStatus(token);
    console.log(`[cloudflare] ${DOMAIN} status=${status} (attempt ${i + 1}/${MAX_POLLS})`);
    if (status === 'active') break;
    if (i === MAX_POLLS - 1) {
      console.error('[cloudflare] zone still not active — update NS at Spaceship, then re-run this script');
      process.exit(1);
    }
    await sleep(POLL_MS);
  }

  await ensurePagesProject(token);

  console.log('[deploy] building and deploying Cloudflare Pages…');
  execSync('PUBLIC_SITE_ORIGIN=https://survivezombiearenaguide.com npm run deploy:pages', {
    stdio: 'inherit',
    cwd: ROOT,
  });

  console.log('[pages] ensuring custom domains…');
  await ensurePagesDomain(token, DOMAIN);
  await ensurePagesDomain(token, WWW);

  console.log('[done] verify:');
  console.log(`  curl -I https://${DOMAIN}`);
  console.log(`  curl -I https://${WWW}`);
  console.log('');
  console.log('[note] If the old Worker still holds custom domains, remove them in');
  console.log('       Cloudflare Dashboard → Workers → sza-companion → Settings → Domains & Routes');
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
