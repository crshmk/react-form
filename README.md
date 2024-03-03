# Declarative React Forms 

[Docs](https://github.com/crshmk/react-form/blob/master/docs.md) 

--- 

### 1. Define some form fields 

```javascript 
import { validations } from 'form'

const { isEmail, minLen } = validations 

const profileFormFields = [
  {
    name: 'name'
  },
  {
    name: 'description',
    inputType: 'textarea',    
    placeholder: 'Tell us all about it',
    validation: minLen(10),
    errorMessage: 'Please provide a longer description'
  },
    {
    name: 'email',
    validation: isEmail,
    errorMessage: 'Please provide a valid email address'
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
    options: [
      'USA', 
      { label: 'Vietnam', value: 'VN' },
      { label: 'Arigonia', value: 'AR' }
    ]
  }
]

export default profileFormFields
```

### 2. Pass the form fields and a submit handler to the `Form` component

```javascript 
import Form from 'form'

import profileFormFields from './profileFormFields'

const UserForm = () => 
  <Form 
    fields={profileFormFields} 
    onSubmit={console.log}
  />
```

### 3. Submit and view errors or receive a data object from the form fields 

```javascript 
{
  animal: 'wildaboar',
  countries: ['USA'],
  description: '',
  favoriteColor: 'green',
  firstName: 'Moonbean',
  isHungry: true,
  lastName: 'Sillers',
  password: 'pass'
}
```

---


<img src="https://github.com/crshmk/react-form/blob/master/example.png" width="500" />