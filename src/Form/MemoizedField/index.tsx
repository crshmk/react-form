import { memo, ReactNode, ReactElement } from 'react'

import { always, cond, equals } from 'ramda'

import Label from './Label'
import Select from './Inputs/Select'
import Text from './Inputs/Text'

const getInput = cond([
  [equals('text'), always(Text)],
  [equals('textarea'), always(Text)],
  [equals('password'), always(Text)],
  [equals('select'), always(Select)]
])

type IsValueUnchanged = (prev: Props, next: Props) => boolean
const isValueUnchanged: IsValueUnchanged = (prev, next) => 
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
    field, 
    setValues,
    value: value as string
  }

  const Input = getInput(field.inputType) // JSX.Element

  return (
    <div key={field.name} className={className}>
      <div className="form-item">
      <Label field={field}>
        {
        ['text', 'textarea', 'password'].includes(inputType)
        ? <Text {...inputProps} />
        : <Select {...inputProps as SelectInputProps} />
        }
      </Label>
      </div>
      {!!errorMessage && (
        <p className="field-error-message">{errorMessage}</p>
      )}
    </div>
  )
}, isValueUnchanged)

export default MemoizedField

type Props = {
  clearError: (i: number) => () => void
  errorMessage: string
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