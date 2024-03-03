/**
 * set a default inputType of 'text' when not specified
 * @param {Api['fields']} passed fields
 *
 * @return {FormField[]} fields with required inputType
 */
type AddDefaultInputTypes = (fields: Api['fields']) => (PassedFormField & {
    inputType: string;
})[];
declare const addDefaultInputTypes: AddDefaultInputTypes;
export default addDefaultInputTypes;
