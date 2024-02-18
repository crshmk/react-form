/**
 * values are tracked by indices 
 * while less elegant, performance is important here  
 * the form creator add an `i` prop to each field, 
 *   which indexes it in the values state 
 */
type AddIndices =  <T>(xs: T[]) => (T & { i: number })[]

const addIndices: AddIndices = xs => 
  xs.map((x, i) => ({...x, i}))

export default addIndices