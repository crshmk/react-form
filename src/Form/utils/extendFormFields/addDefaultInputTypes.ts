/**
 * set a default inputType of 'text' when not specified
 * @param {FormField[]} fields 
 * 
 * @return {FormField[]}
 */
type AddDefaultInputTypes = (fields: FormField[]) => FormField[]

const addDefaultInputTypes: AddDefaultInputTypes = (fields) => 
  fields.map(field => !!field.inputType ? field : {...field, inputType: 'text'})

export default addDefaultInputTypes