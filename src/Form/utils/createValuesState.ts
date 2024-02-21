// @ts-nocheck
/**
 * @prop {FormField[]} fields 
 * 
 * @return {FormValue[]} initial values state
 * 
 * creates the shape of the values state for form items, 
 *   which is an array of form values to be tracked by index
 * all values are strings, except 
 *   single checkbox -> bool
 *   checkbox group -> string[]
 */
import { 
  __, 
  always, 
  cond, 
  equals, 
  ifElse,
  includes, 
  isNil, 
  map, 
  pipe, 
  prop, 
  T 
} from 'ramda'

// TODO so tired of TS-cond gymnastics
type GetInitialValueForInputType = (inputType: InputType) => FormValue
const getDefaultValueForInputType: GetInitialValueForInputType = cond([
  [equals('checkbox'), always(false)],
  [equals('checkboxes'), always([])],
  [includes(__, ['text', 'password', 'textarea', 'select']), always('')],
  [T, always('')]
])

const getInitialValue = ifElse(
  pipe(prop('initialValue'), isNil),
  pipe(prop('inputType'),getDefaultValueForInputType),
  prop('initialValue') 
)

type GetInitialValues = (fields: FormField[]) => FormValue[]
const getInitialValues: GetInitialValues = map(getInitialValue)

export default getInitialValues