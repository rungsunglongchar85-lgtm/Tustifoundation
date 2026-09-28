# Tusti Foundation - Guest Service Executive (Front Office) admission site

Static site: `index.html` only. No build step.

## Deploy on Vercel
Option A (no code): vercel.com > Add New > Project > drag this folder in (or import from GitHub). Framework preset: Other. Build command and output directory: leave empty.
Option B (CLI): `npm i -g vercel`, then run `vercel --prod` inside this folder.

## Custom domain
Vercel project > Settings > Domains > add e.g. apply.tustifoundation.org and add the DNS record Vercel shows at your domain provider.
