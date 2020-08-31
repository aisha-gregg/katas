import { highestNumber } from './highest-number'
describe('highest number', () => {
  it('should return the highest number in an array', () => {
    const given = [40, 2, 34, 7, 8, 90]

    const actual = highestNumber(given)
    expect(actual).toBe(90)
  })
})
