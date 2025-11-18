# Migration Guide: Plotta Mobile App

This guide will help you migrate the Plotta mobile application (React Native + Expo) to use the centralized design system.

## Overview

**Project:** `/Users/daniellauding/Work/instinctly/internal/plotta-mob`
**Tech Stack:** React Native + Expo + TypeScript
**Migration Complexity:** ⭐⭐⭐ Medium-High

## Step 1: Install Packages

```bash
cd /Users/daniellauding/Work/instinctly/internal/plotta-mob

# Install the design system packages
pnpm add @plotta/tokens @plotta/components-native
```

## Step 2: Replace Theme File

The mobile app already has a theme system at `lib/theme.ts`. We'll replace it with tokens from `@plotta/tokens`.

**Before:** `lib/theme.ts` (248 lines, custom implementation)

**After:** `lib/theme.ts`
```typescript
/**
 * Plotta Mobile Theme System
 * Now using centralized design tokens from @plotta/tokens
 */

import {
  colors,
  ColorScheme,
  hslToHex,
  spacing,
  borderRadius,
  fontSize,
  fontWeight,
  shadows,
} from '@plotta/tokens';

/**
 * Convert theme from design tokens
 */
export const createTheme = (colorScheme: ColorScheme) => {
  const themeColors = colors[colorScheme];

  return {
    colors: {
      background: hslToHex(themeColors.background),
      foreground: hslToHex(themeColors.foreground),
      card: hslToHex(themeColors.card),
      cardForeground: hslToHex(themeColors.cardForeground),
      primary: hslToHex(themeColors.primary),
      primaryForeground: hslToHex(themeColors.primaryForeground),
      secondary: hslToHex(themeColors.secondary),
      secondaryForeground: hslToHex(themeColors.secondaryForeground),
      muted: hslToHex(themeColors.muted),
      mutedForeground: hslToHex(themeColors.mutedForeground),
      border: hslToHex(themeColors.border),
      input: hslToHex(themeColors.input),
      ring: hslToHex(themeColors.ring),
      destructive: hslToHex(themeColors.destructive),
      destructiveForeground: hslToHex(themeColors.destructiveForeground),
    },
    spacing,
    borderRadius,
    fontSize,
    fontWeight,
    shadows,
  };
};

// Export theme instances
export const lightTheme = createTheme('light');
export const darkTheme = createTheme('dark');

// Re-export types and utilities
export type { ColorScheme };
export { hslToHex, hslToString } from '@plotta/tokens';
```

**Result:** Reduced from 248 lines to ~50 lines, with guaranteed consistency with web app.

## Step 3: Replace Colors Constants

**Before:** `constants/Colors.ts`
```typescript
const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  light: {
    text: '#000',
    background: '#fff',
    // ...
  },
  dark: {
    text: '#fff',
    background: '#000',
    // ...
  },
};
```

**After:** `constants/Colors.ts`
```typescript
/**
 * Re-export colors from design system
 * This file is kept for backwards compatibility
 */
import { colors, hslToHex } from '@plotta/tokens';

export default {
  light: {
    text: hslToHex(colors.light.foreground),
    background: hslToHex(colors.light.background),
    tint: hslToHex(colors.light.primary),
    tabIconDefault: hslToHex(colors.light.mutedForeground),
    tabIconSelected: hslToHex(colors.light.primary),
  },
  dark: {
    text: hslToHex(colors.dark.foreground),
    background: hslToHex(colors.dark.background),
    tint: hslToHex(colors.dark.primary),
    tabIconDefault: hslToHex(colors.dark.mutedForeground),
    tabIconSelected: hslToHex(colors.dark.primary),
  },
};
```

## Step 4: Update Sticky Note Colors

The mobile app has sticky colors defined in `lib/theme.ts`. Replace with design system tokens:

**Before:**
```typescript
export const STICKY_COLORS = {
  yellow: {
    value: 'yellow',
    hsl: 'hsl(45, 85%, 70%)',
    // ...
  },
  // ... different values than web
};
```

**After:**
```typescript
import { colors, hslToHex } from '@plotta/tokens';

export const STICKY_COLORS = Object.fromEntries(
  Object.entries(colors.sticky).map(([name, hsl]) => [
    name,
    {
      value: name,
      label: name.charAt(0).toUpperCase() + name.slice(1),
      color: hslToHex(hsl),
    },
  ])
);
```

## Step 5: Update Theme Hook

**Current:** `hooks/useTheme.tsx` already exists and works well

**Update:** Just ensure it uses the new `createTheme` from step 2

```typescript
// In hooks/useTheme.tsx
import { createTheme, ColorScheme, lightTheme, darkTheme } from '../lib/theme';

// The rest remains the same
```

## Step 6: Replace Component Styles

### Option A: Use Design System Components

**Before:**
```typescript
// Custom button in components
<TouchableOpacity style={styles.button}>
  <Text style={styles.buttonText}>Click me</Text>
</TouchableOpacity>
```

**After:**
```typescript
import { Button } from '@plotta/components-native';

<Button variant="default">Click me</Button>
```

### Option B: Use Design Tokens

**Before:**
```typescript
const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f3f4f6',
  },
});
```

**After:**
```typescript
import { spacing, borderRadius, colors, hslToHex } from '@plotta/tokens';

const styles = StyleSheet.create({
  container: {
    padding: spacing[4],  // 16
    borderRadius: borderRadius.md,  // 8
    backgroundColor: hslToHex(colors.light.secondary),
  },
});
```

## Step 7: Update Typography

**Before:**
```typescript
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});
```

**After:**
```typescript
import { fontSize, fontWeight } from '@plotta/tokens';

const styles = StyleSheet.create({
  title: {
    fontSize: fontSize['2xl'],  // 24
    fontWeight: fontWeight.semibold,  // '600'
  },
});
```

## Step 8: Update Shadows

**Before:**
```typescript
const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
```

**After:**
```typescript
import { shadows } from '@plotta/tokens';

const styles = StyleSheet.create({
  card: {
    ...shadows.md,
  },
});
```

## Component Migration Strategy

### High Priority (Migrate First)
1. **Button** - Use `@plotta/components-native/Button`
2. **StickyNote** - Update to use design tokens for colors
3. **Card/Container** - Use spacing and border radius tokens

### Medium Priority
1. Form inputs
2. Dialogs and modals
3. Typography components

### Low Priority
1. Icons (already using @expo/vector-icons)
2. Navigation components
3. Custom illustrations

## Testing Checklist

After migration, test on both iOS and Android:

- [ ] Light theme renders correctly
- [ ] Dark theme renders correctly
- [ ] Theme toggle works
- [ ] Sticky note colors match web app
- [ ] Button components work on both platforms
- [ ] Shadows render correctly (iOS vs Android elevation)
- [ ] Typography scales properly
- [ ] Spacing is consistent
- [ ] No TypeScript errors
- [ ] No runtime errors

## Platform-Specific Considerations

### iOS
- Shadows render using shadow properties
- Font rendering may differ slightly

### Android
- Shadows use elevation property
- May need to adjust shadow opacity

## Benefits

✅ **100% consistent** with web app colors
✅ **Reduced code** - 248 lines → 50 lines in theme.ts
✅ **Type-safe** design tokens
✅ **Easy updates** - single source of truth
✅ **Cross-platform** components

## Performance Notes

- `hslToHex()` conversion happens once at theme creation
- No runtime performance impact
- Tokens are tree-shakeable

## Rollback Plan

1. Keep old `lib/theme.ts` as `lib/theme.old.ts`
2. If issues arise, restore old file
3. Remove design system packages

## Next Steps

1. Migrate all hardcoded colors to tokens
2. Replace custom components with design system components
3. Update Storybook (if mobile Storybook is set up)
4. Document custom mobile-specific patterns
