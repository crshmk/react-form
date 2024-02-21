import createValuesState from '../createValuesState'

describe('createValuesState util', () => {
  test('creates an array of initial values from extended form fields', () => {
    const fields = [{name: 'one', inputType: 'text'}, {name: 'two', inputType: 'select'}]
    const expected = ['', '']
    expect(createValuesState(fields)).toStrictEqual(expected)
  })
  test('sets an initial value when declared', () => {
    const fields = [{name: 'one'}, {name: 'two', initialValue: 'init'}]
    const expected = ['', 'init']
    expect(createValuesState(fields)).toStrictEqual(expected)
  })
  test('sets a boolean for single checkboxes and an empty array or array with init value for a group of checkboxes', () => {
    const singleCheckbox = { name: 'isNice', inputType: 'checkbox' }
    const checkboxes = { name: 'hobbies', inputType: 'checkboxes', options: ['running', 'walking'] }
    const checkboxesWithInit = { 
      name: 'books', 
      inputType: 'checkboxes', 
      options: ['The Sorrow and the Pity', 'The Cat Who Likes Potato Soup'],
      initialValue: ['The Sorrow and the Pity']
    }
    const fields = [singleCheckbox, checkboxes, checkboxesWithInit]
    const expected = [false, [], ['The Sorrow and the Pity']]
    expect(createValuesState(fields)).toStrictEqual(expected)
  })
})