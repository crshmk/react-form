/**
 * to each form field, add 
 *  - index to track value changes and errors 
 *  - default inputType of 'text' when not specified 
 * 
 *  @param {Api['fields']} fields 
 * 
 *  @return {FormField[]}   
 */
import addDefaultInputTypes from './addDefaultInputTypes'
import addIndices from './addIndices'

import { pipe } from 'ramda'

type ExtendFields = (fields: Api['fields']) => FormField[]
const extendFields: ExtendFields = pipe(
  addDefaultInputTypes,
  addIndices
)

export default extendFields