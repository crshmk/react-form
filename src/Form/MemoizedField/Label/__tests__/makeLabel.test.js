import makeLabel, { camelToLabel } from '../makeLabel'

describe('makeLabel util', () => {
  test('camelToLabel creates a label from a camel cased form field name', () => {
    expect(camelToLabel('oneTwoThree')).toBe('One Two Three')
  })
  test('uses label explicitly set on the field', () => {
    const field = { name: 'oneTwo', label: 'Three Four'}
    expect(makeLabel(field)).toBe('Three Four')
  })
  test('creates a label from field name when no label is set', () => {
    const field = { name: 'oneTwo'}
    expect(makeLabel(field)).toBe('One Two')
  })
})