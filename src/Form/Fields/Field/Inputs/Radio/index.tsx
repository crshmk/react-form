import useField from '../../../useField'

import { update } from 'ramda'

import makeGroupOption from '../makeGroupOption'

const Radio = () => {
  const { field, setValues, value } = useField()
  const { options } = field  

  const onChange: OnChange = e => {
    setValues(update(field.i, e.target.value))
  }

  return <>{options!.map(makeGroupOption(onChange, field, value as string))}</>
}

export default Radio 
