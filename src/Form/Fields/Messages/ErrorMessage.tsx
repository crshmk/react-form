import { isEmpty } from 'ramda'

const ErrorMessage = ({ errorMessage }: Props) => 
  isEmpty(errorMessage) 
  ? null 
  : <p className="field-error-message">{errorMessage}</p>

export default ErrorMessage

type Props = {
  errorMessage: string
}