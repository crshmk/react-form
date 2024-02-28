import { memo } from 'react'

import { FieldProvider } from './useField'

import Field from './Field'
import Messages from './Messages'

type IsFieldUnchanged = (prev: FieldContext, next: FieldContext) => boolean
const isFieldUnchanged: IsFieldUnchanged = (prev, next) => 
  prev.value === next.value && prev.errorMessage === next.errorMessage

type GetClassName = (field: FormField) => 
  `form-field form-field-${InputType} form-field-${string}` 
const getClassName: GetClassName = field => {
  const name = field.name.toLowerCase()
  return `form-field form-field-${field.inputType} form-field-${name}`
}

const MemoizedField = memo((props: FieldContext) => {

  const className = getClassName(props.field)

  return (
    <div key={props.field.name} className={className}>
      <FieldProvider {...props}>
      <div className="form-item">
        <Field />
      </div>
      <Messages />
      </FieldProvider>
    </div>
  )
}, isFieldUnchanged)

export default MemoizedField

export type FieldContext = {
  clearError: (i: number) => () => void
  errorMessage: string
  field: FormField 
  setValues: SetValues
  value: FormValue
}