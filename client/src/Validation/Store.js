export const filterStoreOption = state => {
  const notEmpty = {}
  for (let key in state) {
    if (state[key] !== '0') {
      notEmpty[key] = state[key]
    }
  }
  return notEmpty
}
