# Cloudflare Workers (OpenNext)

## Why deploys failed
1. Deploy command was `npx wrangler deploy` → auto-migrate every build
2. OpenNext needs **Next.js ≥ 15.5.24** (was 15.1.7)
3. `initOpenNextCloudflareForDev()` during CI caused `SQLITE_BUSY`

## Dashboard → Settings → Build
Set exactly:

| Field | Value |
| --- | --- |
| **Build command** | `pnpm exec opennextjs-cloudflare build` |
| **Deploy command** | `pnpm exec opennextjs-cloudflare deploy` |
| **Output directory** | *(leave empty / clear `.next`)* |
| **Root directory** | `/` |

Do **not** use `npx wrangler deploy` as the deploy command.

## Secrets (Workers → Settings → Variables)
Add the same keys as `.env.local` (Production + Preview):
`ZEPTO_MAIL_PASSWORD`, `ZEPTO_MAIL_FROM`, `ZEPTO_MAIL_FROM_NAME`, `NOTIFY_EMAIL`, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`

## Local
```bash
pnpm install
pnpm dev          # Next only
pnpm preview      # Workers runtime locally
pnpm deploy       # build + deploy (needs wrangler login)
```
