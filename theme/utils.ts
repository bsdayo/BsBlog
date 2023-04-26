export function formatTime(
  timestamp: number,
  withTime: boolean = false
): string {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hour = date.getHours().toString().padStart(2, '0')
  const minute = date.getMinutes().toString().padStart(2, '0')
  const str = `${year}.${month}.${day}`
  return withTime ? str + ` ${hour}:${minute}` : str
}

export function normalizeRelativePath(path: string) {
  return '/' + path.replace('index.md', '')
}
