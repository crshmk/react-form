/**
 * validate onSubmit
 *
 * @param {FormField[]} fields
 * @param {FormValue[]} values
 *
 * @return {string[]} a list containing error messages and empty strings
 */
type MakeErrorMessages = (fields: FormField[], values: FormValue[]) => string[];
declare const makeErrorMessages: MakeErrorMessages;
export default makeErrorMessages;
