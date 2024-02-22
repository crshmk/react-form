import './style.css'

import Form from './Form'

import { minLen } from './validations'

const fields: PassedFormField[] = [
  {
    name: 'firstName'
  },
  {
    name: 'lastName',
    inputType: 'text',
    validation: minLen(2),
    errorMessage: 'Please enter your last name'
  },
  {
    name: 'description',
    inputType: 'textarea',
    placeholder: 'Tell us all about it'
  },
  {
    name: 'password',
    inputType: 'password'
  },
  {
    name: 'favoriteColor',
    label: 'Choose your favorite color',
    inputType: 'select', 
    options: ['', 'red', 'green', 'blue']
  },
  {
    name: 'animal',
    inputType: 'radio',
    options: ['dog', 'wildaboar']
  },
  {
    name: 'isHungry',
    inputType: 'checkbox',
    label: 'Are you hungry?'
  },
  {
    name: 'countries',
    inputType: 'checkboxes',
    options: ['USA', 'Vietnam', 'Arigonia']
  }
]
const App = () => (
  <div className="wrapper">
    <Form 
      fields={fields} 
      onChange={console.log}
      onSubmit={console.log} 
    />
  </div>
)

export default App
