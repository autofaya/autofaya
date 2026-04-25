---
name: Autofaya Core
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434656'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004ced'
  primary: '#003ec7'
  on-primary: '#ffffff'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#952200'
  on-tertiary: '#ffffff'
  tertiary-container: '#bf3003'
  on-tertiary-container: '#ffddd5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffdbd2'
  tertiary-fixed-dim: '#ffb4a1'
  on-tertiary-fixed: '#3c0800'
  on-tertiary-fixed-variant: '#891e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  gutter: 24px
  margin: 32px
---

## Brand & Style

The design system is built on a "Precision Minimalism" aesthetic—a philosophy that balances technical rigor with human warmth. It targets professionals who value clarity, speed, and reliability. The visual language is intentionally flat, avoiding the visual noise of gradients and heavy shadows to prioritize content and functional hierarchy.

By pairing a stark, vibrant blue with a warm, organic off-white, the system evokes a sense of "approachable engineering." The integration of the logo is central to the identity; its sharp geometric forms dictate the structural rhythm of the UI, while the high-contrast color palette ensures that every interaction feels decisive and intentional. The emotional response should be one of confidence and frictionless utility.

## Colors

The palette is anchored by the logo's signature vibrant blue, used exclusively for primary actions and critical focus states. The background utilizes a warm off-white (#FAF9F6) to reduce eye strain and provide a more sophisticated, editorial feel than pure white. 

Text and structural elements use a deep charcoal (#0F172A), providing high-contrast readability. A secondary neutral slate is utilized for non-interactive icons and secondary text. In keeping with the flat aesthetic, no gradients or multi-tone fills are permitted; depth is achieved through color blocking and stark value shifts rather than light-source simulation.

## Typography

This design system employs a dual-font strategy. **Manrope** is used for all headlines to provide a modern, balanced, and slightly technical character that complements the logo's geometry. For body copy and interface labels, **Work Sans** is utilized for its exceptional legibility and neutral, professional tone.

Hierarchy is established through significant weight shifts. Headlines are tightly tracked and bold, while body text maintains standard spacing for maximum readability against the off-white background. All labels use a slightly increased letter spacing to ensure clarity in dense functional areas.

## Layout & Spacing

The system follows a strict 8px grid (with 4px increments for micro-adjustments). The layout philosophy is a **Fixed Grid** model for desktop, centered on a 12-column structure with 24px gutters. This creates a stable, architectural framework that mimics the precision of the brand's engineering roots.

Margins are generous (#32px+) to maintain the minimalist aesthetic and provide the "breathability" necessary for the high-contrast elements to stand out. Vertical rhythm is maintained by ensuring all component heights and vertical margins are multiples of the 8px base unit.

## Elevation & Depth

This design system rejects traditional depth markers. There are no ambient shadows or blurred layers. Instead, it utilizes **Tonal Layers** and **Low-contrast outlines**. 

Hierarchy is conveyed through stacking:
1. **Base:** The warm off-white background.
2. **Surface:** Elements like cards use a subtle 1px border (#E2E8F0) instead of a shadow to define their perimeter.
3. **Overlay:** Modals and menus use a stark charcoal border (2px) to denote importance and "interruptive" priority. 
4. **Interaction:** Hover states are indicated by flat color fills (e.g., a light blue tint) rather than an increase in shadow or "lift."

## Shapes

The shape language is "Soft-Geometric." To mirror the precision of the logo while remaining approachable, the system uses a consistent 0.25rem (4px) corner radius for most UI elements. This "Soft" setting prevents the interface from feeling overly aggressive or "brutalist" while maintaining the crispness required for a modern SaaS product. Larger containers like cards may use 0.5rem (8px) to provide a clear visual distinction from smaller components like inputs and buttons.

## Components

### Buttons
Primary buttons are filled with the logo blue (#0052FF) with white text. Secondary buttons use the charcoal text with a 1px charcoal border. There are no rounded-pill buttons; all follow the 4px corner radius.

### Input Fields
Inputs use the off-white background with a 1px border in a light neutral. Upon focus, the border weight increases to 2px and changes to the primary blue. Labels are always positioned above the field in **Work Sans** Bold.

### Cards
Cards are flat containers with a 1px light border. To signify interactivity, cards do not lift; instead, the border color changes to the primary blue on hover.

### Chips & Tags
Chips use a subtle tint of the primary color with dark text for categorizations. They are rectangular with the standard 4px radius, never pill-shaped.

### Lists
List items are separated by thin 1px horizontal rules. Active or selected states are indicated by a 4px vertical "accent bar" of the primary blue on the left edge of the list item.