type PassedInputType = 'checkbox' | 'checkboxes' | 'password' | 'radio' | 'select' | 'text' | 'textarea' | undefined

type InputType = Exclude<PassedInputType, undefined>
