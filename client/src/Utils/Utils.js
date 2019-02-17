// Input - productsInCart: array
// Output - String
export const calcForCartTotal = productsInCart => {
  let total = 0

  productsInCart.map(product => {
    const price = product.total.split(',').join('')

    if (product.total.indexOf(',') > -1) {
      console.log('PRICE: ', price)
      total += +price
    } else {
      total += +product.total
    }
  })
  return String(total + '.00')
}

// Input - price: string, quantity: string, manualsPerPack: string
// Output - String
export const calcForItemTotal = (price, quantity, manualsPerPack) => {
  const manualsPerPackString = manualsPerPack
  price = +price
  quantity = +quantity
  manualsPerPack = +manualsPerPack

  let total

  if (manualsPerPackString.indexOf(',') > -1) {
    const manuals = manualsPerPackString.split(',').join('')

    total = price * quantity * manuals
  } else {
    total = price * quantity * manualsPerPack
  }

  total = String(total + '.00')

  return total
}

// Input - Quantity: Number, Price: Number
// Output - String
export const priceRight = (quantity, price, multiplier) => {
  let optionTotal = ''
  let temp = String(quantity * price * multiplier)

  if (!temp.includes('.')) {
    optionTotal += temp + '.00'
  } else if (temp.includes('.5')) {
    optionTotal += temp + '0'
  }

  return optionTotal
}
