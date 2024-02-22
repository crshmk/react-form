My React form solution 

I don't like a log of logic in my component files, so I do it this way. 

This might be a good solution for you if you like writing your own CSS. 

--- 

```javascript 
import { validations } from 'react-form'

const { minLen } = validations 

const userFormFields = [
  {
    name: 'firstName'
  },
  {
    name: 'lastName',
    inputType: 'text',
    validations: minLen(2),
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

export default userFormFields
```

```javascript 
import Form from 'react-form'

import userFormFields from './userFormFields'

const UserForm = () => 
  <Form fields={userFormFields} onSubmit={console.log}/>
```

```javascript 
// onSubmit logs 
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

<img src="https://github.com/crshmk/react-form/blob/master/styled-example.png" width="300" />

---

## Errors 

Fields receive an optional `validation` prop. Returning `true` indicates a passing value. 
```typescript 
type Validation = (value: FormValue) => boolean
```

The `onSubmit` handler is only called if all validations pass. 

If errors are present, error messages is appended to respective form items. 

Error messages are removed when the user focuses the respective field. 

---

## API 

### Form Fields 

```typescript 
type InputType = 'checkbox' | 'checkboxes' | 'password' | 'radio' | 'select' | 'text' | 'textarea' | undefined

type CheckboxValue = boolean 
type CheckboxesOrRadioOptions = string[] | ({ label: string, value: string })[]
type FormValue = CheckboxValue | CheckboxesOrRadioOptions | string

type FormField = {
  errorMessage?: string 
  initialValue?: FormValue
  inputType?: InputType 
  label?: string // defaults to capitalized `name`
  name: string 
  options?: CheckboxesOrRadioOptions 
  placeholder?: string
  rows?: number 
  validation?: Validation
}

```

```typescript
import { validations } from 'react-form'
const { minLen } = validations
const fields: FormField[] = [
  {
    name: 'fullName'
  },
  {
    name: 'description',
    inputType: 'textarea',
    label: 'What happened',
    rows: 10,
    validation: minLen(10),
    errorMessage: 'Please really tell us',
    placeholder: 'Tell us all about it'
  },
  {
    name: 'isActive',
    inputType: 'checkbox',
    label: 'Is this active?',
    initialValue: true 
  }
  {
    name: 'hobbies',
    inputType: 'checkboxes',
    options: ['running', 'thinking', 'skiing'],
    initialValue: ['running']
  }

]
```

| prop  | required | type | default | note
| ------------- | ------------- | ------------- | ------------- | ------------- |
| `name` | yes | `string`
| `errorMessage` | | `string`  | `'Error'` |
| `inputType` | | `InputType`, below  | `text`
| `label` | | `string`  | Capitalized `name` prop 
| `options` | | `string[]` | | for `checkboxes` or `radio`
| `placeholder` | | `string`  | |
| `rows` | | `number`  | | for `textarea` 
| validation | | `(FormValue) => boolean`  | | 


### Form Component

```javascript 
<Form 
  fields={fields}
  isSubmitButtonHidden={false}
  onChange={console.log}
  onSubmit={console.log}
>
```

| prop  | type | default | note
| ------------- | ------------- | ------------- | ------------- |
| `fields`  | `FormField[]` | | 
| `isSubmitButtonHidden`  | `boolean` | `false` | use `onChange`
| `onChange`  | `(formData: FormData) => any`  | | fires on each form change
| `onSubmit`  | `(formData: FormData) => any`  | |

---

## Dynamic Forms 

Return the collection of fields from a hook. 

```javascript 
const allUserFields = [{ name: 'concern' }]
const adminUserFields = [{ name: 'email' }]

const useFormFields = () => {
  const { isAdmin  } = useUser() 

  let fields = allUserFields

  if(isAdmin) {
    fields =  fields.concat(adminUserFields)
  }

  return fields 
}

const UserForm = () => {
  const fields = useFormFields()

  return <Form fields={fields} onSubmit={console.log}>
}

```

---


## Styling 

Bring your own CSS. There are plenty of selectors. 

The above form creates this html. 

```html

<div class="react-form ">
    <div class="form-field form-field-text form-field-firstname">
        <div class="form-item"><label class="item-label"><span class="field-label">First Name</span><input name="firstName" placeholder="" type="text" value=""></label></div>
    </div>
    <div class="form-field form-field-text form-field-lastname">
        <div class="form-item"><label class="item-label"><span class="field-label">Last Name</span><input name="lastName" placeholder="" type="text" value=""></label></div>
        <p class="field-error-message">Please enter your last name</p>
    </div>
    <div class="form-field form-field-textarea form-field-description">
        <div class="form-item"><label class="item-label"><span class="field-label">Description</span><textarea name="description" placeholder="Tell us all about it" type="textarea" rows="5"></textarea></label></div>
    </div>
    <div class="form-field form-field-password form-field-password">
        <div class="form-item"><label class="item-label"><span class="field-label">Password</span><input name="password" placeholder="" type="password" value="asdf"><div class="show-password-button">
          <svg width="30" height="30"></svg></div></label></div>
    </div>
    <div class="form-field form-field-select form-field-favoritecolor">
        <div class="form-item"><label class="item-label"><span class="field-label">Choose your favorite color</span><select name="favoriteColor"><option value=""></option><option value="red">red</option><option value="green">green</option><option value="blue">blue</option></select></label></div>
    </div>
    <div class="form-field form-field-radio form-field-animal">
        <div class="form-item"><label class="item-label"><span class="field-label">Animal</span><label class="form-field-group"><span class="replaced-input-radio " tabindex="0"><span></span></span><span class="group-option-label">dog</span><input type="radio" value="dog"></label><label class="form-field-group"><span class="replaced-input-radio checked" tabindex="0"><span></span></span><span class="group-option-label">wildaboar</span><input type="radio" value="wildaboar"></label></label>
        </div>
    </div>
    <div class="form-field form-field-checkbox form-field-ishungry">
        <div class="form-item"><label class="item-label"><span class="field-label">Are you hungry?</span><span class="replaced-input-checkbox checked" tabindex="0"><span><svg height="17" viewBox="0 0 13 13" width="17"></svg></span></span><input name="isHungry" class="form-input-checkbox" type="checkbox" value="isHungry"></label></div>
    </div>
    <div class="form-field form-field-checkboxes form-field-countries">
        <div class="form-item"><label class="item-label"><span class="field-label">Countries</span><label class="form-field-group"><span class="replaced-input-checkboxes checked" tabindex="0"><span>
          <svg height="17" viewBox="0 0 13 13" width="17"></svg></span></span><span class="group-option-label">USA</span><input type="checkbox" value="USA"></label><label class="form-field-group"><span class="replaced-input-checkboxes checked" tabindex="0"><span>
            <svg height="17" viewBox="0 0 13 13" width="17"></svg></span></span><span class="group-option-label">Vietnam</span><input type="checkbox" value="Vietnam"></label><label class="form-field-group"><span class="replaced-input-checkboxes " tabindex="0"><span><svg height="17" viewBox="0 0 13 13" width="17"></svg></span></span><span class="group-option-label">Arigonia</span><input type="checkbox" value="Arigonia"></label></label>
        </div>
    </div><button type="submit">Submit</button>
</div>
```