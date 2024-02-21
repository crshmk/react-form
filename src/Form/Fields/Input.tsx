import Select from './Inputs/Select'
import Text from './Inputs/Text'

// import getInput from './getInput

// TODO figure out how to type cond => Element and replace with 
// const input = getInput(inputType)
const Input = ({ inputProps, inputType}: Props) => 
  ['text', 'textarea', 'password'].includes(inputType)
    ? <Text {...inputProps} />
    : <Select {...inputProps as SelectInputProps} />

export default Input 

type Props = {
  inputProps: InputProps 
  inputType: InputType
}