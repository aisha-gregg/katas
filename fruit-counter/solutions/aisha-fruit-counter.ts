export function fruitCounter(given: string[]): Record<string, number> {
  let fruits: Record<string, number> = {}
  for (let i = 0; i < given.length; i++) {
    if (fruits[given[i]] === undefined) {
      fruits[given[i]] = 1
    } else {
      fruits[given[i]]++
    }
  }
  return fruits
}
