export const validNumber = value => {
  const checkValue = Number(value)

  if (
    (checkValue < 1 ||
      checkValue > 100 ||
      checkValue === /^[0-9]*$/gm ||
      isNaN(value) ||
      value.includes('.')) &&
    value.length > 0
  ) {
    return true
  } else {
    return false
  }
}

export const filterStoreOption = state => {
  const notEmpty = {}
  for (let key in state) {
    if (state[key] !== '' && typeof state[key] !== 'object') {
      notEmpty[key] = state[key]
    }
  }
  return notEmpty
}
