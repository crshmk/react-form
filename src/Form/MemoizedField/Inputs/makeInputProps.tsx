import { update } from 'ramda'
import { Props as TextProps} from './Text'

const makeInputProps = ({ field, setValues, value }: TextProps): InputProps => {
  const { inputType, name, placeholder } = field
  const isDisabled = false
  const onFocus = () => { console.log('clear validation') }
  const onType: OnChange = e => 
    setValues(update(field.i, e.target.value))
  
  return {
    disabled: isDisabled,
    name, 
    onChange: onType, 
    onFocus,
    placeholder: placeholder || '',
    type: inputType,
    value: value as string
  }
}

export default makeInputProps

export type InputProps = {
  disabled: boolean
  name: FormField['name']
  onChange: OnChange
  onFocus: Fn
  placeholder: string
  rows?: number
  type: FormField['inputType']
  value: string
}

