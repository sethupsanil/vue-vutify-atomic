export const INPUT_VARIANTS = {
  solo: 'solo',
  filled: 'filled',
  outlined: 'outlined',
  plain: 'plain',
  underlined: 'underlined'
} as const

export type InputVariant = keyof typeof INPUT_VARIANTS

export const INPUT_DENSITY = {
  default: 'default',
  comfortable: 'comfortable',
  compact: 'compact'
} as const;

export type InputDensity = keyof typeof INPUT_DENSITY;

export {}
