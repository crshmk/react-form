import makeErrorMessages from '../makeErrorMessages'
import { minLen } from '../../../validations'

describe('makeErrorMessages util', () => {
  test('sets error message when value does not pass validation', () => {
    const fields = [
      { validation: minLen(2), errorMessage: 'needs a length of 2' }
    ]
    const values = ['a']
    expect(makeErrorMessages(fields, values)).toStrictEqual(['needs a length of 2'])
  })
  test('sets a default error message when one is not provided', () => {
    const fields = [
      { validation: minLen(2) }
    ]
    const values = ['a']
    expect(makeErrorMessages(fields, values)).toStrictEqual(['Error']) 
  })
  test('sets an empty string in the errors array when a validation function is not provided', () => {
    const fields = [
      { validation: minLen(2), errorMessage: 'Too short' },
      { validation: minLen(2) },
      {  }
    ]
    const values = ['a', 'long enough', '']
    expect(makeErrorMessages(fields, values)).toStrictEqual(['Too short', '', '']) 
  })

})