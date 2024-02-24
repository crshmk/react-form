const MaxLenMessage = ({ field, value }: Props) => {
  const remainingLen = field.maxLen - value.length
  if(remainingLen > 20) return null

  const className = 'max-len' + (remainingLen < 0 ? ' exceeded' : '')
  return (
    <span className={className}>
      {remainingLen}
    </span>
  )
}

export default MaxLenMessage

type Props = {
  field: FormField & { maxLen: number }
  value: string 
}
