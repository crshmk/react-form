/**
 * create radio or checkbox options for a group of inputs
 */
const makeGroupOption = (onChange: OnChange, field: FormField, value: string) => (option: string) => {

  const isRadio = field.inputType === 'radio'

  const isChecked = isRadio ? value === option : value.includes(option) 
  const inputType = isRadio ? 'radio' : 'checkbox'

  return (
    <label key={option}>
      {option}
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