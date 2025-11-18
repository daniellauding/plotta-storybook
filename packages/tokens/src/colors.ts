/**
 * Plotta Design System - Color Tokens
 *
 * All colors are defined in HSL format for maximum flexibility.
 * Use the converter functions to get the format you need:
 * - hslToString() for CSS hsl() values
 * - hslToHex() for hex color codes
 * - hslToCssVar() for Tailwind CSS variables
 */

export interface HSL {
  h: number;
  s: number;
  l: number;
}

/**
 * Semantic color tokens for light theme
 */
export const lightColors = {
  background: { h: 0, s: 0, l: 100 },
  foreground: { h: 0, s: 0, l: 0 },
  card: { h: 0, s: 0, l: 98 },
  cardForeground: { h: 0, s: 0, l: 0 },
  popover: { h: 0, s: 0, l: 100 },
  popoverForeground: { h: 0, s: 0, l: 0 },
  primary: { h: 0, s: 0, l: 0 },
  primaryForeground: { h: 0, s: 0, l: 100 },
  secondary: { h: 0, s: 0, l: 96 },
  secondaryForeground: { h: 0, s: 0, l: 0 },
  muted: { h: 0, s: 0, l: 96 },
  mutedForeground: { h: 0, s: 0, l: 40 },
  accent: { h: 0, s: 0, l: 96 },
  accentForeground: { h: 0, s: 0, l: 0 },
  destructive: { h: 0, s: 70, l: 50 },
  destructiveForeground: { h: 0, s: 0, l: 100 },
  border: { h: 0, s: 0, l: 90 },
  input: { h: 0, s: 0, l: 90 },
  ring: { h: 0, s: 0, l: 0 },
  // Sidebar colors
  sidebarBackground: { h: 0, s: 0, l: 98 },
  sidebarForeground: { h: 0, s: 0, l: 0 },
  sidebarPrimary: { h: 0, s: 0, l: 0 },
  sidebarPrimaryForeground: { h: 0, s: 0, l: 100 },
  sidebarAccent: { h: 0, s: 0, l: 96 },
  sidebarAccentForeground: { h: 0, s: 0, l: 0 },
  sidebarBorder: { h: 0, s: 0, l: 90 },
  sidebarRing: { h: 0, s: 0, l: 0 },
} as const;

/**
 * Semantic color tokens for dark theme
 */
export const darkColors = {
  background: { h: 0, s: 0, l: 5 },
  foreground: { h: 0, s: 0, l: 100 },
  card: { h: 0, s: 0, l: 8 },
  cardForeground: { h: 0, s: 0, l: 100 },
  popover: { h: 0, s: 0, l: 5 },
  popoverForeground: { h: 0, s: 0, l: 100 },
  primary: { h: 0, s: 0, l: 100 },
  primaryForeground: { h: 0, s: 0, l: 0 },
  secondary: { h: 0, s: 0, l: 10 },
  secondaryForeground: { h: 0, s: 0, l: 100 },
  muted: { h: 0, s: 0, l: 15 },
  mutedForeground: { h: 0, s: 0, l: 60 },
  accent: { h: 0, s: 0, l: 15 },
  accentForeground: { h: 0, s: 0, l: 100 },
  destructive: { h: 0, s: 70, l: 50 },
  destructiveForeground: { h: 0, s: 0, l: 100 },
  border: { h: 0, s: 0, l: 20 },
  input: { h: 0, s: 0, l: 20 },
  ring: { h: 0, s: 0, l: 100 },
  // Sidebar colors
  sidebarBackground: { h: 0, s: 0, l: 8 },
  sidebarForeground: { h: 0, s: 0, l: 100 },
  sidebarPrimary: { h: 0, s: 0, l: 100 },
  sidebarPrimaryForeground: { h: 0, s: 0, l: 0 },
  sidebarAccent: { h: 0, s: 0, l: 15 },
  sidebarAccentForeground: { h: 0, s: 0, l: 100 },
  sidebarBorder: { h: 0, s: 0, l: 20 },
  sidebarRing: { h: 0, s: 0, l: 100 },
} as const;

/**
 * Sticky note color palette
 * These colors are consistent across all platforms
 */
export const stickyColors = {
  yellow: { h: 45, s: 85, l: 76 },
  red: { h: 0, s: 86, l: 80 },
  blue: { h: 212, s: 96, l: 78 },
  green: { h: 142, s: 76, l: 73 },
  purple: { h: 270, s: 73, l: 85 },
  orange: { h: 25, s: 97, l: 72 },
  pink: { h: 330, s: 85, l: 83 },
  teal: { h: 172, s: 66, l: 65 },
  indigo: { h: 231, s: 78, l: 80 },
  lime: { h: 84, s: 81, l: 72 },
} as const;

/**
 * Project theme colors (for canvas background)
 */
export const projectThemeColors = {
  white: { h: 0, s: 0, l: 100 },
  lightGray: { h: 0, s: 0, l: 96 },
  lightGreen: { h: 142, s: 76, l: 95 },
  lightBlue: { h: 212, s: 96, l: 95 },
  lightYellow: { h: 45, s: 85, l: 92 },
  lightPink: { h: 330, s: 85, l: 96 },
  lightPurple: { h: 270, s: 73, l: 96 },
} as const;

/**
 * Priority level colors
 */
export const priorityColors = {
  low: { h: 142, s: 76, l: 50 },
  medium: { h: 45, s: 93, l: 47 },
  high: { h: 25, s: 95, l: 53 },
  critical: { h: 0, s: 84, l: 60 },
} as const;

/**
 * All color tokens combined
 */
export const colors = {
  light: lightColors,
  dark: darkColors,
  sticky: stickyColors,
  projectTheme: projectThemeColors,
  priority: priorityColors,
} as const;

// Type exports
export type ColorScheme = 'light' | 'dark';
export type StickyColor = keyof typeof stickyColors;
export type ProjectThemeColor = keyof typeof projectThemeColors;
export type PriorityColor = keyof typeof priorityColors;
