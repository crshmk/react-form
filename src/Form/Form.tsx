import { useEffect, useState } from 'react'

import { any, complement, isEmpty, update } from 'ramda'

import makeErrorMessages from './utils/makeErrorMessages'
import makeSubmitPayload from './utils/makeSubmitPayload'
import scrollToInvalidField from './utils/scrollToInvalidField'

import Fields from './Fields'
import SubmitButton from './SubmitButton'

const notEmpty = complement(isEmpty)
const anyPresent = any(notEmpty)

const Form = (props: Props) => {
  const { 
    fields, 
    initialErrorMessages, 
    initialValuesState, 
    isSubmitButtonHidden, 
    submitButtonLabel 
  } = props
  const [values, setValues] = useState(initialValuesState)
  const [errorMessages, setErrorMessages] = useState(initialErrorMessages)

  useEffect(() => {
    setValues(initialValuesState)
  }, [initialValuesState])

  useEffect(() => {
    if(props.onChange) {
      const submitPayload = makeSubmitPayload(props.fields, values)
      props.onChange(submitPayload)
    }
  }, [values])

  const clearError = (i: number) => () => {
    setErrorMessages(update(i, ''))
  }

  const onSubmit = () => {
    const newErrorMessages = makeErrorMessages(fields, values)
 
    if(anyPresent(newErrorMessages)) {
      setErrorMessages(newErrorMessages)
      setTimeout(scrollToInvalidField, 0)
      return 
    }

    const payload = makeSubmitPayload(fields, values)
    props.onSubmit && props.onSubmit(payload)
  }

  const fieldsProps: FieldsProps = {
    clearError, 
    errorMessages, 
    fields, 
    setValues, 
    values
  }

  return (
    <>
    <Fields {...fieldsProps}/>
    <SubmitButton 
      isSubmitButtonHidden={isSubmitButtonHidden}
      onSubmit={onSubmit} 
      submitButtonLabel={submitButtonLabel} 
    />
    </>
  ) 
}

export default Form 

type Props = Api & {
  fields: FormField[],
  initialValuesState: FormValue[] 
  initialErrorMessages: string[]
}