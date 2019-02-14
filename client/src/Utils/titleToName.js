// title = 'Family Pack'
export default title => {
  const firstChar = title
    .split(' ')[0]
    .charAt(0)
    .toLowerCase()
  const secondChar = title
    .split(' ')
    .join('')
    .slice(1)

  return firstChar + secondChar
}
