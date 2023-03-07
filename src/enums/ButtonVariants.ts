export const BUTTON_VARIANTS ={
    elevated: 'elevated',
    flat: 'flat',
    tonal: 'tonal',
    outlined: 'outlined',
    text: 'text',
    plain: 'plain',
  } as const;

export type ButtonVariant = keyof typeof BUTTON_VARIANTS; 

