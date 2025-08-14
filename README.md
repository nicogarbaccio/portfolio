## Nico Garbaccio – Portfolio

Personal portfolio built with Next.js and Tailwind CSS and deployed on Netlify as a fully static site.

### Tech stack
- **Framework**: Next.js 15 (React 18)
- **Styling**: Tailwind CSS
- **Icons**: react-icons
- **Build output**: Static export (`output: 'export'`) → generated into the `out/` directory
- **Images**: Next Image in unoptimized mode; assets live under `public/assets/...` and are referenced with absolute paths like `/assets/skills/react.png`

### Local development
Prerequisites: Node 18 (matches Netlify runtime) and npm.

```bash
# 1) Clone your fork (replace <your-username> if needed)
git clone https://github.com/<your-username>/portfolio.git
cd portfolio

# 2) Install dependencies
npm ci   # or: npm install

# 3) Run the dev server
npm run dev
# Open http://localhost:3000
```

### Build and preview
The site is exported as static HTML and assets into `out/`.

```bash
# Build a production static export
npm run build

# Preview the static export locally (pick one)
npx serve out
# or
npx http-server out
```

### Deployment (Netlify)
This project is deployed on Netlify. Configuration is captured in `netlify.toml`.

- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Environment**: `NODE_VERSION = 18`
- **SPA fallback**: requests are rewritten to `/index.html` so client-side routes work

You can deploy by connecting the repository in the Netlify UI or using the Netlify CLI.

```bash
# Optional: deploy from the CLI (after `netlify init`)
netlify deploy --prod --dir=out
```

### Notes on images
- Place image files in `public/assets/...`
- Reference them by absolute path (e.g., `/assets/projects/SproutHub.png`) rather than importing from `public`
- When using `next/image`, provide `width`/`height` or use `fill` as appropriate

### Scripts
- `npm run dev` – start the Next.js dev server
- `npm run build` – build and export static site into `out/`
- `npm start` – not used for static export (served from `out/` instead)

### License
This repository is for personal portfolio use. Feel free to fork and adapt for your own portfolio.
