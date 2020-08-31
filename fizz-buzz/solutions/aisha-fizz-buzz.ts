export function fizzbuzz(given: number): (string | number)[] {
  let list = []

  for (let i = 1; i <= given; i++) {
    if (i % 3 === 0) {
      list.push('fizz')
    } else if (i % 5 === 0) {
      list.push('buzz')
    } else {
      list.push(i)
    }
  }
  return list
}
