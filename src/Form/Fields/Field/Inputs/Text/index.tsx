import useField from '../../../useField'
import useTextInputProps from './useTextInputProps'

import Password from './Password'
import Textarea from './Textarea'

const DefaultInput = () => {
  const props = useTextInputProps()
  return <input {...props} />
}

const Text = () => {
  const { field: { inputType } } = useField()

  return inputType === 'password'
  ? <Password /> 
  : inputType === 'textarea' 
    ? <Textarea />
    : <DefaultInput />
}

export default Text