/** Premium easing — power4.out equivalent */
export const easePremium = [0.25, 1, 0.5, 1] as const;

export const easePremiumCss = "cubic-bezier(0.25, 1, 0.5, 1)";

export const revealY = 30;

export const transitionReveal = {
  duration: 0.9,
  ease: easePremium,
} as const;

export const transitionFast = {
  duration: 0.55,
  ease: easePremium,
} as const;
