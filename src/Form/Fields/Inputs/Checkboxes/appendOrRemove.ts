
/**
 * from https://github.com/crshmk/utils/blob/master/src/appendOrRemove.js
 * @param {string} value to be matched by Ramda's equals -> https://ramdajs.com/docs/#equals 
 * @param {string[]} list 
 * @return {string[]} list with target appended or removed
 * 
 * @example 
 * 
 *     const state = ['one', 'two', 'three]
 *     appendOrRemove('four', state) //=> state.concat('four')
 *     appendOrRemove('two', state) //=> ['one', 'three']
 */
import {
  append,
  ifElse,
  includes,
  without,
} from 'ramda'

type AppendOrRemove = (value: string, list: string[]) => string[]
const appendOrRemove: AppendOrRemove = (value, list) => ifElse(
  includes(value),
  without([value]),
  append(value)
)(list)

export default appendOrRemove