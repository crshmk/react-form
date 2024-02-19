import Form from './Form'

import createValuesState from './utils/createValuesState'
import extendFormFields from './utils/extendFormFields'
import makeInitialErrorMessages from './utils/makeInitialErrorMessages'

type MakeClassName = (formName: Api['formName']) => string 
const makeClassName: MakeClassName = formName => 
  `react-form ${!formName ? '' : formName.toLowerCase()}`

const FormWrapper = (props: Api) => {
  let { fields } = props 
  const { 
    formName, 
   // hideSubmitButton, 
   // initialValues, 
   // initialValidations, 
   // isSubmitSpinnerShowing,
   // onChange, 
   // onSubmit, 
   // submitButtonLabel 
  } = props

  const initialValuesState = createValuesState(fields)
  const className = makeClassName(formName)
  const initialErrorMessages = makeInitialErrorMessages(fields)
  fields = extendFormFields(fields)

  return (
    <div className={className}>
      <Form 
        {...props} 
        fields={fields}
        initialErrorMessages={initialErrorMessages}
        initialValuesState={initialValuesState}
      />
    </div>
  )
}

export default FormWrapper

