react form  


```javascript 
import Form, { validations } from 'react-form'

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
    name: 'favoriteColor',
    label: 'Choose your favorite color'
    inputType: 'select', 
    options: ['', 'red', 'green', 'blue']
  }
]


<Form fields={fields} onSubmit={console.log}/>
```
## API 
`name` (required): the key on the submitted form object 

A submitted form from the following fields 
```javascript 
const fields = [{ name: 'occupation'}]
```
emits 
```javascript 
{ occupation: 'value' }
```


### Text 
```jsx
<input type="text" />
```
creates an input field of type `text`
fields without an 'inputType' prop default to inputType `text`
```javascript 
{
  name: 'firstName'
}
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
> submits { description: '' }

### Password 
```jsx
<input type="password" />
```
> comes with icon to toggle hidden state
```javascript 
{
  name: 'secretPassword',
  inputType: 'password '
}
```
> submits { password: '' }

### Select  
```jsx
<select>
  <option value="red">red</option>
  <option value="green">green</option>
</select>
```
```javascript 
{
  name: 'color',
  inputType: 'select',
  options: ['red', 'green']
}
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

---

dev notes:


props are drilled and state is tracked by index. this is not an elegant solution, but in this case performance matters. that's actually why i needed TS for this.  




