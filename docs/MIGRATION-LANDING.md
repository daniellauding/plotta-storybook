# Migration Guide: Plotta Landing Page

This guide will help you migrate the Plotta landing page to use the centralized design system.

## Overview

**Project:** `/Users/daniellauding/Work/instinctly/internal/plotta-landing`
**Tech Stack:** Static HTML + CSS
**Migration Complexity:** ⭐ Very Easy

## Current State

The landing page is a single `index.html` file with inline CSS:
- Background: `#0a0a0a` (different from web app's `#0d0d0d`)
- Foreground: `#ededed`
- Accent: `#3b82f6` (blue, while web app uses black `#000000`)
- Muted: `#737373`
- Border: `#262626`

## Step 1: Install Build Tools (Optional)

If you want automated token generation:

```bash
cd /Users/daniellauding/Work/instinctly/internal/plotta-landing

# Add package.json if it doesn't exist
pnpm init

# Install design tokens
pnpm add @plotta/tokens
```

## Step 2: Option A - Manual CSS Variables

**Simplest approach:** Update `index.html` with consistent colors.

**Before:**
```html
<style>
  :root {
    --bg: #0a0a0a;
    --fg: #ededed;
    --accent: #3b82f6;
    --muted: #737373;
    --border: #262626;
  }
</style>
```

**After:**
```html
<style>
  :root {
    /* Design system colors - dark theme */
    --bg: #0d0d0d;           /* hsl(0, 0%, 5%) - matches web app */
    --fg: #ffffff;           /* hsl(0, 0%, 100%) */
    --accent: #000000;       /* hsl(0, 0%, 0%) - primary */
    --muted: #999999;        /* hsl(0, 0%, 60%) */
    --border: #333333;       /* hsl(0, 0%, 20%) */
  }

  /* Light theme (optional) */
  @media (prefers-color-scheme: light) {
    :root {
      --bg: #ffffff;        /* hsl(0, 0%, 100%) */
      --fg: #000000;        /* hsl(0, 0%, 0%) */
      --accent: #000000;    /* hsl(0, 0%, 0%) */
      --muted: #666666;     /* hsl(0, 0%, 40%) */
      --border: #e5e5e5;    /* hsl(0, 0%, 90%) */
    }
  }
</style>
```

## Step 3: Option B - Automated Token Generation

For automated updates from design tokens:

**Create:** `generate-inline-css.js`
```javascript
const fs = require('fs');
const { colors, hslToHex } = require('@plotta/tokens');

function generateInlineCSS() {
  const darkTheme = {
    '--bg': hslToHex(colors.dark.background),
    '--fg': hslToHex(colors.dark.foreground),
    '--accent': hslToHex(colors.dark.primary),
    '--muted': hslToHex(colors.dark.mutedForeground),
    '--border': hslToHex(colors.dark.border),
  };

  const cssVars = Object.entries(darkTheme)
    .map(([key, value]) => `    ${key}: ${value};`)
    .join('\n');

  const styleBlock = `  :root {\n${cssVars}\n  }`;

  // Read index.html
  let html = fs.readFileSync('index.html', 'utf8');

  // Replace :root block
  html = html.replace(
    /:root\s*{[^}]*}/,
    styleBlock
  );

  // Write back
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('✅ Inline CSS updated from design tokens');
}

generateInlineCSS();
```

**package.json:**
```json
{
  "scripts": {
    "build": "node generate-inline-css.js"
  }
}
```

## Step 4: Color Mapping

Replace all hardcoded colors in `index.html`:

### Background/Foreground
```html
<!-- Before -->
<style>
  body {
    background: #0a0a0a;
    color: #ededed;
  }
</style>

<!-- After -->
<style>
  body {
    background: var(--bg);
    color: var(--fg);
  }
</style>
```

### Accent Colors
```html
<!-- Before -->
<style>
  .cta-primary {
    background: #3b82f6;
  }
</style>

<!-- After -->
<style>
  .cta-primary {
    background: var(--accent);
    color: var(--bg);
  }
</style>
```

### Borders
```html
<!-- Before -->
<style>
  .card {
    border: 1px solid #262626;
  }
</style>

<!-- After -->
<style>
  .card {
    border: 1px solid var(--border);
  }
</style>
```

## Step 5: Typography (Optional)

Add typography tokens from design system:

```html
<style>
  :root {
    /* Colors */
    --bg: #0d0d0d;
    --fg: #ffffff;

    /* Typography */
    --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    --font-mono: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, monospace;

    /* Font Sizes */
    --text-xs: 12px;
    --text-sm: 14px;
    --text-base: 16px;
    --text-lg: 18px;
    --text-xl: 20px;
    --text-2xl: 24px;
    --text-3xl: 30px;
    --text-4xl: 36px;
    --text-5xl: 48px;
    --text-6xl: 60px;
    --text-7xl: 72px;
  }

  h1 {
    font-size: var(--text-7xl);
    font-weight: 800;
  }

  h2 {
    font-size: var(--text-4xl);
    font-weight: 700;
  }

  p {
    font-size: var(--text-base);
  }
</style>
```

## Step 6: Update Specific Elements

### Hero Section
```html
<!-- Before -->
<style>
  .hero {
    background: linear-gradient(to right, #ededed, #737373);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>

<!-- After -->
<style>
  .hero {
    background: linear-gradient(to right, var(--fg), var(--muted));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
```

### Call-to-Action Buttons
```html
<!-- Before -->
<style>
  .cta-primary {
    background: #3b82f6;
    color: white;
  }

  .cta-secondary {
    background: transparent;
    border: 2px solid #3b82f6;
    color: #3b82f6;
  }
</style>

<!-- After -->
<style>
  .cta-primary {
    background: var(--accent);
    color: var(--bg);
  }

  .cta-secondary {
    background: transparent;
    border: 2px solid var(--accent);
    color: var(--accent);
  }
</style>
```

## Step 7: Deployment

If using Netlify:

**netlify.toml:**
```toml
[build]
  command = "node generate-inline-css.js"
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Testing Checklist

- [ ] Page loads correctly
- [ ] Colors match web app dark theme
- [ ] Typography is consistent
- [ ] Buttons styled correctly
- [ ] Hero gradient looks good
- [ ] Footer colors correct
- [ ] Links hover states work
- [ ] Responsive design intact
- [ ] No broken styles
- [ ] Works in all browsers

## Benefits

✅ **Brand consistency** with main web app
✅ **Professional** appearance
✅ **Easy updates** via design tokens
✅ **Dark/light theme** support (optional)
✅ **Future-proof** for redesigns

## Comparison

**Before:**
- Background: `#0a0a0a` (custom dark)
- Accent: `#3b82f6` (blue)
- Inconsistent with app

**After:**
- Background: `#0d0d0d` (matches app)
- Accent: `#000000` (matches app primary)
- ✅ Consistent branding

## Rollback Plan

1. Keep backup of original `index.html`
2. If issues occur, restore from backup
3. Simple, no dependencies to remove

## Next Steps

1. Add light theme support
2. Use more design tokens (spacing, shadows)
3. Consider migrating to a framework (Next.js, Astro)
4. Automate deployment with token updates
