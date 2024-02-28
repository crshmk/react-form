import Form from './Form'

import createValuesState from './utils/createValuesState'
import extendFields from './utils/extendFields'
import makeInitialErrorMessages from './utils/makeInitialErrorMessages'

type MakeClassName = (formName: Api['formName']) => `react-form${string}` 
const makeClassName: MakeClassName = formName => 
  `react-form ${!formName ? '' : formName.toLowerCase()}`

const FormWrapper = (props: Api) => {
  const { 
    fields,
    formName
  } = props

  const className = makeClassName(formName)
  const initialErrorMessages = makeInitialErrorMessages(fields)
  const extendedFields: FormField[] = extendFields(fields)
  const initialValuesState = createValuesState(extendedFields)

  return (
    <div className={className}>
      <Form 
        {...props} 
        fields={extendedFields}
        initialErrorMessages={initialErrorMessages}
        initialValuesState={initialValuesState}
      />
    </div>
  )
}

export default FormWrapper