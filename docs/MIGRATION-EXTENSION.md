# Migration Guide: Plotta Browser Extension

This guide will help you migrate the Plotta browser extension to use the centralized design system.

## Overview

**Project:** `/Users/daniellauding/Work/instinctly/internal/plotta-ext`
**Tech Stack:** Vanilla JavaScript + Webpack
**Migration Complexity:** ⭐ Easy

## Current State

The extension uses hardcoded CSS with inconsistent values:
- Primary color: `#3b82f6` (different from web app's `#000000`)
- Border colors: `#e5e7eb`
- Background: `#f9fafb`
- No TypeScript
- No build-time token generation

## Step 1: Install Packages

```bash
cd /Users/daniellauding/Work/instinctly/internal/plotta-ext

# Install design system tokens
pnpm add @plotta/tokens
```

## Step 2: Create CSS Generation Script

Since the extension uses vanilla JS, we'll generate CSS at build time.

**Create:** `scripts/generate-css.js`
```javascript
const fs = require('fs');
const path = require('path');
const { colors, hslToHex } = require('@plotta/tokens');

function generateCSS() {
  const lightColors = {
    '--primary': hslToHex(colors.light.primary),
    '--primary-foreground': hslToHex(colors.light.primaryForeground),
    '--secondary': hslToHex(colors.light.secondary),
    '--secondary-foreground': hslToHex(colors.light.secondaryForeground),
    '--border': hslToHex(colors.light.border),
    '--background': hslToHex(colors.light.background),
    '--foreground': hslToHex(colors.light.foreground),
    '--muted': hslToHex(colors.light.muted),
    '--muted-foreground': hslToHex(colors.light.mutedForeground),
    '--destructive': hslToHex(colors.light.destructive),
  };

  const cssVars = Object.entries(lightColors)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n');

  const css = `:root {\n${cssVars}\n}\n`;

  // Read existing styles.css
  const stylesPath = path.join(__dirname, '../styles.css');
  let existingCSS = fs.readFileSync(stylesPath, 'utf8');

  // Replace hardcoded colors with CSS variables
  existingCSS = existingCSS.replace(/#3b82f6/g, 'var(--primary)');
  existingCSS = existingCSS.replace(/#e5e7eb/g, 'var(--border)');
  existingCSS = existingCSS.replace(/#f9fafb/g, 'var(--background)');
  existingCSS = existingCSS.replace(/#1f2937/g, 'var(--foreground)');
  existingCSS = existingCSS.replace(/#6b7280/g, 'var(--muted-foreground)');
  existingCSS = existingCSS.replace(/#111827/g, 'var(--foreground)');
  existingCSS = existingCSS.replace(/#374151/g, 'var(--muted-foreground)');
  existingCSS = existingCSS.replace(/#f3f4f6/g, 'var(--secondary)');

  // Prepend CSS variables
  const finalCSS = css + '\n' + existingCSS;

  // Write new CSS
  fs.writeFileSync(stylesPath, finalCSS, 'utf8');
  console.log('✅ CSS variables generated from design tokens');
}

generateCSS();
```

## Step 3: Update package.json

**Add build script:**
```json
{
  "scripts": {
    "prebuild": "node scripts/generate-css.js",
    "build": "webpack --mode production",
    "dev": "webpack --mode development --watch"
  }
}
```

## Step 4: Update styles.css

**Before:** `styles.css` (hardcoded hex colors)
```css
body {
  color: #1f2937;
  background: #f9fafb;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}
```

**After:** `styles.css` (with CSS variables)
```css
:root {
  --primary: #000000;
  --primary-foreground: #ffffff;
  --secondary: #f5f5f5;
  --border: #e5e5e5;
  --background: #ffffff;
  --foreground: #000000;
  --muted: #f5f5f5;
  --muted-foreground: #666666;
  --destructive: #e03e3e;
}

body {
  color: var(--foreground);
  background: var(--background);
}

.btn-primary {
  background: var(--primary);
  color: var(--primary-foreground);
}

.btn-primary:hover {
  background: color-mix(in srgb, var(--primary) 90%, black);
}

.btn-secondary {
  background: var(--secondary);
  color: var(--secondary-foreground);
}

.border {
  border-color: var(--border);
}
```

## Step 5: Migrate Colors

Replace all hardcoded colors:

| Old Value | New Value | Token |
|-----------|-----------|-------|
| `#3b82f6` | `var(--primary)` | `colors.light.primary` |
| `#2563eb` | `var(--primary-hover)` | Derived from primary |
| `#e5e7eb` | `var(--border)` | `colors.light.border` |
| `#f9fafb` | `var(--background)` | `colors.light.background` |
| `#1f2937` | `var(--foreground)` | `colors.light.foreground` |
| `#6b7280` | `var(--muted-foreground)` | `colors.light.mutedForeground` |
| `#f3f4f6` | `var(--secondary)` | `colors.light.secondary` |
| `#065f46` | `var(--success)` | `colors.priority.low` |
| `#991b1b` | `var(--destructive)` | `colors.light.destructive` |

### Search and Replace

```bash
# In styles.css
sed -i '' 's/#3b82f6/var(--primary)/g' styles.css
sed -i '' 's/#e5e7eb/var(--border)/g' styles.css
sed -i '' 's/#f9fafb/var(--background)/g' styles.css
sed -i '' 's/#1f2937/var(--foreground)/g' styles.css
sed -i '' 's/#6b7280/var(--muted-foreground)/g' styles.css
```

## Step 6: Add Sticky Note Colors (Optional)

If the extension needs sticky note colors:

**Add to generate-css.js:**
```javascript
const { colors, hslToHex } = require('@plotta/tokens');

// Generate sticky colors
const stickyColors = Object.entries(colors.sticky)
  .map(([name, hsl]) => `  --sticky-${name}: ${hslToHex(hsl)};`)
  .join('\n');
```

## Step 7: Update Build Process

**Before:**
```json
"scripts": {
  "build": "webpack --mode production"
}
```

**After:**
```json
"scripts": {
  "generate-tokens": "node scripts/generate-css.js",
  "prebuild": "pnpm generate-tokens",
  "build": "webpack --mode production",
  "dev": "pnpm generate-tokens && webpack --mode development --watch"
}
```

## Testing Checklist

Test the extension after migration:

- [ ] Popup UI renders correctly
- [ ] Colors match the web app
- [ ] Buttons styled correctly
- [ ] Forms and inputs work
- [ ] Success/error messages use correct colors
- [ ] Extension icon displays
- [ ] No console errors
- [ ] Works in Chrome
- [ ] Works in Firefox (if supported)
- [ ] Works in Safari (if supported)

## Benefits

✅ **Consistent colors** with main web app
✅ **Single source of truth** via design tokens
✅ **Easy updates** - regenerate CSS from tokens
✅ **Type-safe** (if you migrate to TypeScript later)
✅ **Professional** appearance matching Plotta brand

## Alternative: Upgrade to TypeScript

For better type safety, consider upgrading the extension:

1. Convert `.js` to `.ts`
2. Use `@plotta/tokens` directly in code
3. Generate colors at runtime
4. Add webpack TypeScript loader

**Example:**
```typescript
import { colors, hslToHex } from '@plotta/tokens';

const primaryColor = hslToHex(colors.light.primary);
element.style.backgroundColor = primaryColor;
```

## Rollback Plan

1. Keep backup of original `styles.css`
2. If issues occur, restore original file
3. Remove `@plotta/tokens` package
4. Remove generate-css.js script

## Next Steps

1. Consider migrating to TypeScript
2. Add dark mode support
3. Use more design tokens (spacing, typography)
4. Sync with web app updates automatically
