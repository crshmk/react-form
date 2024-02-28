import useField from '../useField'

import { isEmpty } from 'ramda'

const ErrorMessage = () => {
  const { errorMessage } = useField()
  return isEmpty(errorMessage) 
  ? null 
  : <p className="field-error-message">{errorMessage}</p>
}


export default ErrorMessage
