// @ts-nocheck
import { always, cond, equals, T } from 'ramda'

import Checkbox from './Inputs/Checkbox'
import Checkboxes from './Inputs/Checkboxes'
import Radio from './Inputs/Radio'
import Select from './Inputs/Select'
import Text from './Inputs/Text'

// TODO: figure out how to type this 
type GetInput = (inputType: InputType) => JSX.Element
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