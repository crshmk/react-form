/**
 * Get the label prop
 * When no label is provided, create one from the field name 
 * assumes a camel cased name 
 * @param {FormField} field 
 * 
 * @return {FormField['label'] | string }
 */
import { 
  complement, 
  ifElse, 
  isNil, 
  join, 
  pipe, 
  prop, 
  propSatisfies, 
  split 
} from 'ramda'

const isPresent = complement(isNil)

type UcFirst = (name: FormField['name']) => string 
export const ucFirst: UcFirst = name =>
  name.charAt(0).toUpperCase() + name.slice(1)

const makeWords = split(/(?=[A-Z])/g) 

type CamelToLabel = (field: FormField['name']) => string 
export const camelToLabel: CamelToLabel = pipe(
  ucFirst, 
  makeWords, 
  join(' ')
)

type NameToLabel = (field: FormField) => string 
const nameToLabel: NameToLabel = pipe(
  prop('name'),
  camelToLabel
)

type MakeLabel = (field: FormField) => string
const makeLabel = ifElse(
  propSatisfies(isPresent, 'label'),
  prop('label'),
  nameToLabel
)

export default makeLabel as MakeLabel
