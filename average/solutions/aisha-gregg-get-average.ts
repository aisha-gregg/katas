export function getAverage(numbers: number[]): number {
  let total = 0

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
  }
  const average = total / numbers.length
  return average
}
