import './style.css'

import Form from './Form'

const fields = [
  { name: 'one' },
  { name: 'two' },
  { name: 'password', inputType: 'password' as InputType }
]

const App = () => (
  <Form 
    fields={fields} 
    onSubmit={console.log} 
  />
)

export default App
