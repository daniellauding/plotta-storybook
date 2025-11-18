/**
 * Plotta Design System - Border Tokens
 *
 * Border radius and width tokens
 */

/**
 * Border radius scale (in pixels)
 */
export const borderRadius = {
  none: 0,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
  '2xl': 16,
  '3xl': 24,
  full: 9999,
} as const;

/**
 * Border width scale (in pixels)
 */
export const borderWidth = {
  0: 0,
  1: 1,
  2: 2,
  4: 4,
  8: 8,
} as const;

/**
 * Border width aliases
 */
export const borderWidthAliases = {
  default: borderWidth[1],
  thin: borderWidth[1],
  thick: borderWidth[2],
} as const;

/**
 * Complete border system
 */
export const borders = {
  radius: borderRadius,
  width: borderWidth,
  widthAliases: borderWidthAliases,
} as const;

// Type exports
export type BorderRadius = keyof typeof borderRadius;
export type BorderWidth = keyof typeof borderWidth;
