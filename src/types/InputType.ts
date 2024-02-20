type PassedInputType = 'text' | 'textarea' | 'password' | 'select' | 'checkbox' | 'radio' | undefined

type InputType = Exclude<PassedInputType, undefined>
