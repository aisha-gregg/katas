import { filterEvenNumbers } from './aisha-filter-even-numbers'

describe('function filterEvenNumbers', () => {
  it('should filter the even numbers of an array', () => {
    const given = [3, 2, 7, 8, 9, 13, 16]

    const actual = filterEvenNumbers(given)
    expect(actual).toEqual([2, 8, 16])
  })
})
