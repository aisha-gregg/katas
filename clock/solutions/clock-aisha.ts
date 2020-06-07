export function clock(seconds: number): string {
  const secondsInAnHour = 3_600
  const secondsInAMinute = 60
  let newSeconds = 0
  let newMinutes = 0
  let newHours = 0
  if (seconds >= secondsInAnHour) {
    newHours = Math.floor(seconds / secondsInAnHour)
    seconds = seconds % secondsInAnHour
  }

  if (seconds >= secondsInAMinute) {
    newMinutes = Math.floor(seconds / secondsInAMinute)
    seconds = seconds % secondsInAMinute
  }

  if (seconds < secondsInAMinute) {
    newSeconds = seconds
  }

  const padLeft = (time: number) => (time < 10 ? '0' + time : time)

  return `${padLeft(newHours)}:${padLeft(newMinutes)}:${padLeft(newSeconds)}`
}
