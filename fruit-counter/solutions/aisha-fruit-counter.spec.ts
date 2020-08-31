import { fruitCounter } from './aisha-fruit-counter'
describe('function fruit counter', () => {
  it('should be able to return an object with unique keys', () => {
    const given = ['🍋', '🍉', '🍒', '🍋', '🍋', '🍎', '🍎', '🍐']

    const actual = fruitCounter(given)
    expect(actual).toEqual({ '🍋': 3, '🍉': 1, '🍒': 1, '🍎': 2, '🍐': 1 })
  })
})
