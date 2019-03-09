// Input - productsInCart: array
// Output - number
export const calcForCartTotal = productsInCart => {
  // console.log('products in cart', productsInCart)
  return productsInCart.reduce((total, product) => (total += product.total), 0)
}

// Input - price: number, quantity: number, manualsPerPack: number
// Output - number
export const calcForItemTotal = (price, quantity, manualsPerPack) => {
  return price * quantity * manualsPerPack
}

// Output - string
export const storeCardAddOneOrTwoZeros = price => {
  price = String(price)
  if (price.indexOf('.') > -1) {
    return price + '0'
  } else {
    return price
  }
}

export const itemModalAddZeros = price => {
  if (String(price).indexOf('.') > -1) {
    return `${price}0`
  } else {
    return `${price}.00`
  }
}

export const totalManualsForItemCalc = product => {
  const total = product.manualsPerPack * +product.quantity

  return total
}

export const totalManualsInCartCalc = productsInCart => {
  return productsInCart.reduce((total, cur) => {
    total += cur.manualsPerPack * +cur.quantity
    return total
  }, 0)
}
