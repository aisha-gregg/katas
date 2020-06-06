export function clock(seconds: number): string {
  let formatSeconds = `00:00:${seconds}`
  if (seconds > 60) {
    const calculateMinutes = Math.floor(seconds / 60)
    const calculateSeconds = seconds % 60
    formatSeconds = `00:0${calculateMinutes}:${calculateSeconds}`
  }
  return formatSeconds
}
