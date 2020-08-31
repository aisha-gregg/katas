import { powerOfTwo } from './aisha-power-of-two'

it('should return an array of numbers to its power of 2', () => {
  const numbers = [2, 4, 7, 3, 5]

  const actual = powerOfTwo(numbers)
  expect(actual).toEqual([4, 16, 49, 9, 25])
})
