import appendOrRemove from './appendOrRemove'

import { update } from 'ramda'

import CheckIcon from '../../../../assets/icons/Check'

const makeCheckbox = (onChange: OnChange, value: string[]) => (option: string) => {

  const isChecked = value.includes(option)

  return (
    <input 
      key={option}
      type="checkbox" 
      value={option} 
      checked={isChecked} 
      onChange={onChange} 
    />
  )
}

const Checkboxes = ({field, setValues, value}: CheckboxesInputProps) => {
  const { options } = field 
  
  const onChange: OnChange = e => {
    const newValues =  appendOrRemove(e.target.value, value)
    setValues(update(field.i, newValues))
  }

  return <>{options.map(makeCheckbox(onChange, value))}</>
}

export default Checkboxes 