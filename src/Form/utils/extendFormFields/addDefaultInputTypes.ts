/**
 * set a default inputType of 'text' when not specified
 * @param {Api['fields']} fields 
 * 
 * @return {Api['fields']}
 */
type AddDefaultInputTypes = (fields: Api['fields']) => Api['fields']

const addDefaultInputTypes: AddDefaultInputTypes = (fields) => 
  fields.map(field => !!field.inputType ? field : {...field, inputType: 'text'})

export default addDefaultInputTypes