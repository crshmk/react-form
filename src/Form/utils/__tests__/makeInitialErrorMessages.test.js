import makeInitialErrorMessages from '../makeInitialErrorMessages'

import { passedFields } from './createValuesState.test.js'

const expected = Array(passedFields.length).fill('')

describe('makeInitialErrorMessages util', () => {
  test('creates an array of empty strings of the same length as the fields', () => {
    expect(makeInitialErrorMessages(passedFields)).toStrictEqual(expected)
  })
})