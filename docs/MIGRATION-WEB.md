# Migration Guide: Plotta Web App

This guide will help you migrate the main Plotta web application to use the centralized design system.

## Overview

**Project:** `/Users/daniellauding/Work/instinctly/internal/plotta`
**Tech Stack:** React + Vite + TypeScript + Tailwind + shadcn/ui
**Migration Complexity:** ⭐⭐ Medium

## Step 1: Install Packages

```bash
cd /Users/daniellauding/Work/instinctly/internal/plotta

# Install the design system packages
pnpm add @plotta/tokens @plotta/utils @plotta/components-web
```

## Step 2: Update Tailwind Configuration

Replace the hardcoded theme colors with tokens from `@plotta/tokens`.

**Before:** `tailwind.config.ts`
```typescript
// Hardcoded theme extension
extend: {
  colors: {
    border: 'hsl(var(--border))',
    // ... more colors
  }
}
```

**After:** `tailwind.config.ts`
```typescript
import { colors, hslToCssVar } from '@plotta/tokens';

// Auto-generated from tokens
extend: {
  colors: {
    border: 'hsl(var(--border))',
    // ... (keep existing for now)
  }
}
```

## Step 3: Replace CSS Variables

Update `src/index.css` to use tokens from `@plotta/tokens`.

**Create a new file:** `src/lib/generate-css-vars.ts`
```typescript
import { colors, hslToCssVar } from '@plotta/tokens';

export function generateCSSVariables() {
  return {
    light: {
      '--background': hslToCssVar(colors.light.background),
      '--foreground': hslToCssVar(colors.light.foreground),
      '--primary': hslToCssVar(colors.light.primary),
      '--primary-foreground': hslToCssVar(colors.light.primaryForeground),
      '--secondary': hslToCssVar(colors.light.secondary),
      '--secondary-foreground': hslToCssVar(colors.light.secondaryForeground),
      '--muted': hslToCssVar(colors.light.muted),
      '--muted-foreground': hslToCssVar(colors.light.mutedForeground),
      '--accent': hslToCssVar(colors.light.accent),
      '--accent-foreground': hslToCssVar(colors.light.accentForeground),
      '--destructive': hslToCssVar(colors.light.destructive),
      '--destructive-foreground': hslToCssVar(colors.light.destructiveForeground),
      '--border': hslToCssVar(colors.light.border),
      '--input': hslToCssVar(colors.light.input),
      '--ring': hslToCssVar(colors.light.ring),
      '--card': hslToCssVar(colors.light.card),
      '--card-foreground': hslToCssVar(colors.light.cardForeground),
      '--popover': hslToCssVar(colors.light.popover),
      '--popover-foreground': hslToCssVar(colors.light.popoverForeground),
    },
    dark: {
      '--background': hslToCssVar(colors.dark.background),
      '--foreground': hslToCssVar(colors.dark.foreground),
      // ... all dark theme colors
    },
  };
}
```

**Note:** For now, keep the existing CSS variables. Tokens act as a single source of truth, and CSS vars can be generated from them.

## Step 4: Replace `cn` Utility

**Before:** `src/lib/utils.ts`
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**After:** `src/lib/utils.ts`
```typescript
// Re-export from design system
export { cn } from '@plotta/utils';

// Keep any other custom utilities here
```

## Step 5: Update Sticky Note Colors

**Before:** `src/components/canvas/ColorPickerDialog.tsx`
```typescript
const presetColors = [
  { name: "Yellow", color: "#fef08a" },
  { name: "Red", color: "#fca5a5" },
  // ... hardcoded colors
];
```

**After:** `src/components/canvas/ColorPickerDialog.tsx`
```typescript
import { colors, hslToHex } from '@plotta/tokens';

const presetColors = Object.entries(colors.sticky).map(([name, hsl]) => ({
  name: name.charAt(0).toUpperCase() + name.slice(1),
  color: hslToHex(hsl),
}));
```

## Step 6: Update Project Theme Colors

**Before:** `src/components/canvas/ProjectSettings.tsx`
```typescript
const THEME_COLORS = [
  { name: "White", value: "#ffffff" },
  { name: "Light Gray", value: "#f5f5f5" },
  // ... hardcoded
];
```

**After:** `src/components/canvas/ProjectSettings.tsx`
```typescript
import { colors, hslToHex } from '@plotta/tokens';

const THEME_COLORS = Object.entries(colors.projectTheme).map(([key, hsl]) => ({
  name: key.replace(/([A-Z])/g, ' $1').trim(),
  value: hslToHex(hsl),
}));
```

## Step 7: Replace UI Components (Optional, Gradual Migration)

You can gradually replace shadcn/ui components with `@plotta/components-web`:

**Before:**
```typescript
import { Button } from "@/components/ui/button";
```

**After:**
```typescript
import { Button } from "@plotta/components-web";
```

**Note:** Since `@plotta/components-web` is based on the same shadcn/ui components, the API is identical. You can migrate components one by one.

## Step 8: Update Breakpoints

**Before:** `src/hooks/use-mobile.tsx`
```typescript
const MOBILE_BREAKPOINT = 768;
```

**After:**  `src/hooks/use-mobile.tsx`
```typescript
import { MOBILE_BREAKPOINT } from '@plotta/tokens';
```

## Testing Checklist

After migration, test the following:

- [ ] Light theme colors match previous design
- [ ] Dark theme toggle works correctly
- [ ] Sticky note colors are identical
- [ ] Project theme colors work as expected
- [ ] All buttons render correctly
- [ ] Responsive breakpoints work
- [ ] Forms and inputs styled correctly
- [ ] No console errors or warnings

## Benefits

✅ **Single source of truth** for design tokens
✅ **Type-safe** design tokens
✅ **Consistent** with mobile app
✅ **Easy updates** - change token, update everywhere
✅ **Better documentation** via Storybook

## Rollback Plan

If issues arise, the migration is designed to be non-breaking:

1. The CSS variables remain unchanged
2. Components work the same way
3. Only the source of tokens changes

Simply revert the package installations and restore original files.

## Next Steps

1. Migrate more shadcn/ui components to `@plotta/components-web`
2. Remove local component copies
3. Update Storybook to point to design system
4. Consider generating CSS variables at build time
