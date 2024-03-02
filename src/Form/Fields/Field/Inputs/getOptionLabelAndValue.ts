/**
 * checkboxes, radio, and select values may either be 'Jan' or { label: 'Jan' value: 0 }
 * get a label and value for either shape 
 */
type GetOptionLabelAndValue = (option: SelectOption) => [string, string]
const getOptionLabelAndValue: GetOptionLabelAndValue = option => 
  typeof option === 'string' 
  ? [option, option] 
  : [option.label, option.value]


export default getOptionLabelAndValue