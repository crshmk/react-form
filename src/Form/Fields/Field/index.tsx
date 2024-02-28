import useField from '../useField'

import getInput from './getInput'
import makeLabel from './makeLabel'

const Field = () => {
  const { field } = useField()
  const label = makeLabel(field)
  const Input = getInput(field.inputType)

 return (
  <label className="item-label">
    <span className="field-label">{label}</span>
     <Input />
  </label>
 )
}

export default Field