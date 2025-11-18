/**
 * Button Component (React Native)
 *
 * A versatile button component for React Native with multiple variants and sizes.
 * Uses design tokens from @plotta/tokens for consistent styling.
 */

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  type TouchableOpacityProps,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { spacing, fontSize, fontWeight, borderRadius } from '@plotta/tokens';

export interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  /**
   * Button variant
   */
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost';
  /**
   * Button size
   */
  size?: 'default' | 'sm' | 'lg';
  /**
   * Button text
   */
  children: React.ReactNode;
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Custom button style
   */
  style?: ViewStyle;
  /**
   * Custom text style
   */
  textStyle?: TextStyle;
}

/**
 * Button component for React Native
 *
 * @example
 * ```tsx
 * <Button variant="default">Click me</Button>
 * <Button variant="destructive" size="sm">Delete</Button>
 * <Button variant="outline" loading>Loading...</Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'default',
  children,
  loading = false,
  disabled,
  style,
  textStyle,
  ...props
}) => {
  const buttonStyle = [
    styles.base,
    styles[`variant_${variant}`],
    styles[`size_${size}`],
    disabled && styles.disabled,
    style,
  ];

  const textStyleCombined = [
    styles.text,
    styles[`text_${variant}`],
    styles[`textSize_${size}`],
    disabled && styles.textDisabled,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'outline' || variant === 'ghost' ? '#000' : '#fff'}
          size="small"
        />
      ) : (
        <Text style={textStyleCombined}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
  },
  // Variants
  variant_default: {
    backgroundColor: '#000',
  },
  variant_destructive: {
    backgroundColor: '#ef4444',
  },
  variant_outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  variant_secondary: {
    backgroundColor: '#f3f4f6',
  },
  variant_ghost: {
    backgroundColor: 'transparent',
  },
  // Sizes
  size_default: {
    height: 40,
    paddingHorizontal: spacing[4],
  },
  size_sm: {
    height: 36,
    paddingHorizontal: spacing[3],
    borderRadius: borderRadius.md,
  },
  size_lg: {
    height: 44,
    paddingHorizontal: spacing[8],
    borderRadius: borderRadius.md,
  },
  // Text styles
  text: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
  },
  text_default: {
    color: '#fff',
  },
  text_destructive: {
    color: '#fff',
  },
  text_outline: {
    color: '#000',
  },
  text_secondary: {
    color: '#000',
  },
  text_ghost: {
    color: '#000',
  },
  // Text sizes
  textSize_default: {
    fontSize: fontSize.sm,
  },
  textSize_sm: {
    fontSize: fontSize.sm,
  },
  textSize_lg: {
    fontSize: fontSize.base,
  },
  // Disabled state
  disabled: {
    opacity: 0.5,
  },
  textDisabled: {
    opacity: 0.5,
  },
});
