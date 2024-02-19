/**
 * validations are tracked by the presence of an indexed error message
 * 
 * @param {FormField[]} fields 
 * 
 * @return {''[]} an array of empty strings to be indexed to fields
 */

type InitialErrorMessages = (fields: FormField[]) => ''[]

const initialErrorMessages: InitialErrorMessages = fields => 
  fields.map(_ => '')

export default initialErrorMessages  