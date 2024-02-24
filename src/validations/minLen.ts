type MinLen = (n: number) => (value: string) => boolean 
export const minLen: MinLen = n => value => 
  value.length >= n 
