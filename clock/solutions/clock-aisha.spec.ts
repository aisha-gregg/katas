import { clock } from './clock-aisha'

describe('function clock', () => {
  it('should take a time in seconds and return it in the following format hh:mm:ss', () => {
    const given = 30

    const actual = clock(given)
    expect(actual).toBe('00:00:30')
  })
})
