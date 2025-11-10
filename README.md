# Teesside Resin Driveways

SEO-optimized one-page website for resin bound and bonded driveway services in Teesside, UK.

## Features

- ✅ Comprehensive resin driveway information (bound vs bonded)
- ✅ SEO-optimized with meta tags and schema markup (LocalBusiness, Organization, Article, FAQPage)
- ✅ Fixed header navigation with smooth anchor scrolling
- ✅ Mobile-responsive design
- ✅ Bold green color scheme matching brand identity
- ✅ 15+ FAQ questions
- ✅ Service area coverage (Middlesbrough, Stockton, Billingham, Redcar, etc.)
- ✅ Elfsight Click to Call integration
- ✅ Professional image gallery

## Tech Stack

- React 19
- Tailwind CSS 4
- Vite
- TypeScript
- shadcn/ui components

## Deployment to Cloudflare Pages

### Build Settings

1. **Framework preset:** Vite
2. **Build command:** `pnpm run build`
3. **Build output directory:** `client/dist`
4. **Root directory:** `/` (leave as default)

### Environment Variables

Add these environment variables in Cloudflare Pages settings:

```
NODE_VERSION=22.13.0
```

### Steps

1. Go to [Cloudflare Pages](https://dash.cloudflare.com/)
2. Click "Create a project"
3. Connect to GitHub and select `360mediaworks/teesside-resin-driveways`
4. Configure build settings:
   - **Build command:** `pnpm run build`
   - **Build output directory:** `client/dist`
5. Add environment variable: `NODE_VERSION=22.13.0`
6. Click "Save and Deploy"

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## Project Structure

```
client/
  public/           # Static assets (images, etc.)
  src/
    pages/          # Page components
    components/     # Reusable UI components
    lib/            # Utility functions
    index.css       # Global styles & theme
  index.html        # HTML template
```

## License

All rights reserved © 2025 Teesside Driveways
