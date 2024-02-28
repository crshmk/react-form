import { update } from 'ramda'
import { Props as TextProps} from './Text'

const makeInputProps = ({ errorMessage, clearError, field, setValues, value }: TextProps): InputProps => {
  const { inputType, name, placeholder } = field
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

export default makeInputProps

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

