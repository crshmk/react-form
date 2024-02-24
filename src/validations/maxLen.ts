type MaxLen = (n: number) => (value: string) => boolean 
export const maxLen: MaxLen = n => value => 
  value.length <= n