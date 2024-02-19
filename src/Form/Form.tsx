import { useEffect, useState } from 'react'

import { any, complement, isEmpty } from 'ramda'

import makeErrorMessages from './utils/makeErrorMessages'
import makeSubmitPayload from './utils/makeSubmitPayload'

import MemoizedField from './MemoizedField'
import SubmitButton from './SubmitButton'

const notEmpty = complement(isEmpty)
const anyPresent = any(notEmpty)

type MakeInputs = (fields: FormField[], setValues: SetValues, values: FormValue[]) => JSX.Element[]
const makeInputs: MakeInputs = (fields, setValues, values) => {
  return fields.map((field, i) => 
    <MemoizedField field={field} setValues={setValues} value={values[i]} />
  )
} 
 
const Form = (props: Props) => {
  const { fields, initialErrorMessages, initialValuesState } = props
  const [values, setValues] = useState(initialValuesState)
  const [errorMessages, setErrorMessages] = useState(initialErrorMessages)

  useEffect(() => {
    setValues(initialValuesState)
  }, [initialValuesState])

  const onSubmit = () => {
    const newErrorMessages = makeErrorMessages(fields, values)
    
 
    if(anyPresent(newErrorMessages)) {
      setErrorMessages(newErrorMessages)
      return 
    }

    makeSubmitPayload(values)
  }

  const inputs = makeInputs(fields, setValues, values)

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