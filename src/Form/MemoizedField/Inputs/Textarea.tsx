import { InputProps } from './makeInputProps'

const Textarea = (props: Props) => {
  return <textarea {...props} rows={10} />
}

export default Textarea

type Props = InputProps & {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}