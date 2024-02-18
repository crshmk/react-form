import { useEffect, useState } from 'react'

import MemoizedField from './MemoizedField'

type MakeInputs = (fields: FormField[], values: FormValue[], onChange: OnChange) => JSX.Element[]
const makeInputs: MakeInputs = (fields, values, onChange) => {
  return fields.map((field, i) => 
    <MemoizedField field={field} value={values[i]} onChange={onChange} />
  )
}
 
const Form = (props: Props) => {
  const { fields, initialErrorMessages, initialValuesState } = props
  const [values, setValues] = useState(initialValuesState)
  const [errorMessages, setErrorMessages] = useState(initialErrorMessages)

  useEffect(() => {
    setValues(initialValuesState)
  }, [initialValuesState])

  const onChange: OnChange = i => e => {
    const newValues = [...values]
    newValues[i] = e.target.value 
    setValues(newValues)
  }

  const inputs = makeInputs(fields, values, onChange)

  return <>{inputs}</>
}

export default Form 

type Props = Api & {
  initialValuesState: (string | boolean)[] 
  initialErrorMessages: string[]
}