# Deployment Guide

## Deploying to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

## Deploying to Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist
```

## Deploying to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://whataday098.github.io/Margasira",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```js
export default defineConfig({
  plugins: [react()],
  base: '/Margasira/'
})
```

4. Deploy:
```bash
npm run deploy
```

## Environment Variables

For production deployment, you may want to configure:

- Payment gateway API keys
- Email service credentials
- Analytics tracking codes

Create a `.env` file (not committed to git) with your credentials.
