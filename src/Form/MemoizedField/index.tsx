import { memo } from 'react'

import Label from './Label'
import Text from './Inputs/Text'

type IsValueUnchanged = (prev: Props, next: Props) => boolean
const isValueUnchanged: IsValueUnchanged = (prev, next) => 
  prev.value === next.value 

type GetClassName = (field: FormField) => string 
const getClassName: GetClassName = field => {
  const name = field.name.toLowerCase()
  return `form-field form-field-${field.inputType} form-field-${name}`
}

const MemoizedField = memo(({ field, setValues, value }: Props) => {
  console.log(field, value)

  const className = getClassName(field)
  
  const inputProps =  {
    field, 
    setValues,
    value: value as string
  }

  return (
    <div key={field.name} className={className}>
      <div className="form-item">
      <Label field={field}>
        <Text {...inputProps} />
      </Label>
      </div>
    </div>
  )

  return 
}, isValueUnchanged)

export default MemoizedField

type Props = {
  field: FormField 
  setValues: SetValues
  value: FormValue
}

/*

values={values}
      setValue={isPresent(field.setState) ? field.setState : setValue}
      validationError={validationErrors[field.i]}
      clearValidation={clearValidation(field.i)}
*/