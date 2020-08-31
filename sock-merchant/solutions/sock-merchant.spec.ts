import { getPairs } from './sock-merchant'

describe('getPairs', () => {
  it('should return the number of colored pairs of socks in a list', () => {
    const socks = [1, 1, 2, 2, 3, 4, 5]

    const actual = getPairs(socks)

    expect(actual).toBe(2)
  })

  it.skip('should take into account that for a pair of socks to be valid it has to be 2', () => {
    const socks = [1, 1, 2, 2, 1, 4, 5]

    const actual = getPairs(socks)

    expect(actual).toBe(2)
  })
})
