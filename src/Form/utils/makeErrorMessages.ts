/**
 * validate onSubmit 
 * 
 * @param {FormField[]} fields
 * @param {FormValue[]} values 
 * 
 * @return {string[]} a list containing error messages and empty strings 
 */
type MakeErrorMessages = (fields: FormField[], values: FormValue[]) => 
  string[]

const makeErrorMessages: MakeErrorMessages = (fields, values) => 
  fields.map((field, i) => {
  if(!field.validation) return ''
  const isValid = field.validation(values[i])
  return isValid ? '' : (field.errorMessage || 'Error')
})

export default makeErrorMessages