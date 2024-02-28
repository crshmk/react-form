import useField from '../../../useField'

import { update } from 'ramda'

const useInputProps = () => {
  const { errorMessage, clearError, field, setValues, value } = useField() 
  const { inputType, name, placeholder } = field

  // TODO add to api when dynamic forms migrated 
  const isDisabled = false

  const onType: OnChange = e => 
    setValues(update(field.i, e.target.value))

  const className = !!errorMessage ? 'invalid': ''
  
  return {
    className,
    disabled: isDisabled,
    name, 
    onChange: onType, 
    onFocus: clearError(field.i),
    placeholder: placeholder || '',
    type: inputType,
    value: value as string
  }
}

export default useInputProps

export type InputProps = {
  className: string
  disabled: boolean
  errorMessage?: string 
  name: FormField['name']
  onChange: OnChange
  onFocus: Fn
  placeholder: string
  rows?: number
  type: FormField['inputType']
  value: string
}

