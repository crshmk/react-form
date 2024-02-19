import { memo } from 'react'

import Label from './Label'

type Props = {
  field: FormField 
  onChange: OnChange
  value: FormValue
}

type IsValueUnchanged = (prev: Props, next: Props) => boolean
const isValueUnchanged: IsValueUnchanged = (prev, next) => 
  prev.value === next.value

type GetClassName = (field: FormField) => string 
const getClassName: GetClassName = field => {
  const name = field.name.toLowerCase()
  return `form-field form-field-${field.inputType} form-field-${name}`
}

const MemoizedField = memo(({ field, value, onChange }: Props) => {
  const i = field.i as number 
  console.log(field, value)
  // temp; no checkbox yet  
  const v = value as string 

  const className = getClassName(field)

  return (
    <div key={field.name} className={className} >
      <div className="form-item">
      <Label field={field}>
      <input type="text" value={v} onChange={onChange(i)} />
      </Label>
      </div>
    </div>
  )

  return 
}, isValueUnchanged)

export default MemoizedField


/*

values={values}
      setValue={isPresent(field.setState) ? field.setState : setValue}
      validationError={validationErrors[field.i]}
      clearValidation={clearValidation(field.i)}
*/