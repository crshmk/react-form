import { update } from 'ramda'

const makeOptions = (options: SelectOption[]) => 
  options.map(option => {
    const [label, value] = typeof option === 'string' 
    ? [option, option] 
    : [option.label, option.value]
    return <option key={value} value={value}>{label}</option> 
  })

const Select = ({ field, setValues, value }: Props) => {
  const { options } = field

  const onChange: OnChange = e => {
    setValues(update(field.i, e.target.value))
  }

  return (
    <select onChange={onChange} value={value}>
      {makeOptions(options)}
    </select>
  )
}

export default Select

type Props = InputProps & {
  field: FormField & {
    options: SelectOption[]
  }
}