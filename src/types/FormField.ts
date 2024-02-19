type PassedFormField = {
  init?: string 
  inputType?: InputType
  label?: string 
  name: string 
  options?: string[]
  placeholder?: string
}

type FormField = PassedFormField & {
  i: number
}