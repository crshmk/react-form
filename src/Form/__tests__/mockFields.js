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

export const passedFields = [
  text,
  textWithInit, 
  singleCheckbox, 
  checkboxes, 
  checkboxesWithInit
]