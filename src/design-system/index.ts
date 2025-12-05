/**
 * Design System
 *
 * Central export point for the design system.
 * Import from here to use design tokens, utilities, and helpers.
 */

export { tokens } from "./tokens";
export type { ColorScale, SpacingScale, ShadowScale } from "./tokens";
export { generateThemeCSS, getColor, getSpacing, getShadow } from "./theme";
export {
  getColorVar,
  getSpacingVar,
  getRadiusVar,
  getShadowVar,
  getZIndexVar,
  colorClass,
  spacingClass,
  componentClasses,
  animations,
} from "./utils";
