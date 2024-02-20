type InputProps = {
  clearError: (i: number) => () => void
  field: FormField 
  setValues: SetValues
  value: string
}

type SelectInputProps = InputProps & {
  field: FormField & {
    options: SelectOption[]
  }
}