import './style.css'

import Form from './Form'

import { isRequired, minLen } from './validations'

const fields: PassedFormField[] = [
  {
    name: 'firstName'
  },
  {
    name: 'lastName',
    inputType: 'text',
    validation: isRequired,
    errorMessage: 'Please enter your last name'
  },
  {
    name: 'description',
    inputType: 'textarea',
    validation: minLen(10),
    errorMessage: 'Please enter a description',
    placeholder: 'Tell us all about it'
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
  <Form 
    fields={fields} 
    onSubmit={console.log} 
  />
)

export default App
