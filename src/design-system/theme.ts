/**
 * Theme Configuration
 *
 * Maps design tokens to CSS variables and provides theme utilities.
 */

import { tokens } from "./tokens";

/**
 * Generate CSS custom properties from tokens
 */
export function generateThemeCSS(): string {
  const cssVars: string[] = [];

  // Color variables
  Object.entries(tokens.colors.primary).forEach(([key, value]) => {
    cssVars.push(`  --color-primary-${key}: ${value};`);
  });

  Object.entries(tokens.colors.accent).forEach(([key, value]) => {
    cssVars.push(`  --color-accent-${key}: ${value};`);
  });

  Object.entries(tokens.colors.neutral).forEach(([key, value]) => {
    cssVars.push(`  --color-neutral-${key}: ${value};`);
  });

  // Semantic colors
  Object.entries(tokens.colors.success).forEach(([key, value]) => {
    cssVars.push(`  --color-success-${key}: ${value};`);
  });

  Object.entries(tokens.colors.warning).forEach(([key, value]) => {
    cssVars.push(`  --color-warning-${key}: ${value};`);
  });

  Object.entries(tokens.colors.error).forEach(([key, value]) => {
    cssVars.push(`  --color-error-${key}: ${value};`);
  });

  Object.entries(tokens.colors.info).forEach(([key, value]) => {
    cssVars.push(`  --color-info-${key}: ${value};`);
  });

  // Spacing
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    cssVars.push(`  --spacing-${key}: ${value};`);
  });

  // Border radius
  Object.entries(tokens.borderRadius).forEach(([key, value]) => {
    cssVars.push(`  --radius-${key}: ${value};`);
  });

  // Shadows
  Object.entries(tokens.shadows).forEach(([key, value]) => {
    if (typeof value === "string") {
      cssVars.push(`  --shadow-${key}: ${value};`);
    }
  });

  // Z-index
  Object.entries(tokens.zIndex).forEach(([key, value]) => {
    cssVars.push(`  --z-${key}: ${value};`);
  });

  return `:root {\n${cssVars.join("\n")}\n}`;
}

/**
 * Get a color value from the theme
 */
export function getColor(
  colorFamily:
    | "primary"
    | "accent"
    | "neutral"
    | "success"
    | "warning"
    | "error"
    | "info",
  shade: string | number
): string {
  const family = tokens.colors[colorFamily];
  if (typeof family === "object" && shade in family) {
    return family[shade as keyof typeof family] as string;
  }
  return "";
}

/**
 * Get a spacing value
 */
export function getSpacing(scale: keyof typeof tokens.spacing): string {
  return tokens.spacing[scale];
}

/**
 * Get a shadow value
 */
export function getShadow(scale: keyof typeof tokens.shadows): string {
  const shadow = tokens.shadows[scale];
  return typeof shadow === "string" ? shadow : "";
}
