type PassedInputType = 'text' | 'textarea' | 'password' | 'select' | 'checkbox' | 'checkboxes' | 'radio' | undefined

type InputType = Exclude<PassedInputType, undefined>
