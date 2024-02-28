type FieldsProps = {
  clearError: (i: number) => () => void
  errorMessages: string[]
  fields: FormField[]
  setValues: SetValues
  values: FormValue[]
}