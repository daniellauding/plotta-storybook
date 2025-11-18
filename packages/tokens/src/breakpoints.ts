/**
 * Plotta Design System - Breakpoint Tokens
 *
 * Responsive breakpoints for all platforms
 */

/**
 * Breakpoint values (in pixels)
 * Matches Tailwind default breakpoints with custom 2xl
 */
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1400,
} as const;

/**
 * Mobile breakpoint threshold
 * Used in use-mobile hook
 */
export const MOBILE_BREAKPOINT = breakpoints.md;

/**
 * Container max widths for each breakpoint
 */
export const containerMaxWidth = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1400px',
} as const;

// Type exports
export type Breakpoint = keyof typeof breakpoints;
