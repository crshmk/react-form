/**
 * checkboxes, radio, and select values may either be 'Jan' or { label: 'Jan' value: 0 }
 * get a label and value for either shape
 */
type GetOptionLabelAndValue = (option: SelectOption) => [string, string];
declare const getOptionLabelAndValue: GetOptionLabelAndValue;
export default getOptionLabelAndValue;
