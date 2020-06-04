import { addAllNumbers } from './aisha-gregg.add-all-numbers'

describe('function that adds all numbers', () => {
  it('should add all numbers in an array', () => {
    const given = [23, 4, 5, 77, 0]

    const actual = addAllNumbers(given)

    expect(actual).toBe(109)
  })
})
