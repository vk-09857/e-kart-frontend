import { css } from '@emotion/react';

const globalCss = css`
  :root {
    /* Colors */
    --color-primary: #e60000;
    --color-on-primary: #ffffff;
    --color-ink: #25282b;
    --color-body: #7e7e7e;
    --color-mute: #bebebe;
    --color-canvas: #ffffff;
    --color-canvas-soft: #f2f2f2;
    --color-on-dark: #ffffff;

    /* Typography */
    --font-family-base: system-ui, sans-serif;
    
    /* Font Sizes */
    --font-size-display-hero: 144px;
    --font-size-display-xxl: 126px;
    --font-size-display-xl: 90px;
    --font-size-display-lg: 48px;
    --font-size-display-md: 40px;
    --font-size-display-sm: 32px;
    --font-size-display-xs: 24px;
    --font-size-eyebrow-uppercase: 16px;
    --font-size-body-lg: 22px;
    --font-size-body-md: 18px;
    --font-size-body-sm: 16px;
    --font-size-caption: 14px;
    --font-size-caption-uppercase: 12px;
    --font-size-button-md: 18px;

    /* Font Weights */
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-heavy: 800;

    /* Line Heights */
    --line-height-display-hero: 114px;
    --line-height-display-xxl: 113px;
    --line-height-display-xl: 84px;
    --line-height-display-lg: 52px;
    --line-height-display-md: 44px;
    --line-height-display-sm: 40px;
    --line-height-display-xs: 24px;
    --line-height-body-lg: 24px;
    --line-height-body-md: 28px;
    --line-height-body-sm: 20px;
    --line-height-caption: 16px;
    --line-height-caption-strong: 21px;

    /* Border Radius */
    --rounded-none: 0px;
    --rounded-xs: 1px;
    --rounded-sm: 6px;
    --rounded-card: 6px;
    --rounded-pill-md: 32px;
    --rounded-pill-lg: 60px;
    --rounded-full: 9999px;

    /* Spacing */
    --spacing-xxs: 2px;
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 12px;
    --spacing-lg: 16px;
    --spacing-xl: 20px;
    --spacing-2xl: 24px;
    --spacing-3xl: 32px;
  }

  /* Base Resets & Applying Defaults */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
  }

  body {
    background-color: var(--color-ink);
    color: var(--color-on-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-body-md);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-body-md);
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    overflow-x: hidden;
    max-width: 100vw;
  }

  /* Utility mapping for typography combos directly from DESIGN.md */
  .display-hero {
    font-size: var(--font-size-display-hero);
    font-weight: var(--font-weight-heavy);
    line-height: var(--line-height-display-hero);
    letter-spacing: -1px;
    text-transform: uppercase;
  }

  .display-xxl {
    font-size: var(--font-size-display-xxl);
    font-weight: var(--font-weight-heavy);
    line-height: var(--line-height-display-xxl);
    letter-spacing: -1px;
    text-transform: uppercase;
  }

  .display-xl {
    font-size: var(--font-size-display-xl);
    font-weight: var(--font-weight-heavy);
    line-height: var(--line-height-display-xl);
    text-transform: uppercase;
  }

  .display-lg {
    font-size: var(--font-size-display-lg);
    font-weight: var(--font-weight-light);
    line-height: var(--line-height-display-lg);
  }

  .display-md {
    font-size: var(--font-size-display-md);
    font-weight: var(--font-weight-light);
    line-height: var(--line-height-display-md);
  }

  .display-sm {
    font-size: var(--font-size-display-sm);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-display-sm);
  }

  .display-xs {
    font-size: var(--font-size-display-xs);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-display-xs);
  }
`;

export { globalCss };
