import appendOrRemove from './appendOrRemove'

import { update } from 'ramda'

import CheckIcon from '../../../../assets/icons/Check'
import makeGroupOption from '../makeGroupOption'

const Checkboxes = ({field, setValues, value}: CheckboxesInputProps) => {
  const { options } = field 
  
  const onChange: OnChange = e => {
    const newValues =  appendOrRemove(e.target.value, value)
    setValues(update(field.i, newValues))
  }

  return <>{options.map(makeGroupOption(onChange, field, value))}</>
}

export default Checkboxes 