import { getPrimeNumbers } from './aisha-prime-numbers'

it('should return an array of prime numbers when given a number, that when multiplied can produce the same given number', () => {
  const given = 25

  const actual = getPrimeNumbers(given)
  expect(actual).toEqual([5, 5])
})
