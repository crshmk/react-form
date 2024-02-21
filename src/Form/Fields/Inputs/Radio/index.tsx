
import { update } from 'ramda'

import makeGroupOption from '../makeGroupOption'

const Radio = ({field, setValues, value}: RadioInputProps ) => {
  const { options } = field 
  
  const onChange: OnChange = e => {
    setValues(update(field.i, e.target.value))
  }

  return <>{options.map(makeGroupOption(onChange, field, value))}</>
}

export default Radio 
