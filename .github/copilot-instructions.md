# AI Style Guide Instructions

Follow these instructions to ensure all UI components and layouts are consistent with the style guide defined in `globals.css`.

## 1. Color Palette

- Use only the color variables defined in `globals.css` (e.g., `--color-primary-500`, `--color-secondary-500`, `--color-accent-500`, `--color-neutral-50`, etc.).
- Reference the color roles (primary, secondary,muted, popover, card, border, input, ring accent, neutral, foreground, background, primary-foreground, secondary-foreground, muted-foreground) for backgrounds, text, borders, and UI states.

## 2. Typography

- Use modern, highly legible font styles.
- Font family: `var(--font-sans)` for UI and body, `var(--font-mono)` for code.
- Font styles and sizes (match exactly as in the theme demo):
  - Display: 20px, bold, tracking-tight, font-sans
  - Heading 1: 18px, semi-bold, tracking-tight, font-sans
  - Heading 2: 16px, semi-bold, font-sans
  - Heading 3: 14px, medium, font-sans
  - Body: 14px, normal, font-sans
  - Button: 14px, medium, font-sans
  - Caption: 12px, normal, text-neutral-500, font-sans
  - Mono: 12px, font-mono, bg-neutral-100, px-2 py-1, rounded

## 3. Surface & Card

- Use the surface and card tokens for backgrounds and containers as mapped in `globals.css`.
- Apply the correct foreground and background color variables for each surface type (e.g., card, popover, muted, accent, destructive).

## 4. Spacing

- Spacing scale (use for margin and padding, match the demo bars):
  - Spacing 2: 2px
  - Spacing 4: 4px
  - Spacing 8: 8px
  - Spacing 12: 12px
  - Spacing 16: 16px
  - Spacing 20: 20px
  - Spacing 24: 24px
  - Spacing 32: 32px

## 5. General Rules

- Do not use hardcoded colors or fonts; always use the CSS variables.
- Ensure all UI elements match the visual style and proportions shown in the theme image.
- Maintain high contrast and accessibility for text and interactive elements.
- Use [shadcn/ui](https://ui.shadcn.com/) components and conventions wherever possible for consistency.

**Reference:**

- CSS: `app/globals.css`
