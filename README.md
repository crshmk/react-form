My React form solution 

--- 

##### 1. Declare a collection of fields

```javascript 
import { validations } from 'react-form'

const { isRequired } = validations 

const fields = [
  {
    name: 'firstName'
  },
  {
    name: 'lastName',
    inputType: 'text',
    validations: [isRequired],
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


```

##### 2. Pass them to the Form element

```javascript 
import Form from 'react-form'

<Form fields={fields} onSubmit={console.log}/>
```

##### 3. Hit the submit button and see the errors appended to their respective fields

```html 
<p class="field-error-message">Please enter your last name</p>

<p class="field-error-message">Please enter a description</p>
```

##### 4. Fill in some fields, hit the submit button, and get a payload like 
```javascript 
{
  animal: "wildaboar"
  countries: ['USA']
  description: ""
  favoriteColor: "green"
  firstName: "Moonbean"
  isHungry: true
  lastName: "Sillers"
}
```


The above form creates this html

```html

<div class="react-form ">
  <div class="form-field form-field-text form-field-firstname">
      <div class="form-item"><label>First Name<input name="firstName" placeholder="" type="text" value="sdfg"></label></div>
  </div>
  <div class="form-field form-field-text form-field-lastname">
      <div class="form-item"><label>Last Name<input name="lastName" placeholder="" type="text" value="asdf"></label></div>
  </div>
  <div class="form-field form-field-textarea form-field-description">
      <div class="form-item"><label>Description<textarea name="description" placeholder="Tell us all about it" type="textarea" rows="10">asdf</textarea></label></div>
  </div>
  <div class="form-field form-field-select form-field-favoritecolor">
      <div class="form-item"><label>Choose your favorite color<select><option value=""></option><option value="red">red</option><option value="green">green</option><option value="blue">blue</option></select></label></div>
  </div>
  <div class="form-field form-field-radio form-field-animal">
      <div class="form-item"><label>Animal<label>dog<input type="radio" value="dog"></label><label>wildaboar<input type="radio" value="wildaboar"></label></label>
      </div>
  </div>
  <div class="form-field form-field-checkbox form-field-ishungry">
      <div class="form-item"><label>Are you hungry?<input type="checkbox" value="isHungry"></label></div>
  </div>
  <div class="form-field form-field-checkboxes form-field-countries">
      <div class="form-item"><label>Countries<label>USA<input type="checkbox" value="USA"></label><label>Vietnam<input type="checkbox" value="Vietnam"></label><label>Arigonia<input type="checkbox" value="Arigonia"></label></label>
      </div>
  </div><button type="submit">Submit</button>
</div>
```

## API 

### Required fields 
`name` (required): the key on the submitted form object 

### Optional fields 
- `inputType` defaults to `text`; possible values are 
```typescript 
'checkbox' | 'checkboxes' | 'password' | 'radio' | 'select' | 'text' | 'textarea' | undefined
```
- `label: string` label for the form field; defaults to the pascal case version of the `name`  
- `onSubmit: (payload: formPayload) => {}` the callback for the submit button
- `validation: (value: formValue) => boolean` a validation function to run on the field onSubmit. If any validations return false, onSubmit is not called, and errors are appended to respective form fields. 
- `errorMessage: string` defaults to 'Error'
- `placeholder: string` 
- `options: string[]`: options for a radio or checkbox group 
- `rows: number` for textarea; defaults to `10`
---

## Defining Fields

### Text 

creates an input field of type `text`
fields without an 'inputType' prop default to inputType `text`
```javascript 
{
  name: 'firstName'
}
```
```jsx
<input type="text" />
```
> submits { firstName: '' }

### Textarea 
```jsx
<textarea />
```
```javascript 
{
  name: 'description',
  inputType: 'textarea'
}
```

### Password 

> comes with icon to toggle hidden state
```javascript 
{
  name: 'secretPassword',
  inputType: 'password '
}
```
```jsx
<input type="password" />
```

### Select  
```javascript 
{
  name: 'color',
  inputType: 'select',
  options: ['red', 'green']
}
```
```jsx
<select>
  <option value="red">red</option>
  <option value="green">green</option>
</select>
```
> submits { color: 'red' }

### Single Checkbox 
```jsx 
<input type="checkbox" value="isNice" checked={true} />
```
```javascript 
{
  name: 'isNice',
  inputType: 'checkbox'
}
```
> submits { isNice: true }

### Checkbox Group
```jsx 
<>
<input type="checkbox" value="red" checked={true} />
<input type="checkbox" value="green" checked={false} />
</>
```
```javascript 
{
  name: 'colors',
  inputType: 'checkboxes',
  options: ['red', 'green']
}
```
> submits { colors: ['red'] }


### Radio Group
```jsx 
<>
<input type="radio" value="dog" checked={true} />
<input type="radio" value="wildaboar" checked={false} />
</>
```
```javascript 
{
  name: 'animal',
  inputType: 'checkboxes',
  options: ['dog', 'wildaboar']
}
```
> submits { animal: 'wildaboar' }

