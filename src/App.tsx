import './style.css'

import Form from './Form'

import { minLen } from './validations'

const fields = [
  { name: 'one', validation: minLen(2), errorMessage: 'must be two len' },
  { name: 'two', validation: minLen(2) },
  { name: 'password', inputType: 'password' as InputType },
  { name: 'description', inputType: 'textarea' as InputType },
  { name: 'colors', inputType: 'select' as InputType, options: ['red', 'blue', 'green']},
  { name: 'isNice', inputType: 'checkbox' as InputType },
  { name: 'numbers', inputType: 'checkboxes' as InputType, options: ['one', 'two'] },
  { name: 'animals', inputType: 'radio' as InputType, options: ['dog', 'wildaboar'] }
]

const App = () => (
  <Form 
    fields={fields} 
    onSubmit={console.log} 
  />
)

export default App
