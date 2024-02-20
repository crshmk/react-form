/**
 * set a default inputType of 'text' when not specified
 * @param {Api['fields']} passed fields 
 * 
 * @return {FormField[]} fields with required inputType 
 */
type AddDefaultInputTypes = (fields: Api['fields']) => (PassedFormField & { inputType: string })[] 

const addDefaultInputTypes: AddDefaultInputTypes= (fields: PassedFormField[]) => 
 fields.map(field => {
  const inputType = field.inputType || 'text'
  return {...field, inputType}
 })

export default addDefaultInputTypes
