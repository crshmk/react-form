import useField from '../../../useField'

import appendOrRemove from './appendOrRemove'
import { update } from 'ramda'

import makeGroupOption from '../makeGroupOption'

const Checkboxes = () => {
  const { field, setValues, value } = useField()
  const { options } = field
  
  const onChange: OnChange = e => {
    const newValues = appendOrRemove(e.target.value, value as string[])
    setValues(update(field.i, newValues))
  }

  return <>{options!.map(makeGroupOption(onChange, field, value as string[]))}</>
}

export default Checkboxes 