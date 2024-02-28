import useField from '../../../useField'

import { update } from 'ramda'

import CheckIcon from '../../../../../assets/icons/Check'

const Checkbox = () => {
  const {field, setValues, value} = useField()

  const onChange = () => {
    setValues(update(field.i, !value))
  }

  const wrapperClassName = `replaced-input-${field.inputType} ` + (value ? 'checked' : '')
  let inputClassName = `form-input-${field.inputType}` 
  //inputClassName += isEmpty('validationError') ? '' : ' invalid'
  return (
    <>
     <span className={wrapperClassName} tabIndex={0}>
      <span>
        <CheckIcon color={value ? 'green' : 'white'} />
      </span>
    </span>
    <input 
      name={field.name}
      className={inputClassName}
      type="checkbox" 
      value={field.name} 
      checked={value as boolean} 
      onChange={onChange} 
    />
    </>
  ) 
}

export default Checkbox
