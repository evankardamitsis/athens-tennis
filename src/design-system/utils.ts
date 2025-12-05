/**
 * Design System Utilities
 *
 * Helper functions and utilities for working with the design system.
 */

import { tokens } from "./tokens";

/**
 * Get a CSS variable name for a color
 */
export function getColorVar(
  family:
    | "primary"
    | "accent"
    | "neutral"
    | "success"
    | "warning"
    | "error"
    | "info",
  shade: string | number
): string {
  return `var(--color-${family}-${shade})`;
}

/**
 * Get a CSS variable name for spacing
 */
export function getSpacingVar(scale: keyof typeof tokens.spacing): string {
  return `var(--spacing-${scale})`;
}

/**
 * Get a CSS variable name for border radius
 */
export function getRadiusVar(scale: keyof typeof tokens.borderRadius): string {
  return `var(--radius-${scale})`;
}

/**
 * Get a CSS variable name for shadow
 */
export function getShadowVar(scale: keyof typeof tokens.shadows): string {
  const shadow = tokens.shadows[scale];
  if (typeof shadow === "string") {
    return `var(--shadow-${scale})`;
  }
  return "";
}

/**
 * Get a CSS variable name for z-index
 */
export function getZIndexVar(scale: keyof typeof tokens.zIndex): string {
  return `var(--z-${scale})`;
}

/**
 * Generate Tailwind class for color
 * Example: colorClass('primary', 500) => 'text-primary-500'
 */
export function colorClass(
  family: "primary" | "accent" | "neutral",
  shade: string | number,
  prefix: "text" | "bg" | "border" = "text"
): string {
  return `${prefix}-${family}-${shade}`;
}

/**
 * Generate Tailwind class for spacing
 * Example: spacingClass(4) => 'p-4' or 'm-4'
 */
export function spacingClass(
  scale: keyof typeof tokens.spacing,
  prefix:
    | "p"
    | "px"
    | "py"
    | "pt"
    | "pr"
    | "pb"
    | "pl"
    | "m"
    | "mx"
    | "my"
    | "mt"
    | "mr"
    | "mb"
    | "ml"
    | "gap" = "p"
): string {
  return `${prefix}-${scale}`;
}

/**
 * Common component class combinations
 */
export const componentClasses = {
  // Buttons
  button: {
    primary:
      "bg-[#D4DE26] text-primary-500 rounded-[99px] hover:bg-accent-600 focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 transition-colors",
    secondary:
      "bg-white text-primary-500 border border-accent-500 rounded-[99px] hover:bg-accent-50 focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 transition-colors",
    outline:
      "border-2 border-primary-500 text-primary-500 rounded-[99px] hover:bg-primary-50 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 transition-colors",
    ghost:
      "text-primary-500 rounded-[99px] hover:bg-primary-50 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 transition-colors",
  },

  // Cards
  card: {
    base: "bg-white rounded-3xl border border-neutral-200 shadow-lg",
    elevated: "bg-white rounded-3xl border border-neutral-200 shadow-xl",
    glass:
      "bg-white/80 backdrop-blur-lg rounded-3xl border border-white/70 shadow-lg",
  },

  // Inputs
  input: {
    base: "w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none",
    error: "border-error-500 focus:border-error-500 focus:ring-error-500/20",
  },

  // Badges
  badge: {
    primary:
      "badge-primary inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold",
    accent:
      "inline-flex items-center rounded-full bg-accent-100 px-3 py-1 text-sm font-semibold text-accent-700",
    neutral:
      "inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-sm font-semibold text-neutral-700",
  },
} as const;

/**
 * Animation utilities
 */
export const animations = {
  duration: tokens.animation.duration,
  easing: tokens.animation.easing,

  // Common animation presets
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.2, ease: tokens.animation.easing.out },
  },

  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: tokens.animation.easing.out },
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.2, ease: tokens.animation.easing.out },
  },
} as const;
