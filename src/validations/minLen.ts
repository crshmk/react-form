type MinLen = (n: number) => Validation 
export const minLen: MinLen = n => value => 
  value.length >= n