/**
 * create radio or checkbox options for a group of inputs
 */
import CheckIcon from '../../../../assets/icons/Check'

type MakeGroupOption = (onChange: OnChange, field: FormField, value: string | string[]) => (option: string) => JSX.Element
const makeGroupOption: MakeGroupOption = (onChange, field, value) => option => {

  const isRadio = field.inputType === 'radio'

  const isChecked = isRadio ? value === option : value.includes(option) 
  const inputType = isRadio ? 'radio' : 'checkbox'

  const visibleInputClassName = `replaced-input-${field.inputType} ` + (isChecked ? 'checked' : '')
  // let hiddenInputClassName = `form-input-${field.inputType}` 
  //hiddenInputClassName += isEmpty('validationError') ? '' : ' invalid'

  return (
    <label key={option} className="form-field-group">
      <span className={visibleInputClassName} tabIndex={0}>
        <span>
          {!isRadio && <CheckIcon color={value ? 'green' : 'white'} />}
        </span>
      </span>
      <span className="group-option-label">{option}</span>
      <input 
        checked={isChecked}
        type={inputType}
        value={option} 
        onChange={onChange} 
      />
    </label>
  )
}

export default makeGroupOption