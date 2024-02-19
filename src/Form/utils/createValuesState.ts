import { isNil, pipe, prop } from 'ramda'
/**
 * @prop {Api['fields']} fields 
 * 
 * @return {(string | boolean)[]} valuesState
 * 
 * create an array of form values to be tracked by index
 * all values are strings, except single checkboxes, which are bools 
 */


// checkboxes without an options prop are treated as bools
type IsSingleCheckbox = (field: PassedFormField) => boolean 
const isSingleCheckbox: IsSingleCheckbox = pipe(
  prop('options'),
  isNil
)

type IsCheckbox = (field: PassedFormField) => boolean 
const isCheckbox: IsCheckbox = field => 
  field.inputType === 'checkbox' 

type CreateCheckboxInit = (field: PassedFormField) => '' | boolean 
const createCheckboxInit: CreateCheckboxInit = field => 
  isSingleCheckbox(field) ? false : ''

type CreateInitialValue = (field: PassedFormField) => string | boolean 
const createInitialValue: CreateInitialValue = field =>
  !!field.init ? field.init : 
    isCheckbox(field) 
    ? createCheckboxInit(field) 
    : ''

type CreateValuesState = (fields: Api['fields']) => (string | boolean)[] 
const createValuesState: CreateValuesState = fields => 
  fields.map(createInitialValue)

export default createValuesState