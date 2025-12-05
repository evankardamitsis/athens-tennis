# Design System

This directory contains the design system for Athens Tennis. It provides a centralized source of truth for all design tokens, utilities, and guidelines.

## Structure

```
design-system/
├── tokens.ts      # Design tokens (colors, typography, spacing, etc.)
├── theme.ts       # Theme configuration and CSS variable generation
├── utils.ts       # Utility functions and helper classes
├── index.ts       # Main export file
└── README.md      # This file
```

## Usage

### Importing Tokens

```typescript
import { tokens } from "@/design-system";

// Access colors
const primaryColor = tokens.colors.primary[500];
const accentColor = tokens.colors.accent[400];

// Access spacing
const padding = tokens.spacing[4]; // '1rem'

// Access shadows
const shadow = tokens.shadows.lg;
```

### Using CSS Variables

All tokens are available as CSS variables in `globals.css`. You can use them directly in your components:

```tsx
<div className="bg-primary-500 text-white p-4 rounded-xl shadow-lg">
  Content
</div>
```

### Using Utility Functions

```typescript
import { getColorVar, colorClass, componentClasses } from "@/design-system";

// Get CSS variable
const color = getColorVar("primary", 500); // 'var(--color-primary-500)'

// Generate Tailwind class
const className = colorClass("primary", 500, "bg"); // 'bg-primary-500'

// Use pre-built component classes
<button className={componentClasses.button.primary}>Click me</button>;
```

## Color Palette

### Primary Colors

- **Primary 500**: Main brand color (`#10b981`)
- Available shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

### Accent Colors

- **Accent 500**: Secondary brand color (`#f59e0b`)
- Available shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

### Neutral Colors

- Used for text, backgrounds, and borders
- Available shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

### Semantic Colors

- **Success**: Green tones for positive actions
- **Warning**: Yellow/amber tones for warnings
- **Error**: Red tones for errors
- **Info**: Blue tones for informational messages

## Typography

### Font Families

- **Sans**: Geist Sans (primary), system fallbacks
- **Mono**: Geist Mono (for code)

### Font Sizes

- `xs`: 0.75rem (12px)
- `sm`: 0.875rem (14px)
- `base`: 1rem (16px)
- `lg`: 1.125rem (18px)
- `xl`: 1.25rem (20px)
- `2xl`: 1.5rem (24px)
- `3xl`: 1.875rem (30px)
- `4xl`: 2.25rem (36px)
- `5xl`: 3rem (48px)
- `6xl`: 3.75rem (60px)

### Font Weights

- `normal`: 400
- `medium`: 500
- `semibold`: 600
- `bold`: 700

## Spacing Scale

The spacing scale uses a consistent 4px base unit:

- `1`: 0.25rem (4px)
- `2`: 0.5rem (8px)
- `3`: 0.75rem (12px)
- `4`: 1rem (16px)
- `6`: 1.5rem (24px)
- `8`: 2rem (32px)
- `12`: 3rem (48px)
- `16`: 4rem (64px)
- `20`: 5rem (80px)
- `24`: 6rem (96px)

## Border Radius

- `sm`: 0.125rem (2px)
- `base`: 0.25rem (4px)
- `md`: 0.375rem (6px)
- `lg`: 0.5rem (8px)
- `xl`: 0.75rem (12px)
- `2xl`: 1rem (16px)
- `3xl`: 1.5rem (24px)
- `full`: 9999px (fully rounded)

## Shadows

### Standard Shadows

- `sm`: Small shadow
- `base`: Default shadow
- `md`: Medium shadow
- `lg`: Large shadow
- `xl`: Extra large shadow
- `2xl`: 2X large shadow
- `inner`: Inset shadow

### Colored Shadows

- `primary-sm`, `primary-md`, `primary-lg`, `primary-xl`: Primary colored shadows
- `accent-sm`, `accent-md`, `accent-lg`: Accent colored shadows

## Z-Index Scale

- `base`: 0
- `dropdown`: 1000
- `sticky`: 1020
- `fixed`: 1030
- `modal-backdrop`: 1040
- `modal`: 1050
- `popover`: 1060
- `tooltip`: 1070

## Component Classes

Pre-built class combinations for common components:

### Buttons

```typescript
componentClasses.button.primary; // Primary button
componentClasses.button.secondary; // Secondary button
componentClasses.button.outline; // Outline button
componentClasses.button.ghost; // Ghost button
```

### Cards

```typescript
componentClasses.card.base; // Base card
componentClasses.card.elevated; // Elevated card
componentClasses.card.glass; // Glass morphism card
```

### Inputs

```typescript
componentClasses.input.base; // Base input
componentClasses.input.error; // Error state input
```

### Badges

```typescript
componentClasses.badge.primary; // Primary badge
componentClasses.badge.accent; // Accent badge
componentClasses.badge.neutral; // Neutral badge
```

## Best Practices

1. **Always use tokens**: Don't hardcode colors, spacing, or other values. Use the design system tokens.

2. **Use CSS variables**: Prefer CSS variables in Tailwind classes over inline styles.

3. **Consistent spacing**: Use the spacing scale consistently throughout the application.

4. **Semantic colors**: Use semantic color names (primary, accent) rather than specific color values.

5. **Component classes**: Use pre-built component classes when available to ensure consistency.

## Updating the Design System

When updating design tokens:

1. Update `tokens.ts` with new values
2. Update `globals.css` to include new CSS variables
3. Update this README if adding new features
4. Test components to ensure changes don't break existing designs

## Examples

### Creating a Button Component

```tsx
import { componentClasses } from "@/design-system";

export function Button({ variant = "primary", children, ...props }) {
  return (
    <button
      className={`rounded-full px-6 py-3 font-semibold transition ${componentClasses.button[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

### Using Colors in Tailwind

```tsx
// Using CSS variables (recommended)
<div className="bg-primary-500 text-white">
  Content
</div>

// Using specific shades
<div className="bg-primary-600 hover:bg-primary-700">
  Content
</div>
```

### Custom Styling with CSS Variables

```tsx
<div
  style={{
    backgroundColor: "var(--color-primary-500)",
    padding: "var(--spacing-4)",
    borderRadius: "var(--radius-xl)",
    boxShadow: "var(--shadow-lg)",
  }}
>
  Content
</div>
```
