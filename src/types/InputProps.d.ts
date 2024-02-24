type InputFieldProps = {
  clearError: (i: number) => () => void
  field: FormField 
  setValues: SetValues
  value: string | boolean
}

type InputProps = InputFieldProps & { value: string }

type SelectInputProps = InputProps & {
  field: FormField & {
    options: SelectOption[]
  }
}

type CheckboxInputProps = Omit<InputFieldProps, 'options'> &{ value: boolean } 

type CheckboxesInputProps = InputProps & {
  field: FormField & {
    options: string[]
  }
  value: string[]
}

type RadioInputProps = CheckboxesInputProps & {
  value: string
}