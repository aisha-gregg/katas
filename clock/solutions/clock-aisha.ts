export function clock(seconds: number): string {
  const secondsInAnHour = 3_600
  const secondsInAMinute = 60
  const hours = Math.floor(seconds / secondsInAnHour)
  seconds %= secondsInAnHour
  const minutes = Math.floor(seconds / secondsInAMinute)
  seconds %= secondsInAMinute
  const padLeft = (time: number) => (time < 10 ? '0' + time : time)
  return padLeft(hours) + ':' + padLeft(minutes) + ':' + padLeft(seconds)
}
