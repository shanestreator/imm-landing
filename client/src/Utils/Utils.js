export const packInfo = pack => {
  switch (pack) {
    case 'couplePack': {
      return {
        title: 'Couple Pack',
        description: 'Pack of 2',
        price: '5.00',
        multiplier: '2'
      }
    }
    case 'familyPack': {
      return {
        title: 'Family Pack',
        description: 'Pack of 10',
        price: '4.50',
        multiplier: '10'
      }
    }
    case 'groupPack': {
      return {
        title: 'Group Pack',
        description: 'Pack of 25',
        price: '4.00',
        multiplier: '25'
      }
    }
    case 'businessPack': {
      return {
        title: 'Business Pack',
        description: 'Pack of 100',
        price: '3.50',
        multiplier: '100'
      }
    }
    case 'companyPack': {
      return {
        title: 'Company Pack',
        description: 'Pack of 1,000',
        price: '3.00',
        multiplier: '1000'
      }
    }
    case 'bigCompanyPack': {
      return {
        title: 'Big-Company Pack',
        description: 'Pack of 5,000',
        price: '2.50',
        multiplier: '5000'
      }
    }
    default: {
      return null
    }
  }
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
