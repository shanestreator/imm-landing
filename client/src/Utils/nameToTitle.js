// name = 'familyPack'
// title = 'Family Pack'
export default name => {
  let title = name[0].toUpperCase()

  for (let i = 1; i < name.length; i++) {
    const char = name[i]
    if (char === char.toLowerCase()) {
      title += char
    } else {
      title += ' ' + char
    }
  }
  return title
}
