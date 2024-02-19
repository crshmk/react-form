import makeSubmitPayload from '../makeSubmitPayload'

describe('makeSubmitPayload util', () => {
  test('creates a payload object from form fields and values', () => {
    const fields = [{ name: 'one' }, { name: 'two' }]
    const values = ['1', '2']
    
    const expected = { one: '1', two: '2' }
    expect(makeSubmitPayload(fields, values)).toStrictEqual(expected)
  })
})