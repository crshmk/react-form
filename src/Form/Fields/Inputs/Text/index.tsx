import Password from './Password'
import Textarea from './Textarea'

import makeInputProps from '../makeInputProps'

const Text = (props: Props) => {
  const inputProps = makeInputProps(props)

  const { inputType } = props.field

  return inputType === 'password'
  ? <Password {...inputProps} /> 
  : inputType === 'textarea' 
    ? <Textarea {...inputProps} />
    : <input {...inputProps} />
}

export default Text

export type Props = {
  errorMessage?: string
  clearError: (i: number) => () => void
  field: FormField 
  setValues: SetValues
  value: string
}
