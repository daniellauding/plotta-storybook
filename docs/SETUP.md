# Complete Setup Guide

This guide covers the complete setup process for the Plotta Design System.

## Prerequisites

- Node.js >= 18
- pnpm >= 8
- Git

## Initial Setup

### 1. Clone and Install

```bash
cd /Users/daniellauding/Work/instinctly/internal/plotta-storybook

# Install dependencies
pnpm install

# Build all packages
pnpm build
```

### 2. Verify Installation

```bash
# Check that all packages build successfully
pnpm build

# Start Storybook
pnpm storybook

# Should open at http://localhost:6006
```

### 3. Link to GitHub Repository

```bash
git remote add origin https://github.com/daniellauding/plotta-storybook.git
git branch -M main
git push -u origin main
```

## Publishing Packages

### Option A: Publish to npm

1. **Create npm account** (if you don't have one):
   ```bash
   npm login
   ```

2. **Update package names** in each `package.json`:
   ```json
   {
     "name": "@plotta/tokens",
     // or use scoped packages
     "name": "@your-org/plotta-tokens"
   }
   ```

3. **Publish:**
   ```bash
   # Create a changeset
   pnpm changeset

   # Version packages
   pnpm version-packages

   # Publish to npm
   pnpm release
   ```

### Option B: GitHub Packages (Private)

1. **Update package.json** to use GitHub Packages:
   ```json
   {
     "name": "@daniellauding/plotta-tokens",
     "publishConfig": {
       "registry": "https://npm.pkg.github.com"
     }
   }
   ```

2. **Create `.npmrc`** in monorepo root:
   ```
   @daniellauding:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
   ```

3. **Publish:**
   ```bash
   pnpm changeset
   pnpm version-packages
   pnpm release
   ```

### Option C: Local Linking (Development)

For local development without publishing:

```bash
cd packages/tokens
pnpm link --global

cd packages/utils
pnpm link --global

cd packages/components-web
pnpm link --global

# Then in your project:
cd /path/to/plotta
pnpm link @plotta/tokens --global
pnpm link @plotta/utils --global
pnpm link @plotta/components-web --global
```

## Deploying Storybook

### Option A: GitHub Pages

1. **Enable GitHub Pages** in repo settings
2. **Push to main branch** - GitHub Actions will deploy automatically
3. **Access at:** `https://yourusername.github.io/plotta-storybook/`

### Option B: Netlify

```bash
# Build Storybook
pnpm build-storybook

# Deploy to Netlify
npx netlify-cli deploy --prod --dir=apps/storybook-web/storybook-static
```

### Option C: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd apps/storybook-web
vercel --prod
```

## CI/CD Setup

### GitHub Actions

1. **Add npm token** to GitHub Secrets:
   - Go to repo settings → Secrets → Actions
   - Add `NPM_TOKEN` with your npm auth token

2. **Push to main branch** - Actions will run automatically

### Changesets

```bash
# Create a changeset for a change
pnpm changeset

# Select packages changed
# Choose version bump (patch/minor/major)
# Write changelog message

# Commit changeset
git add .changeset
git commit -m "chore: add changeset"
git push
```

On main branch:
- GitHub Actions creates a "Version Packages" PR
- Merge PR to publish packages
- Storybook deploys automatically

## Development Workflow

### Adding a New Component

1. **Create component:**
   ```bash
   # In packages/components-web/src/
   touch MyComponent.tsx
   ```

2. **Add to exports:**
   ```typescript
   // packages/components-web/src/index.tsx
   export * from './MyComponent';
   ```

3. **Create story:**
   ```bash
   # In apps/storybook-web/stories/components/
   touch MyComponent.stories.tsx
   ```

4. **Build and preview:**
   ```bash
   pnpm dev # Watches for changes
   pnpm storybook # View in Storybook
   ```

### Adding a New Token

1. **Edit tokens:**
   ```typescript
   // packages/tokens/src/colors.ts (or other token file)
   export const myNewColor = { h: 200, s: 50, l: 50 };
   ```

2. **Build packages:**
   ```bash
   pnpm build
   ```

3. **Create story:**
   ```typescript
   // apps/storybook-web/stories/tokens/MyTokens.stories.tsx
   ```

### Making Changes

```bash
# Start development
pnpm dev

# Make changes to packages
# Turborepo watches and rebuilds automatically

# Start Storybook (in another terminal)
pnpm storybook

# View changes at http://localhost:6006
```

## Troubleshooting

### Build Errors

```bash
# Clean and rebuild
pnpm clean
pnpm install
pnpm build
```

### Storybook Not Starting

```bash
# Clear Storybook cache
rm -rf apps/storybook-web/node_modules/.cache

# Reinstall
pnpm install
pnpm storybook
```

### Package Import Errors

```bash
# Make sure packages are built
pnpm build

# Check workspace links
pnpm list --depth=0
```

### Tailwind Not Working

```bash
# Install missing dependencies
cd apps/storybook-web
pnpm add -D tailwindcss-animate

# Rebuild
pnpm build
```

## Next Steps

1. **Customize tokens** to match your brand
2. **Add more components** to the design system
3. **Write comprehensive stories** for all components
4. **Set up automated testing** (Chromatic, Percy, etc.)
5. **Document component APIs** with JSDoc
6. **Add accessibility tests** with @storybook/addon-a11y
7. **Create design guidelines** documentation

## Support

- **Documentation:** Check docs folder
- **Issues:** [GitHub Issues](https://github.com/daniellauding/plotta-storybook/issues)
- **Storybook:** http://localhost:6006

## Resources

- [Turborepo Docs](https://turbo.build/repo/docs)
- [Changesets Docs](https://github.com/changesets/changesets)
- [Storybook Docs](https://storybook.js.org/docs)
- [pnpm Docs](https://pnpm.io/)
