
  export const INPUT_DIRECTION = {
    horizontal: 'horizontal',
    vertical: 'vertical'
  } as const;
  
  export type InputDirection = keyof typeof INPUT_DIRECTION;
  
  export {}
  