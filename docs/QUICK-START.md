# Quick Start Guide

Get up and running with the Plotta Design System in 5 minutes.

## Installation

### For Web Projects (React + Tailwind)

```bash
pnpm add @plotta/tokens @plotta/utils @plotta/components-web
```

### For React Native Projects

```bash
pnpm add @plotta/tokens @plotta/components-native
```

### For Vanilla JS/Static Sites

```bash
pnpm add @plotta/tokens
```

## Basic Usage

### Colors

```typescript
import { colors, hslToHex, hslToString } from '@plotta/tokens';

// Get a color in hex format
const primaryHex = hslToHex(colors.light.primary); // "#000000"

// Get a color as CSS hsl() string
const primaryCSS = hslToString(colors.light.primary); // "hsl(0, 0%, 0%)"

// Use sticky note colors
const yellowSticky = hslToHex(colors.sticky.yellow); // "#f3de8a"
```

### Typography

```typescript
import { fontSize, fontWeight } from '@plotta/tokens';

// React Native
<Text style={{ fontSize: fontSize.lg, fontWeight: fontWeight.bold }}>
  Hello World
</Text>

// Web (Tailwind)
<h1 className="text-lg font-bold">Hello World</h1>
```

### Spacing

```typescript
import { spacing } from '@plotta/tokens';

// React Native
<View style={{ padding: spacing[4], margin: spacing[2] }}>
  {/* 16px padding, 8px margin */}
</View>

// Web (Tailwind)
<div className="p-4 m-2">
  {/* 16px padding, 8px margin */}
</div>
```

### Components (Web)

```typescript
import { Button } from '@plotta/components-web';

function App() {
  return (
    <div>
      <Button variant="default">Click me</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Cancel</Button>
    </div>
  );
}
```

### Components (React Native)

```typescript
import { Button } from '@plotta/components-native';

function App() {
  return (
    <View>
      <Button variant="default">Click me</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Cancel</Button>
    </View>
  );
}
```

## Integration Examples

### React + Tailwind

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
      },
    },
  },
};

export default config;
```

```css
/* globals.css */
@import '@plotta/tokens/css/variables.css';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### React Native + Expo

```typescript
// theme.ts
import { createTheme } from '@plotta/tokens/native';

export const lightTheme = createTheme('light');
export const darkTheme = createTheme('dark');
```

```typescript
// App.tsx
import { lightTheme } from './theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightTheme.colors.background,
    padding: lightTheme.spacing.md,
  },
  text: {
    color: lightTheme.colors.foreground,
    fontSize: lightTheme.fontSize.base,
  },
});
```

## Project-Specific Guides

- [Web App Migration](./MIGRATION-WEB.md)
- [Mobile App Migration](./MIGRATION-MOBILE.md)
- [Browser Extension Migration](./MIGRATION-EXTENSION.md)
- [Landing Page Migration](./MIGRATION-LANDING.md)

## Documentation

View the full design system documentation in Storybook:

```bash
cd plotta-storybook
pnpm install
pnpm storybook
```

Open [http://localhost:6006](http://localhost:6006)

## Support

- Report issues: [GitHub Issues](https://github.com/daniellauding/plotta-storybook/issues)
- Documentation: [Storybook](http://localhost:6006)
- Migration guides: See docs folder
