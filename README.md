# Plotta Design System 🎨

> Professional, type-safe design system for Plotta projects. Built with Turborepo, TypeScript, and Storybook.

[![CI](https://github.com/daniellauding/plotta-storybook/workflows/CI/badge.svg)](https://github.com/daniellauding/plotta-storybook/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Centralized design tokens and components** for consistent UI across:
- ✅ Web (React + Tailwind)
- ✅ Mobile (React Native + Expo)
- ✅ Browser Extension
- ✅ Landing Pages

---

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start Storybook
pnpm storybook
# → Open http://localhost:6006
```

**Install in your project:**
```bash
# For web projects
pnpm add @plotta/tokens @plotta/utils @plotta/components-web

# For React Native
pnpm add @plotta/tokens @plotta/components-native
```

---

## 📦 Packages

| Package | Description | Version |
|---------|-------------|---------|
| `@plotta/tokens` | Design tokens (colors, typography, spacing) | `0.1.0` |
| `@plotta/utils` | Shared utility functions | `0.1.0` |
| `@plotta/components-web` | React components for web | `0.1.0` |
| `@plotta/components-native` | React Native components | `0.1.0` |

### @plotta/tokens

**Single source of truth** for all design decisions.

```typescript
import { colors, hslToHex, spacing, fontSize } from '@plotta/tokens';

// Colors (HSL format, converts to any format)
const primary = hslToHex(colors.light.primary); // "#000000"

// Spacing (4px baseline grid)
const padding = spacing[4]; // 16px

// Typography
const size = fontSize.lg; // 18px
```

**Features:**
- 🎨 HSL color system (light + dark themes)
- 📏 Spacing scale (4px grid)
- 📝 Typography scale
- 🌓 Shadow tokens
- 📐 Border radius tokens
- 📱 Responsive breakpoints

### @plotta/components-web

React components built on **shadcn/ui** and **Radix UI**.

```tsx
import { Button, Card, Input } from '@plotta/components-web';

<Button variant="default">Click me</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Cancel</Button>
```

### @plotta/components-native

React Native components with **identical API** to web components.

```tsx
import { Button } from '@plotta/components-native';

<Button variant="default">Click me</Button>
```

---

## 🏗️ Monorepo Structure

```
plotta-storybook/
├── packages/
│   ├── tokens/              # Design tokens (colors, spacing, etc.)
│   ├── utils/               # Shared utilities (cn, validators)
│   ├── components-web/      # React components (shadcn/ui)
│   └── components-native/   # React Native components
├── apps/
│   ├── storybook-web/       # Storybook documentation
│   └── storybook-native/    # React Native Storybook
├── docs/                    # Migration guides
│   ├── QUICK-START.md
│   ├── MIGRATION-WEB.md
│   ├── MIGRATION-MOBILE.md
│   ├── MIGRATION-EXTENSION.md
│   └── MIGRATION-LANDING.md
└── .github/workflows/       # CI/CD pipelines
```

---

## 📖 Documentation

### Quick Links

- **[Quick Start Guide](./docs/QUICK-START.md)** - Get started in 5 minutes
- **[Setup Guide](./docs/SETUP.md)** - Complete setup instructions
- **[Storybook](http://localhost:6006)** - Live component documentation

### Migration Guides

Migrate existing Plotta projects to the design system:

- **[Web App](./docs/MIGRATION-WEB.md)** - React + Vite + Tailwind
- **[Mobile App](./docs/MIGRATION-MOBILE.md)** - React Native + Expo
- **[Browser Extension](./docs/MIGRATION-EXTENSION.md)** - Vanilla JS
- **[Landing Page](./docs/MIGRATION-LANDING.md)** - Static HTML

---

## 🎨 Design Tokens

### Colors

**Semantic colors** that adapt to light/dark themes:
```typescript
colors.light.primary        // hsl(0, 0%, 0%)
colors.light.background     // hsl(0, 0%, 100%)
colors.dark.primary         // hsl(0, 0%, 100%)
colors.dark.background      // hsl(0, 0%, 5%)
```

**Sticky note colors** (10 vibrant colors):
```typescript
colors.sticky.yellow  // hsl(45, 85%, 76%)
colors.sticky.red     // hsl(0, 86%, 80%)
colors.sticky.blue    // hsl(212, 96%, 78%)
// ... 7 more
```

### Typography

```typescript
fontSize.xs     // 12px
fontSize.base   // 16px
fontSize.lg     // 18px
fontSize['7xl'] // 72px

fontWeight.normal   // "400"
fontWeight.bold     // "700"
```

### Spacing

```typescript
spacing[1]   // 4px
spacing[4]   // 16px
spacing[8]   // 32px
spacing[12]  // 48px

// Named aliases
spacingAliases.sm  // 8px
spacingAliases.md  // 16px
spacingAliases.lg  // 24px
```

---

## 🔧 Development

### Adding a Component

```bash
# 1. Create component
vim packages/components-web/src/MyComponent.tsx

# 2. Export it
echo "export * from './MyComponent';" >> packages/components-web/src/index.tsx

# 3. Create story
vim apps/storybook-web/stories/components/MyComponent.stories.tsx

# 4. Build and preview
pnpm dev        # Watch mode
pnpm storybook  # View in browser
```

### Adding Design Tokens

```typescript
// Edit packages/tokens/src/colors.ts
export const myNewColor = { h: 200, s: 50, l: 50 };

// Build
pnpm build

// Use in components
import { myNewColor, hslToHex } from '@plotta/tokens';
```

### Publishing

Using **Changesets** for semantic versioning:

```bash
# 1. Make changes to packages
# 2. Create changeset
pnpm changeset

# 3. Commit and push
git add .
git commit -m "feat: add new component"
git push

# 4. GitHub Actions creates "Version Packages" PR
# 5. Merge PR to publish to npm
```

---

## 🚢 Deployment

### Storybook (Automatic)

**GitHub Pages:** Automatically deployed on push to `main`
- URL: `https://daniellauding.github.io/plotta-storybook/`

### Packages (Automatic)

**npm:** Published automatically via Changesets on PR merge
- `@plotta/tokens`
- `@plotta/utils`
- `@plotta/components-web`
- `@plotta/components-native`

---

## 🎯 Benefits

| Benefit | Description |
|---------|-------------|
| **Single Source of Truth** | One place for all design tokens |
| **Type-Safe** | Full TypeScript support |
| **Cross-Platform** | Works on web, mobile, extensions |
| **Professional** | Storybook docs like Airbnb, Google |
| **Maintainable** | Update once, affects all projects |
| **Versioned** | Semantic versioning with changelogs |
| **Fast** | Turborepo parallel builds |

---

## 🛠️ Tech Stack

- **Monorepo:** Turborepo
- **Package Manager:** pnpm
- **Versioning:** Changesets
- **Documentation:** Storybook
- **UI Framework:** Radix UI + shadcn/ui
- **Styling:** Tailwind CSS (web)
- **Mobile:** React Native
- **CI/CD:** GitHub Actions

---

## 📊 Project Stats

- **6 Plotta projects** using the design system
- **4 packages** published
- **50+ design tokens** defined
- **10 sticky note colors** unified
- **100% type-safe** design tokens

---

## 🤝 Contributing

This is a private design system for Plotta projects.

**Internal contributors:**
1. Create a branch
2. Make changes
3. Run `pnpm changeset`
4. Open PR
5. Merge to publish

---

## 📄 License

MIT © Daniel Lauding

---

## 🔗 Links

- **Storybook:** http://localhost:6006
- **Repository:** https://github.com/daniellauding/plotta-storybook
- **Issues:** https://github.com/daniellauding/plotta-storybook/issues

---

**Made with ❤️ for Plotta**
