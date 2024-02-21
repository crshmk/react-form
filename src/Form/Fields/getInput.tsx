import { ReactElement } from 'react'

import { always, cond, equals } from 'ramda'

import Select from './Inputs/Select'
import Text from './Inputs/Text'

// TODO: figure out how to type this 
const getInput = cond([
  [equals('text'), always(Text)],
  [equals('textarea'), always(Text)],
  [equals('password'), always(Text)],
  [equals('select'), always(Select)]
])

export default getInput