import appendOrRemove from './appendOrRemove'

import { update } from 'ramda'

import CheckIcon from '../../../../assets/icons/Check'

const makeCheckbox = (onChange: OnChange, field: FormField, value: string[]) => (option: string) => {

  const isChecked = value.includes(option)

  return (
    <label>
      {option}
      <input 
        key={option}
        type="checkbox" 
        value={option} 
        checked={isChecked} 
        onChange={onChange} 
      />
    </label>
  )
}

const Checkboxes = ({field, setValues, value}: CheckboxesInputProps) => {
  const { options } = field 
  
  const onChange: OnChange = e => {
    const newValues =  appendOrRemove(e.target.value, value)
    setValues(update(field.i, newValues))
  }

  return <>{options.map(makeCheckbox(onChange, field, value))}</>
}

export default Checkboxes 