/**
 * Design System Tokens
 *
 * Central source of truth for all design values used across the application.
 * These tokens ensure consistency and make it easy to update the design system.
 */

export const tokens = {
  // Color Palette
  colors: {
    // Primary Brand Colors (Main font color)
    primary: {
      50: "#e6f0f5",
      100: "#b3d1e0",
      200: "#80b2cb",
      300: "#4d93b6",
      400: "#1a74a1",
      500: "#0B3F63", // Main primary - main font color
      600: "#093250",
      700: "#07253d",
      800: "#05182a",
      900: "#030b17",
      950: "#010508",
    },

    // Accent Colors (Brand accent)
    accent: {
      50: "#f9fce6",
      100: "#f0f5b3",
      200: "#e7ee80",
      300: "#dee74d",
      400: "#d5e01a",
      500: "#D4DE26", // Main accent
      600: "#aab21e",
      700: "#808617",
      800: "#565a0f",
      900: "#2c2e08",
      950: "#141501",
    },

    // Neutral Colors
    neutral: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617",
    },

    // Semantic Colors
    success: {
      50: "#f0fdf4",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
    },

    warning: {
      50: "#fffbeb",
      500: "#f59e0b",
      600: "#d97706",
    },

    error: {
      50: "#fef2f2",
      500: "#ef4444",
      600: "#dc2626",
    },

    info: {
      50: "#eff6ff",
      500: "#3b82f6",
      600: "#2563eb",
    },
  },

  // Typography
  typography: {
    fontFamily: {
      sans: [
        "var(--font-ubuntu)",
        "Ubuntu Sans",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "sans-serif",
      ],
      mono: ["monospace"],
    },

    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
      sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
      base: ["1rem", { lineHeight: "1.5rem" }], // 16px
      lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
      xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
      "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
      "5xl": ["3rem", { lineHeight: "1" }], // 48px
      "6xl": ["3.75rem", { lineHeight: "1" }], // 60px
    },

    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },

    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
  },

  // Spacing Scale
  spacing: {
    0: "0",
    1: "0.25rem", // 4px
    2: "0.5rem", // 8px
    3: "0.75rem", // 12px
    4: "1rem", // 16px
    5: "1.25rem", // 20px
    6: "1.5rem", // 24px
    8: "2rem", // 32px
    10: "2.5rem", // 40px
    12: "3rem", // 48px
    16: "4rem", // 64px
    20: "5rem", // 80px
    24: "6rem", // 96px
    32: "8rem", // 128px
  },

  // Border Radius
  borderRadius: {
    none: "0",
    sm: "0.125rem", // 2px
    base: "0.25rem", // 4px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    "3xl": "1.5rem", // 24px
    button: "99px", // Button border radius
    full: "9999px",
  },

  // Shadows
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",

    // Colored shadows for brand elements
    primary: {
      sm: "0 1px 2px 0 rgb(11 63 99 / 0.2)",
      md: "0 4px 6px -1px rgb(11 63 99 / 0.2), 0 2px 4px -2px rgb(11 63 99 / 0.2)",
      lg: "0 10px 15px -3px rgb(11 63 99 / 0.3), 0 4px 6px -4px rgb(11 63 99 / 0.3)",
      xl: "0 20px 25px -5px rgb(11 63 99 / 0.35), 0 8px 10px -6px rgb(11 63 99 / 0.35)",
    },

    accent: {
      sm: "0 1px 2px 0 rgb(212 222 38 / 0.2)",
      md: "0 4px 6px -1px rgb(212 222 38 / 0.2), 0 2px 4px -2px rgb(212 222 38 / 0.2)",
      lg: "0 10px 15px -3px rgb(212 222 38 / 0.3), 0 4px 6px -4px rgb(212 222 38 / 0.3)",
    },
  },

  // Z-Index Scale
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },

  // Breakpoints (for reference, Tailwind handles these)
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // Animation Durations
  animation: {
    duration: {
      fast: "150ms",
      base: "200ms",
      slow: "300ms",
      slower: "500ms",
      slowest: "700ms",
    },

    easing: {
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },

  // Opacity Values
  opacity: {
    0: "0",
    5: "0.05",
    10: "0.1",
    15: "0.15",
    20: "0.2",
    25: "0.25",
    30: "0.3",
    40: "0.4",
    50: "0.5",
    60: "0.6",
    70: "0.7",
    75: "0.75",
    80: "0.8",
    90: "0.9",
    100: "1",
  },
} as const;

// Type exports for TypeScript
export type ColorScale = keyof typeof tokens.colors.primary;
export type SpacingScale = keyof typeof tokens.spacing;
export type ShadowScale = keyof typeof tokens.shadows;
