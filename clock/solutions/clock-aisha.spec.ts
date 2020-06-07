import { clock } from './clock-aisha'

describe('function clock', () => {
  it('should take a time in seconds and return it in the following format hh:mm:ss', () => {
    const given = 30

    const actual = clock(given)
    expect(actual).toBe('00:00:30')
  })

  it('should take a time in seconds that is more than 60 and return it in the following format hh:mm:ss', () => {
    const given = 70

    const actual = clock(given)
    expect(actual).toBe('00:01:10')
  })

  it('should take a time in seconds that is 10 minutes and return it in the following format hh:mm:ss', () => {
    const given = 600

    const actual = clock(given)
    expect(actual).toBe('00:10:00')
  })

  it('should take a time in seconds that is 1 hour and return it in the following format hh:mm:ss', () => {
    const given = 3600

    const actual = clock(given)
    expect(actual).toBe('01:00:00')
  })

  it('should take a time in seconds that is over 1 hour and return it in the following format hh:mm:ss', () => {
    const given = 3660

    const actual = clock(given)
    expect(actual).toBe('01:01:00')
  })

  it('should take a time in seconds that is over 1 hour and 10 mintues and return it in the following format hh:mm:ss', () => {
    const given = 4260

    const actual = clock(given)
    expect(actual).toBe('01:01:00')
  })
})
