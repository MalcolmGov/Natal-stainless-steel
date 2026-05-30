# Natal Stainless Steel — Website Revamp (Pitch Demo)

Premium marketing site concept for [Natal Stainless Steel](https://www.natal-stainlesssteel.co.za/).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3003](http://localhost:3003).

## Production build

```bash
npm run build
npm run lint
npm start
```

## Environment (Vercel)

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Production URL, e.g. `https://natal-stainless-steel.vercel.app` |
| `ENQUIRY_WEBHOOK_URL` | Recommended | Formspree/Zapier endpoint for contact form |

Copy `.env.example` to `.env.local` for local development.

## Images

- Hero visual: `public/images/hero-premium.jpg` (local)
- Photography: Wix CDN via `src/lib/natal-media.ts`
- Optional mirror: `npm run images:fetch`

## Deploy

Hosted on [Vercel](https://vercel.com). Connect the GitHub repo `MalcolmGov/Natal-stainless-steel` and set the environment variables above.

This is a **pitch / concept** build — replace sample testimonials with client-approved content before a live handover.
