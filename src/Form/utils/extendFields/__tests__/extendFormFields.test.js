import addDefaultInputTypes from '../addDefaultInputTypes'
import addIndices from '../addIndices'
import extendFormFields from '../'

import { map, prop, take } from 'ramda'

import { passedFields } from '../../mockFields'

describe('addDefaultInputTypes', () => {
  test('defaults fields to an input type of text', () => {
    const getInputTypes = map(prop('inputType'))
    const fields = take(4, passedFields)

    const expected = ['text', 'text', 'checkbox', 'checkbox']
    const fieldsWithDefaultInputTypes = addDefaultInputTypes(fields)
    expect(getInputTypes(fieldsWithDefaultInputTypes)).toStrictEqual(expected)
  })
  test('adds an i prop to each collection item', () => {
    const collection = [{id: 1, val: 42}, {id: 2, val: 43}]
    const expected = [{id: 1, val: 42, i: 0}, {id: 2, val: 43, i: 1}]
    expect(addIndices(collection)).toStrictEqual(expected) 
  })
  test('adds props to passed form fields', () => {
    const collection = [{id: 1, val: 42}, {id: 2, val: 43, inputType: 'checkbox'}]
    const expected = [{id: 1, val: 42, i: 0, inputType: 'text'}, {id: 2, val: 43, i: 1, inputType: 'checkbox'}]
    expect(extendFormFields(collection)).toStrictEqual(expected) 
  })
})