// Input - productsInCart: array
// Output - number
export const calcForCartTotal = productsInCart => {
  console.log('products in cart', productsInCart)
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
  return `${price}.00`
}
