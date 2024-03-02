type Validator = [Validation, string]

type PassedFormField = {
  errorMessage?: string 
  initialValue?: string | boolean
  inputType?: PassedInputType
  label?: string 
  maxLen?: number 
  name: string 
  options?: (SelectOption | string)[]
  placeholder?: string
  rows?: number
  validation?: Validation
}

type FormField = Omit<PassedFormField, 'inputType'> & {
  i: number
  inputType: InputType
}