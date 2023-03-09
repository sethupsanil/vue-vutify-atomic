export const BUTTON_VARIANTS = {
  elevated: 'elevated',
  flat: 'flat',
  tonal: 'tonal',
  outlined: 'outlined',
  text: 'text',
  plain: 'plain'
} as const

export type ButtonVariant = keyof typeof BUTTON_VARIANTS;

export const BUTTON_ROUNDED = {
  lg:'lg',
  0:"0",
  pill:"pill"
} as const

export type ButtonRound = keyof typeof BUTTON_ROUNDED;

export const BUTTON_SIZES = {
  xSmall:"x-small",
  size:"small",
  large:"large",
  xLarge:"x-large"
  
} as const

export type ButtonSize = keyof typeof BUTTON_SIZES;

export {};