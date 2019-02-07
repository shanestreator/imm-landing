// import { SET_CART, ADD_CART_ITEM, REMOVE_CART_ITEM } from '../Actions/types'

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  country: '',
  state: '',
  city: '',
  zipcode: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    default: {
      return state
    }
  }
}
