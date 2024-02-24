import ErrorMessage from './ErrorMessage'
import MaxLenMessage from './MaxLenMessage'

const Messages = ({errorMessage, field, value}: Props) => (
  <>
  <ErrorMessage errorMessage={errorMessage} />
  {field.maxLen && !errorMessage && (
    <MaxLenMessage 
      field={field as FormField & { maxLen: any }} 
      value={value as string} 
    />
  )}
  </>
)

export default Messages

type Props = {
  errorMessage: string 
  field: FormField & { maxLen: any } 
  value: string
}