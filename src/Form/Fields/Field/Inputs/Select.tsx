import useField from '../../useField'

import { update } from 'ramda'
/*
TODO overload option as string | { label: string, value: string }
const makeOptions = (options: SelectOption[]) => 
  options.map(option => {
    const [label, value] = typeof option === 'string' 
    ? [option, option] 
    : [option.label, option.value]
    return <option key={value} value={value}>{label}</option> 
  })
*/
const makeOptions = (options: SelectOption[]) => 
  options.map(option => 
    <option key={option} value={option}>{option}</option>
  )

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
