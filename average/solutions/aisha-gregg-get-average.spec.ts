import { getAverage } from './aisha-gregg-get-average'

describe('function get avergage', () => {
  it('should get the average of an array of numbers', () => {
    const given = [5, 6, 7]

    const actual = getAverage(given)

    expect(actual).toBe(6)
  })
})
