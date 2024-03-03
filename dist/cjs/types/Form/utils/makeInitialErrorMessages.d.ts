/**
 * validations are tracked by the presence of an indexed error message
 *
 * @param {Api['fields']} fields
 *
 * @return {''[]} an array of empty strings to be indexed to fields
 */
type InitialErrorMessages = (fields: Api['fields']) => ''[];
declare const initialErrorMessages: InitialErrorMessages;
export default initialErrorMessages;
