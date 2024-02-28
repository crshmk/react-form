import { FC } from 'react'
import { always, cond, equals, T } from 'ramda'

import Checkbox from './Inputs/Checkbox'
import Checkboxes from './Inputs/Checkboxes'
import Radio from './Inputs/Radio'
import Select from './Inputs/Select'
import Text from './Inputs/Text'

// the typing for { inputType: InputType } is too problematic with equals curried into cond
type GetInput = (inputType: string) => FC
const getInput: GetInput = cond([
  [equals('text'), always(Text)],
  [equals('textarea'), always(Text)],
  [equals('password'), always(Text)],
  [equals('select'), always(Select)],
  [equals('checkbox'), always(Checkbox)],
  [equals('checkboxes'), always(Checkboxes)],
  [equals('radio'), always(Radio)],
  [T, always(Text)],
])

export default getInput