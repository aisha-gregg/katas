import { fizzbuzz } from './aisha-fizz-buzz'

it('should return a list of numbers that when given a number starts at 1 up until the number given', () => {
  const given = 5

  const actual = fizzbuzz(given)
  console.log(actual)

  expect(actual).toEqual([1, 2, 'fizz', 4, 'buzz'])
})

it('should return a list of numbers that when given a number starts at 1 up until the number given', () => {
  const given = 15

  const actual = fizzbuzz(given)
  console.log(actual)

  expect(actual).toEqual([
    1,
    2,
    'fizz',
    4,
    'buzz',
    'fizz',
    7,
    8,
    'fizz',
    'buzz',
    11,
    'fizz',
    13,
    14,
    'fizzbuzz'
  ])
})
