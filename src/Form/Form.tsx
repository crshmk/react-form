import { useEffect, useState } from 'react'

import MemoizedField from './MemoizedField'

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

  const inputs = makeInputs(fields, setValues, values)

  return <>{inputs}</>
}

export default Form 

type Props = Api & {
  fields: FormField[],
  initialValuesState: (string | boolean)[] 
  initialErrorMessages: string[]
}