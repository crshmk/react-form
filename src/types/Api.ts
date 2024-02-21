type Api = {
  fields: PassedFormField[]
  formName?: string 
  isSubmitButtonHidden?: boolean
  onChange?: (payload: SubmitPayload) => any
  onSubmit?: (payload: SubmitPayload) => any
  submitButtonLabel?: string 
}

type SubmitPayload = {
  [x: string]: FormValue
}