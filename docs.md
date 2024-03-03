

Pass the form component fields and an `onSubmit` and/or `onChange` handler to receive the form data.

```jsx 
import Form from 'form'

const fields = [
  { name: 'fullName' }, 
  { name: 'email' }
]

const SignupForm = () => (
  <Form
    fields={fields}
    onSubmit={console.log}
  />
)
```

---

## `onSubmit` / `onChange`:

`onSubmit` or `onChange` are handed an object created from the `name` props and input value.


| inputType  | value 
| ------------- | ------------- |
| `checkbox` | `bool`
| `checkboxes` | `string[]`
| `password` | `string`
| `radio` | `string`
| `select` | `string[]`
| `text` | `string`
| `textarea` | `string`

e.g. 
```javascript 
const fields = [
  { 
    name: 'fullName' 
  },
  { 
    name: 'colors', 
    inputType: 'checkboxes', 
    options: ['green', 'orange', 'red']
  },
  { 
    name: 'isActive', 
    inputType: 'checkbox' 
  },
  { 
    name: 'bestNumber', 
    inputType: 'radio', 
    options: ['one', 'two']
  }
]
```
might submit 
```javascript 
{
  fullName: 'some person',
  colors: ['orange', 'red'],
  isActive: true, 
  bestNumber: 'one'
}
```

--- 

 There are also props to configure the submit button.
 
```jsx
<Form
  fields={fields}
  isSubmitButtonHidden={false}
  onChange={console.log}
  onSubmit={console.log}
  submitButtonLabel={'Submit'}
/>
```

--- 

## Form Fields

```typescript 
type Field = {
  errorMessage?: string // displayed when validation returns false; cleared onFocus
  initialValue?: boolean | string | string[] // see value types per inputType above  
  inputType?: string, // see inputType options
  label?: string // override label created from the name prop 
  maxLen?: number // character countdown
  name: string 
  options?:  (string | { label: string, value: string })[]
  placeholder?: string
  rows?: number // textarea 
  validation?: (fieldValue: FieldValue) => boolean // runs onSubmit
}
```
 - `name` 
   - only required prop 
   - used as prop names for the emitted form data 

 - `inputType` 
   - defaults to `text`
```typescript 
'checkbox' | 'checkboxes' | 'password' | 'radio' | 'select' | 'text' | 'textarea' | undefined
```

- `label` 
  - the label for the form field 
  - if not provided, a label is created from the `name` prop by converting camel case to words, e.g. `firstName` becomes `First Name`

- `validation`
  - `(value: FormValue) => boolean`
  - a function that runs on the field input; returns true if the field is valid 
  - `onSubmit`, each validation function is run on the input value for its respective field. If any fail, the `onSubmit` callback is not executed. For all that fail, the respective `errorMessage` displays and the screen scrolls to the topmost field with an error. The included css sets a red border on each field with an error. 

- `errorMessage`
  - defaults to `'Error'`; see `validation` above
  - cleared `onFocus`

- `maxLen`
  - use when a field has a validation for a max character length and you also want to count down the remaining number of characters as the user types 
  - assumes a validation is present on the field for a max len, e.g. 
  `{ name: 'description', validation: maxLen(255), maxLen: 255 }`

- `options` 
  - the `checkboxes`, `radio`, and `select` options 
  - for separate label and value, use an object, e.g. 
    `{ label: 'Vietnam', value: 'VN' }`

- `initialValue`
  - initialize a field input 
  - note the value types per `inputType`, e.g. 
  ```javascript
  const fields = [
    {
      name: 'fullName',
      initialValue: 'my name'
    },
    {
      name: 'isActive',
      inputType: 'checkbox',
      initialValue: true 
    },
    ,
    {
      name: 'numbers',
      inputType: 'checkboxes',
      options: ['one', 'two'],
      initialValue: ['one']
    }
  ]
  ```
- `placeholder`
  - for `text`, `textarea`, and `password` 

- `rows`
  - for `textarea`
  - defaults to `5`


--- 


## Styling 

There are plenty of selectors to target / override. A sample is: 


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