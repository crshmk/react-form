/**
 * to each form field, add 
 *  - index to track value changes and errors 
 *  - default inputType of 'text' when not specified 
 * 
 *  @param {Api['fields']} fields 
 * 
 *  @return {FormField[]}   
 */
import { pipe } from 'ramda'
import addDefaultInputTypes from './addDefaultInputTypes'
import addIndices from './addIndices'

const formatPassedInputFields = pipe(
  addDefaultInputTypes,
  addIndices
)

export default formatPassedInputFields