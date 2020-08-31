export function powerOfTwo(numbers: number[]): number[] {
  const newNumbers: number[] = []
  for (let i = 0; i < numbers.length; i++) {
    newNumbers.push(numbers[i] ** 2)
  }
  return newNumbers
}
