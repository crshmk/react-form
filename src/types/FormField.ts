type Validator = [Validation, string]

type PassedFormField = {
  errorMessage?: string 
  init?: string 
  inputType?: InputType
  label?: string 
  name: string 
  options?: string[]
  placeholder?: string
  rows?: number
  validation?: Validation
}

type FormField = PassedFormField & {
  i: number
}