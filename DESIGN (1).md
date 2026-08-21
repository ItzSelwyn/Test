---
name: Project Manager
colors:
  surface: '#FFF7ED'
  surface-dim: '#FFEDD5'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ed'
  surface-container: '#FED7AA'
  surface-container-high: '#ffe2db'
  surface-container-highest: '#ffdbd1'
  on-surface: '#431407'
  on-surface-variant: '#584237'
  inverse-surface: '#542112'
  inverse-on-surface: '#ffede9'
  outline: '#8c7164'
  outline-variant: '#e0c0b1'
  surface-tint: '#9d4300'
  primary: '#9d4300'
  on-primary: '#ffffff'
  primary-container: '#FFEDD5'
  on-primary-container: '#9A3412'
  inverse-primary: '#ffb690'
  secondary: '#944a00'
  on-secondary: '#ffffff'
  secondary-container: '#fd933d'
  on-secondary-container: '#693300'
  tertiary: '#a73a00'
  on-tertiary: '#ffffff'
  tertiary-container: '#ff6d2c'
  on-tertiary-container: '#5d1d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbca'
  primary-fixed-dim: '#ffb690'
  on-primary-fixed: '#341100'
  on-primary-fixed-variant: '#783200'
  secondary-fixed: '#ffdcc5'
  secondary-fixed-dim: '#ffb783'
  on-secondary-fixed: '#301400'
  on-secondary-fixed-variant: '#713700'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb599'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#7f2b00'
  background: '#fff8f6'
  on-background: '#380c02'
  surface-variant: '#ffdbd1'
typography:
  display:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  column-gutter: 20px
  container-margin: 40px
---

## Brand & Style
The design system is optimized for high-velocity team collaboration, prioritizing clarity, focus, and momentum. The aesthetic is **Modern Minimalist** with a specialized **High-Contrast** twist. By utilizing a monochromatic orange palette, the UI radiates energy and urgency while maintaining the organized calm of a professional utility. 

Drawing inspiration from high-performance developer tools, the system eliminates cognitive load through heavy whitespace and precise typography. The brand personality is optimistic, energetic, and dependable. Surfaces remain clean and flat, using tonal shifts within the orange spectrum to define structural hierarchy rather than decorative elements.

## Colors
The palette is a strictly monochromatic orange scheme designed to foster focus and warmth.
- **Primary:** A vibrant Safety Orange (`#F97316`) used for main actions, active states, and focus indicators.
- **Secondary & Tertiary:** Variations in saturation and value used for hover states and secondary information clusters.
- **Neutrals:** Rather than using greys, the "neutrals" are derived from deep, burnt umber and clay tones to maintain the monochromatic warmth. 
- **Surface Strategy:** The background uses a very pale, warm wash (`#FFF7ED`), while containers use progressively deeper orange tints to create a sense of containment without introducing new hues.

## Typography
This design system uses **Inter** exclusively to maintain a systematic, utilitarian feel. The hierarchy is established through weight and purposeful letter spacing.

- **Headlines:** Titles use Semi-Bold (600) or Bold (700) with slight negative letter-spacing for a tight, professional look on board titles.
- **Task Titles:** Use `body-lg` or `body-md` in Medium weight to ensure readability against card backgrounds.
- **Metadata:** Use `label-md` for tags and status indicators. Uppercase transforms on labels help distinguish metadata from primary content.
- **Body:** Standardized at 14px for high information density, allowing more tasks to be visible simultaneously.

## Layout & Spacing
The system follows a **4px baseline grid** to ensure mathematical consistency across all elements.

- **Board Layout:** A horizontal-scroll fluid grid. Each column (e.g., "To Do", "In Progress") has a fixed width of 280px to 320px on desktop to maintain readability, with a 20px gutter between columns.
- **Task Cards:** Use 16px internal padding (`spacing-md`) for content breathing room.
- **Margins:** 40px outer margins on desktop; reduces to 16px on mobile.
- **Stacking:** Use `spacing-sm` (8px) between cards within a column to create a cohesive but distinct list.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and subtle shadows that use a warm tint to match the palette.

- **Level 0 (Flat):** Board background and empty states.
- **Level 1 (Default):** Task cards use a soft 1px border tinted with a light orange (`#FED7AA`) and a subtle 2px blur shadow with a slight orange-brown tint to distinguish from the surface.
- **Level 2 (Hover/Active):** When a card is hovered or dragged, the shadow increases in diffusion (8px blur) and the border color shifts to a more saturated orange.
- **Level 3 (Modals):** Large-scale task detail views use high-diffusion shadows and a backdrop blur to focus user attention, with a semi-transparent warm overlay.

## Shapes
The design system employs **Rounded** geometry to balance professional precision with an approachable feel.

- **Standard Cards/Inputs:** 8px (`rounded-md`). This provides a modern, approachable feel while remaining professional.
- **Buttons/Chips:** 8px for consistency.
- **Avatars:** Fully circular (pill-shaped) to distinguish human elements from functional task cards.
- **Checkboxes:** 4px radius—sharp enough to appear as a precise "hit area" but maintaining the soft corners of the system.

## Components
- **Buttons:** 
  - *Primary:* Solid Safety Orange with white text. 
  - *Secondary:* Ghost style with deep orange text, turning to a light orange-cream background on hover.
- **Task Cards:** Warm white background, 1px light orange border. Includes a subtle "Grip" texture for drag-and-drop.
- **Checkboxes:** When checked, transition from a neutral orange border to a solid primary orange fill with a white checkmark.
- **Status Chips:** Low-saturation orange background tints (e.g., pale peach background with deep rust text) for non-intrusive categorization.
- **Input Fields:** 1px border that shifts to Primary Orange on focus with a 2px outer "halo" of the same color at 15% opacity.
- **Avatars:** Small 24px or 32px circles with initials or clear photos, positioned in the bottom-right of task cards.