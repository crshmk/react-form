import createValuesState from '../createValuesState'

const text = { name: 'firstName' }
const textWithInit = { name: 'lastName', init: 'Nguyen' }
const singleCheckbox = { name: 'isNice', inputType: 'checkbox' }
const checkboxes = { name: 'hobbies', inputType: 'checkbox', options: ['running', 'walking'] }
const checkboxesWithInit = { 
  name: 'books', 
  inputType: 'checkbox', 
  options: ['The Sorrow and the Pity', 'The Cat Who Likes Potato Soup'],
  init: 'The Sorrow and the Pity'
}

const passedFields = [
  text,
  textWithInit, 
  singleCheckbox, 
  checkboxes, 
  checkboxesWithInit
]

const expected = [
  '', 
  'Nguyen', 
  false, 
  '', 
  'The Sorrow and the Pity'
]

describe('createValuesState util', () => {
  test('creates an array of initial values from form fields passed to api', () => {
    expect(createValuesState(passedFields)).toStrictEqual(expected)
  })
})