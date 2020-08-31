export function getPairs(socks: number[]): number {
  const counter: Record<string, number> = {}
  for (let i = 0; i < socks.length; i++) {
    if (counter[socks[i]] === undefined) {
      counter[socks[i]] = 1
    } else {
      counter[socks[i]]++
    }
  }

  let pairs = 0

  const counterArray = Object.entries(counter)

  for (let i = 0; i < counterArray.length; i++) {
    const [_, value] = counterArray[i]

    if (value === 2) {
      pairs++
    }
  }

  return pairs
}
