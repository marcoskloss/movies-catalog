export function truncate(text) {
  if (text.length > 100) {
    if (text[99] === ',' || text[99] === '.') return `${text.substr(0, 99)}...`

    return `${text.substr(0, 100)}...`
  } else {
    return text
  }
}