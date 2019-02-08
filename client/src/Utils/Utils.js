export const packInfo = pack => {
  switch (pack) {
    case 'couplePack': {
      return { title: 'Couple Pack', description: 'Pack of 2', price: 5 }
    }
    case 'familyPack': {
      return { title: 'Family Pack', description: 'Pack of 10', price: 4.5 }
    }
    case 'groupPack': {
      return { title: 'Group Pack', description: 'Pack of 25', price: 4 }
    }
    case 'businessPack': {
      return { title: 'Business Pack', description: 'Pack of 100', price: 3.5 }
    }
    case 'companyPack': {
      return { title: 'Company Pack', description: 'Pack of 1,000', price: 3 }
    }
    case 'bigCompanyPack': {
      return {
        title: 'Big-Company Pack',
        description: 'Pack of 5,000',
        price: 2.5
      }
    }
    default: {
      return null
    }
  }
}
