export function getHighestNumber(numbers: number[]): number {
  return numbers.slice().sort()[numbers.length - 1]
}

export function highestNumber(numbers: number[]): number {
  let highestNumber = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highestNumber) {
      highestNumber = numbers[i]
    }
  }
  return highestNumber
}
