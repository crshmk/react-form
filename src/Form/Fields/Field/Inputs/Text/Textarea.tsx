import useTextInputProps from './useTextInputProps'

const Textarea = () => {
  const props = useTextInputProps()
  return <textarea {...props} rows={5} />
}

export default Textarea