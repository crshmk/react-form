import { memo } from 'react'

import Label from './Label'
import Messages from './Messages'

import getInput from './getInput'

type IsFieldUnchanged = (prev: Props, next: Props) => boolean
const isFieldUnchanged: IsFieldUnchanged = (prev, next) => 
  prev.value === next.value && prev.errorMessage === next.errorMessage

type GetClassName = (field: FormField) => string 
const getClassName: GetClassName = field => {
  const name = field.name.toLowerCase()
  return `form-field form-field-${field.inputType} form-field-${name}`
}

const MemoizedField = memo(({ clearError, errorMessage, field, setValues, value }: Props) => {
  const { inputType } = field 

  const className = getClassName(field)
  
  const inputProps =  {
    clearError,
    errorMessage,
    field, 
    setValues,
    value: value as string
  }

  const Input = getInput(inputType)

  return (
    <div key={field.name} className={className}>
      <div className="form-item">
      <Label field={field}>
        {/* @ts-ignore */}
        <Input {...inputProps} />
      </Label>
      </div>
      <Messages 
        errorMessage={errorMessage}
        field={field as FormField & { maxLen: any }}
        value={value as string}
      />
    </div>
  )
}, isFieldUnchanged)

export default MemoizedField

type Props = {
  clearError: (i: number) => () => void
  errorMessage: string
  field: FormField 
  setValues: SetValues
  value: FormValue
}