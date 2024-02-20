import { useEffect, useState } from 'react'

import { any, complement, isEmpty, update } from 'ramda'

import makeErrorMessages from './utils/makeErrorMessages'
import makeSubmitPayload from './utils/makeSubmitPayload'

import MemoizedField from './MemoizedField'
import SubmitButton from './SubmitButton'

const notEmpty = complement(isEmpty)
const anyPresent = any(notEmpty)

type MakeInputs = (clearError: (i: number) => () => void, errorMessages: string[], fields: FormField[], setValues: SetValues, values: FormValue[]) => JSX.Element[]
const makeInputs: MakeInputs = (clearError, errorMessages, fields, setValues, values) => {
  return fields.map((field, i) => 
    <MemoizedField clearError={clearError} errorMessage={errorMessages[i]} field={field} setValues={setValues} value={values[i]} />
  )
} 
 
const Form = (props: Props) => {
  const { fields, initialErrorMessages, initialValuesState } = props
  const [values, setValues] = useState(initialValuesState)
  const [errorMessages, setErrorMessages] = useState(initialErrorMessages)

  useEffect(() => {
    setValues(initialValuesState)
  }, [initialValuesState])

  const clearError = (i: number) => () => {
    setErrorMessages(update(i, ''))
  }

  const onSubmit = () => {
    const newErrorMessages = makeErrorMessages(fields, values)
 
    if(anyPresent(newErrorMessages)) {
      setErrorMessages(newErrorMessages)
      return 
    }

    const payload = makeSubmitPayload(fields, values)
    props.onSubmit && props.onSubmit(payload)
  }

  const inputs = makeInputs(clearError, errorMessages, fields, setValues, values)

  return (
    <>
    {inputs}
    <SubmitButton onSubmit={onSubmit} />
    </>
  ) 
}

export default Form 

type Props = Api & {
  fields: FormField[],
  initialValuesState: FormValue[] 
  initialErrorMessages: string[]
}