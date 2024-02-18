import Form from './Form'

import addIndices from './addIndices'
import createValuesState from './createValuesState'
import makeInitialErrorMessages from './makeInitialErrorMessages'

type MakeClassName = (formName: string | undefined) => string 
const makeClassName: MakeClassName = formName => 
  `react-form ${!formName ? '' : formName.toLowerCase()}`

const FormWrapper = (props: Api) => {
  let { 
    fields, 
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
  fields = addIndices(fields)

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

