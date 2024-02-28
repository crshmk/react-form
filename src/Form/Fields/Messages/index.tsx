import useField from '../useField'

import ErrorMessage from './ErrorMessage'
import MaxLenMessage from './MaxLenMessage'

const Messages = () => {
  const {errorMessage, field } = useField()

  return (
    <>
    <ErrorMessage />
    {field.maxLen && !errorMessage && <MaxLenMessage />}
    </>
  )
}


export default Messages
