type PassedFormField = {
  init?: string 
  inputType?: InputType
  label?: string 
  name: string 
  options?: string[]
  placeholder?: string
  rows?: number
}

type FormField = PassedFormField & {
  i: number
}