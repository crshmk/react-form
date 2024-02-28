import MemoizedField from './MemoizedField'

type MakeFields = (props: FieldsProps) => JSX.Element[]
const makeFields: MakeFields = ({ 
  clearError, 
  errorMessages, 
  fields, 
  setValues, 
  values 
}) => fields.map((field, i) => (
    <MemoizedField 
      key={field.name}
      clearError={clearError} 
      errorMessage={errorMessages[i]} 
      field={field} 
      setValues={setValues} 
      value={values[i]} 
    />
))

const Fields = (props: FieldsProps) => {
  const fields = makeFields(props)
  return <>{fields}</>
}

export default Fields

