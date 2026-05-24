#!/usr/bin/env node
/**
 * Create/update Cloudflare DNS CNAMEs so Pages custom domains can become Active.
 *
 * Requires CLOUDFLARE_API_TOKEN with Zone DNS Edit (Wrangler OAuth cannot write DNS).
 *
 * Usage:
 *   CLOUDFLARE_API_TOKEN=... node scripts/ensure-pages-dns.mjs
 *   CLOUDFLARE_API_TOKEN=... node scripts/ensure-pages-dns.mjs --retry-pages-validation
 */

import { readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DOMAIN = 'survivezombiearenaguide.com';
const WWW = `www.${DOMAIN}`;
const PAGES_TARGET = 'sza-companion.pages.dev';
const ZONE_ID = 'dbd9b267c309c37ad06687eeee12b88a';
const ACCOUNT_ID = '057efc99ed7cb4797a3f379e13600206';
const PAGES_PROJECT = 'sza-companion';

const retryPagesValidation = process.argv.includes('--retry-pages-validation');

export function resolveCfToken() {
  const env = process.env.CLOUDFLARE_API_TOKEN?.trim();
  if (env) return env;
  const p = join(homedir(), 'Library/Preferences/.wrangler/config/default.toml');
  const m = readFileSync(p, 'utf8').match(/^oauth_token = "([^"]+)"/m);
  if (m) return m[1];
  throw new Error('Set CLOUDFLARE_API_TOKEN (Zone DNS Edit) or run: npx wrangler login');
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
  if (!data.success) {
    const err = new Error(JSON.stringify(data.errors ?? data));
    err.cfErrors = data.errors;
    throw err;
  }
  return data.result;
}

async function listCnameRecords(token, recordName) {
  const q = new URLSearchParams({
    type: 'CNAME',
    name: recordName,
    per_page: '100',
  });
  return cfApi(token, `/zones/${ZONE_ID}/dns_records?${q}`);
}

export async function ensureCname(token, recordName, target) {
  const existing = await listCnameRecords(token, recordName);
  const match = existing.find(
    (r) => r.content === target && r.proxied === true,
  );
  if (match) {
    console.log(`[dns] OK ${recordName} -> ${target} (proxied)`);
    return;
  }

  if (existing.length > 0) {
    const id = existing[0].id;
    await cfApi(token, `/zones/${ZONE_ID}/dns_records/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        type: 'CNAME',
        name: recordName,
        content: target,
        proxied: true,
        ttl: 1,
      }),
    });
    console.log(`[dns] updated ${recordName} -> ${target} (proxied)`);
    return;
  }

  await cfApi(token, `/zones/${ZONE_ID}/dns_records`, {
    method: 'POST',
    body: JSON.stringify({
      type: 'CNAME',
      name: recordName,
      content: target,
      proxied: true,
      ttl: 1,
    }),
  });
  console.log(`[dns] created ${recordName} -> ${target} (proxied)`);
}

async function patchPagesDomain(token, name) {
  await cfApi(
    token,
    `/accounts/${ACCOUNT_ID}/pages/projects/${PAGES_PROJECT}/domains/${encodeURIComponent(name)}`,
    { method: 'PATCH' },
  );
  console.log(`[pages] re-validated domain: ${name}`);
}

export async function ensurePagesDns(token) {
  await ensureCname(token, DOMAIN, PAGES_TARGET);
  await ensureCname(token, WWW, PAGES_TARGET);

  if (retryPagesValidation) {
    await patchPagesDomain(token, DOMAIN);
    await patchPagesDomain(token, WWW);
  }
}

async function main() {
  const token = resolveCfToken();
  if (!process.env.CLOUDFLARE_API_TOKEN) {
    console.warn(
      '[warn] CLOUDFLARE_API_TOKEN not set — using Wrangler OAuth; DNS write often fails. Prefer an API token with Zone DNS Edit.',
    );
  }

  try {
    await ensurePagesDns(token);
  } catch (err) {
    const code = err.cfErrors?.[0]?.code;
    if (code === 10000 || String(err.message).includes('Authentication error')) {
      console.error(
        '[dns] API token cannot edit DNS. Create a token at https://dash.cloudflare.com/profile/api-tokens',
      );
      console.error('      Template: Edit zone DNS — zone: survivezombiearenaguide.com');
      console.error('      Then: CLOUDFLARE_API_TOKEN=... node scripts/ensure-pages-dns.mjs --retry-pages-validation');
    }
    throw err;
  }

  console.log('[done] Wait 1–5 min, then check Pages custom domain status (should become Active).');
}

const isMain =
  process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];

if (isMain) {
  main().catch((err) => {
    console.error(err.message || err);
    process.exit(1);
  });
}
