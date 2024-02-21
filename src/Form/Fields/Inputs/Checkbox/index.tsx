import { update } from 'ramda'

import CheckIcon from '../../../../assets/icons/Check'
/*
const Checkboxes = ({field, setValues, value}: CheckboxInputProps) => {
  const { options } = field 
  
  const onChange = (optionIndex: number) => () => {
    const newCheckboxValue = !value[optionIndex]
    const newFieldValue = update(optionIndex, newCheckboxValue, value)
    setValues(update(field.i, newFieldValue))
  }

  return options.map((option: string, optionIndex) => 
    <input type="checkbox" value={option} checked={value[optionIndex]} onChange={onChange(optionIndex)} />
  )
}
*/

const Checkbox = ({field, setValues, value}: CheckboxInputProps) => {

  const onChange = () => {
    setValues(update(field.i, !value))
  }

  return (
    <input 
      type="checkbox" 
      value={field.name} 
      checked={value} 
      onChange={onChange} />
  ) 
}

export default Checkbox
