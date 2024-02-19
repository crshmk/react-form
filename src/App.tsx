import './style.css'

import Form from './Form'

import { minLen } from './validations'

const fields = [
  { name: 'one', validation: minLen(2), errorMessage: 'must be two len' },
  { name: 'two', validation: minLen(2) },
  { name: 'password', inputType: 'password' as InputType },
  { name: 'description', inputType: 'textarea' as InputType }
]

const App = () => (
  <Form 
    fields={fields} 
    onSubmit={console.log} 
  />
)

export default App
