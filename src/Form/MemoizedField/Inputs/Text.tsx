import Password from './Password'

const getIsPassword = (field: FormField): boolean =>
  field.inputType === 'password'

const Text = ({field, onChange, value}: Props) => {
  const { inputType, name, placeholder } = field
  const isDisabled = false
  const onFocus = () => { console.log('clear validation') }
  const props = {
    disabled: isDisabled,
    name, 
    onChange: onChange(field.i), 
    onFocus,
    placeholder: placeholder || '',
    type: inputType,
    value: value as string
  }

  return getIsPassword(field) ? <Password {...props} /> : <input {...props} />
}

export default Text

type Props = {
  field: FormField 
  onChange: OnChange
  value: string
}


