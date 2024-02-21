import { isEmpty } from 'ramda'

const ErrorMessage = ({ errorMessage }) => 
  isEmpty(errorMessage) 
  ? null 
  : <p className="field-error-message">{errorMessage}</p>

export default ErrorMessage