import addIndices from '../addIndices'

describe('addIndices util', () => {
  test('adds an i prop to each collection item', () => {
    const collection = [{id: 1, val: 42}, {id: 2, val: 43}]
    const expected = [{id: 1, val: 42, i: 0}, {id: 2, val: 43, i: 1}]
    expect(addIndices(collection)).toStrictEqual(expected) 
  })
})