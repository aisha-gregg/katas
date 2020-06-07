export function clock(seconds: number): string {
  let formatSeconds = `00:00:${seconds}`
  if (seconds > 60 && seconds < 600) {
    const calculateMinutes = Math.floor(seconds / 60)
    const calculateSeconds = seconds % 60
    formatSeconds = `00:0${calculateMinutes}:${calculateSeconds}`
  }
  if (seconds >= 600) {
    const calculateMinutes = Math.floor(seconds / 60)
    const calculateSeconds = seconds % 60
    formatSeconds = `00:${calculateMinutes}:${calculateSeconds}0`
  }
  if (seconds === 3600) {
    const calculateMinutes = Math.floor(seconds / 60)
    if (calculateMinutes >= 60) {
      const calculateHours = Math.floor(calculateMinutes / 60)

      const calculateSeconds = seconds % 60

      formatSeconds = `0${calculateHours}:00:${calculateSeconds}0`
    }
  }

  if (seconds > 3600) {
    let calculateMinutes = Math.floor(seconds / 60)
    if (calculateMinutes >= 60) {
      const calculateHours = Math.floor(calculateMinutes / 60)
      calculateMinutes = calculateHours % 60
      const calculateSeconds = seconds % 60

      formatSeconds = `0${calculateHours}:0${calculateMinutes}:${calculateSeconds}0`
    }
  }

  if (seconds >= 4200) {
    let calculateMinutes = Math.floor(seconds / 60)
    if (calculateMinutes >= 60) {
      const calculateHours = Math.floor(calculateMinutes / 60)
      calculateMinutes = calculateHours % 60
      const calculateSeconds = seconds % 60

      formatSeconds = `0${calculateHours}:${calculateMinutes}0:${calculateSeconds}0`
    }
  }
  return formatSeconds
}
