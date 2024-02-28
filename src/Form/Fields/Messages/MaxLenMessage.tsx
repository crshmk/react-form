import useField from '../useField'

const useRemainingLen = () => {
  const { field, value } = useField()
  if(!field.maxLen || typeof value !== 'string') return Infinity
  return field.maxLen - value.length
}

const useClassName = () => {
  const remainingLen = useRemainingLen()
  return 'max-len' + (remainingLen < 0 ? ' exceeded' : '')
}


const MaxLenMessage = () => {
  const remainingLen = useRemainingLen()
  const className = useClassName()

  if(remainingLen > 20) return null

  return (
    <span className={className}>
      {remainingLen}
    </span>
  )
}

export default MaxLenMessage
