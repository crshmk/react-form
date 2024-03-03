import './style.css'

import Form from '../src/Form'

import { maxLen, minLen } from '../src/validations'

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
    placeholder: 'Tell us all about it',
    maxLen: 45,
    validation: value => minLen(10)(value) && maxLen(45)(value),
    errorMessage: 'Description must be 10 - 45 characters'
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
    options: ['USA', { label: 'Vietnam', value: 'VN' }, 'Arigonia']
  },
  {
    name: 'number',
    inputType: 'radio',
    options: [
      {label: 'one', value: '1'},
      {label: 'two', value: '2'},
      {label: 'three', value: '3'},
      {label: 'four', value: '4'}
    ]
  }
]

const App = () => (
  <div className="wrapper">
    <Form 
      fields={fields} 
      onSubmit={console.log} 
    />
  </div>
)

export default App
