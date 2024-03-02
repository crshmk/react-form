/**
 * create radio or checkbox options for a group of inputs
 */
import CheckIcon from '../../../../assets/icons/Check'

import getOptionLabelAndValue from './getOptionLabelAndValue'

type MakeGroupOption =
  (onChange: OnChange, field: FormField, selection : string | string[]) => 
    (option: SelectOption) => JSX.Element
const makeGroupOption: MakeGroupOption = (onChange, field, selection) => option => {

  const [optionLabel, optionValue] = getOptionLabelAndValue(option)

  const isRadio = field.inputType === 'radio'

  const isChecked = isRadio ? selection === optionValue : selection.includes(optionValue) 
  const inputType = isRadio ? 'radio' : 'checkbox'

  const visibleInputClassName = `replaced-input-${field.inputType} ` + (isChecked ? 'checked' : '')
  // let hiddenInputClassName = `form-input-${field.inputType}` 
  //hiddenInputClassName += isEmpty('validationError') ? '' : ' invalid'

  return (
    <label key={optionValue} className="form-field-group">
      <span className={visibleInputClassName} tabIndex={0}>
        <span>
          {!isRadio && <CheckIcon color={isChecked ? 'green' : 'white'} />}
        </span>
      </span>
      <span className="group-option-label">{optionLabel}</span>
      <input 
        checked={isChecked}
        type={inputType}
        value={optionValue} 
        onChange={onChange} 
      />
    </label>
  )
}

export default makeGroupOption
