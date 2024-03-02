import useField from '../../useField'

import { update } from 'ramda'

import getOptionLabelAndValue from './getOptionLabelAndValue'

const makeOptions = (options: SelectOption[]) => 
  options.map(option => {
    const [optionLabel, optionValue] = getOptionLabelAndValue(option)
    return <option key={optionValue} value={optionValue}>{optionLabel}</option>
  })

const Select = () => {
  const { field, setValues, value } = useField()
  const { options } = field

  const onChange: OnChange = e => {
    setValues(update(field.i, e.target.value))
  }

  return (
    <select 
      name={field.name} 
      onChange={onChange} 
      value={value as string}
    >
      {makeOptions(options!)}
    </select>
  )
}

export default Select
