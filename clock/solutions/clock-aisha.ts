export function clock(seconds: number): string {
  const formatSeconds = `00:00:${seconds}`

  return formatSeconds
}
