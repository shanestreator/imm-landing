// db = database
// cli = client
// cliTotal is based on the dbPrice * cliQuantity on client side
const validateSingleProductTotal = (
  dbPrice,
  dbManualsPerPack,
  cliQuantity,
  cliTotal
) => {
  cliTotal = cliTotal.split(',').join('')

  let itemTotal = String(+dbPrice * +dbManualsPerPack * +cliQuantity) + '.00'
  itemTotal = itemTotal.split(',').join('')

  // console.log('COMPARE: ', itemTotal === cliTotal)
  if (itemTotal === cliTotal) {
    return true
  } else {
    return false
  }
}

// @client:   productsInCart => Array of objects
// @database: allProducts => Array of objects
const validateProducts = (productsInCart, allProducts) => {
  return productsInCart.every(prod => {
    const filtered = allProducts.filter(p => {
      // Check to see if product exists in database (id's match)
      if (String(p._id) === prod._id) {
        // Database properties on a matched product
        const { price, manualsPerPack } = p
        // Client side quantity and calculated total (to be validated)
        const { quantity, total } = prod

        if (
          validateSingleProductTotal(price, manualsPerPack, quantity, total)
        ) {
          return true
        }
      } else {
        return false
      }
    })

    if (filtered.length > 0) {
      return true
    } else {
      return false
    }
  })
}

module.exports = { validateProducts }
