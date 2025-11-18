# @plotta/tokens

Design tokens for the Plotta design system.

## Installation

```bash
npm install @plotta/tokens
# or
pnpm add @plotta/tokens
```

## Usage

### Colors

```typescript
import { colors, hslToHex, hslToString, hslToCssVar } from '@plotta/tokens';

// Get HSL object
const primary = colors.light.primary; // { h: 0, s: 0, l: 0 }

// Convert to different formats
const hexColor = hslToHex(primary); // "#000000"
const cssColor = hslToString(primary); // "hsl(0, 0%, 0%)"
const cssVar = hslToCssVar(primary); // "0 0% 0%"

// Sticky note colors
const yellowHex = hslToHex(colors.sticky.yellow);
```

### Typography

```typescript
import { typography } from '@plotta/tokens';

// Font sizes (in pixels)
const baseFontSize = typography.fontSize.base; // 16

// Font weights
const boldWeight = typography.fontWeight.bold; // "700"

// Line heights
const normalLineHeight = typography.lineHeight.normal; // 1.5
```

### Spacing

```typescript
import { spacing, spacingAliases } from '@plotta/tokens';

// Use numeric scale
const padding = spacing[4]; // 16px

// Or use aliases
const margin = spacingAliases.md; // 16px
```

### Shadows

```typescript
import { shadows, shadowsCSS } from '@plotta/tokens';

// For React Native
const shadow = shadows.md;
// {
//   shadowColor: '#000',
//   shadowOffset: { width: 0, height: 2 },
//   shadowOpacity: 0.1,
//   shadowRadius: 4,
//   elevation: 3,
// }

// For Web/CSS
const boxShadow = shadowsCSS.md; // "0 4px 6px -1px rgba(0, 0, 0, 0.1), ..."
```

### Borders

```typescript
import { borders } from '@plotta/tokens';

const radius = borders.radius.md; // 6px
const width = borders.width[2]; // 2px
```

### Breakpoints

```typescript
import { breakpoints, MOBILE_BREAKPOINT } from '@plotta/tokens';

const tablet = breakpoints.md; // 768
const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
```

## Platform-Specific Usage

### React + Tailwind (Web)

Generate CSS variables from tokens:

```typescript
import { colors, hslToCssVar } from '@plotta/tokens';

// In your CSS file
:root {
  --background: ${hslToCssVar(colors.light.background)};
  --foreground: ${hslToCssVar(colors.light.foreground)};
}
```

### React Native

Convert colors to hex:

```typescript
import { colors, hslToHex } from '@plotta/tokens';

const theme = {
  colors: {
    background: hslToHex(colors.light.background),
    foreground: hslToHex(colors.light.foreground),
  },
};
```

### Browser Extension

Generate static CSS:

```typescript
import { colors, hslToHex } from '@plotta/tokens';

const css = `
  :root {
    --primary: ${hslToHex(colors.light.primary)};
    --border: ${hslToHex(colors.light.border)};
  }
`;
```

## Token Categories

- **Colors**: Semantic colors, sticky note colors, priority colors
- **Typography**: Font sizes, weights, line heights, letter spacing
- **Spacing**: 4px baseline grid, named aliases
- **Shadows**: Box shadows for web and React Native
- **Borders**: Border radius and width scales
- **Breakpoints**: Responsive breakpoints

## License

MIT
