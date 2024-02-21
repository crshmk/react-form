import MemoizedField from './MemoizedField'

type makeFields = (props: FieldProps) => JSX.Element[]
const makeFields: makeFields = ({ 
  clearError, 
  errorMessages, 
  fields, 
  setValues, 
  values 
}) => fields.map((field, i) => (
    <MemoizedField 
      clearError={clearError} 
      errorMessage={errorMessages[i]} 
      field={field} 
      setValues={setValues} 
      value={values[i]} 
    />
))

const Fields = (props: FieldProps) => {

  const fields = makeFields(props)

  return <>{fields}</>
}

export default Fields

type FieldProps = {
  clearError: (i: number) => () => void
  errorMessages: string[]
  fields: FormField[]
  setValues: React.Dispatch<React.SetStateAction<FormValue[]>>
  values: FormValue[]
}