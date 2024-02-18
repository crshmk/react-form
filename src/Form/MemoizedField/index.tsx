import { memo } from 'react'

type Props = {
  field: FormField 
  onChange: OnChange
  value: FormValue
}

type IsValueUnchanged = (prev: Props, next: Props) => boolean
const isValueUnchanged: IsValueUnchanged = (prev, next) => 
  prev.value === next.value

const MemoizedField = memo(({ field, value, onChange }: Props) => {
  const i = field.i as number 
  console.log(field, value)
  // temp 
  const v = value as string 
  return <input type="text" value={v} onChange={onChange(i)} />
}, isValueUnchanged)

export default MemoizedField