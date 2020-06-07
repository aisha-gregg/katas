import { clock } from './clock-aisha'

describe('clock', () => {
  it('should format the time when seconds are less than a minute', () => {
    const given = 30

    const actual = clock(given)

    expect(actual).toBe('00:00:30')
  })

  it('should format the time when seconds are more than 60', () => {
    const given = 70

    const actual = clock(given)

    expect(actual).toBe('00:01:10')
  })

  it('should format the time in seconds that is 10 minutes', () => {
    const given = 600

    const actual = clock(given)

    expect(actual).toBe('00:10:00')
  })

  it('should format the time in seconds that is 1 hour', () => {
    const given = 3600

    const actual = clock(given)

    expect(actual).toBe('01:00:00')
  })

  it('should format the time in seconds that is over 1 hour and 10 minutes', () => {
    const given = 40200

    const actual = clock(given)

    expect(actual).toBe('11:10:00')
  })

  it('should pad with zeroes when a time unit is less than 10', () => {
    const given = 3661

    const actual = clock(given)

    expect(actual).toBe('01:01:01')
  })
})
