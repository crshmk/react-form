import Password from './Password'
import Textarea from './Textarea'

import makeInputProps from '../makeInputProps'

const getIsPassword = (field: FormField): boolean =>
  field.inputType === 'password'

const Text = (props: Props) => {
  const inputProps = makeInputProps(props)

  return getIsPassword(props.field) 
  ? <Password {...inputProps} /> 
  : props.field.inputType === 'textarea' 
    ? <Textarea {...inputProps} />
    : <input {...inputProps} />
}

export default Text

export type Props = {
  clearError: (i: number) => () => void
  field: FormField 
  setValues: SetValues
  value: string
}
