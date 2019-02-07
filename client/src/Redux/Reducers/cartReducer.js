import { SET_CART, ADD_CART_ITEM, REMOVE_CART_ITEM } from '../Actions/types'

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CART: {
      return [...state]
    }
    case ADD_CART_ITEM: {
      console.log('STATE: ', state, 'PAYLOAD: ', action.payload)
      return [...state, action.payload]
    }
    case REMOVE_CART_ITEM: {
      return []
    }
    default: {
      return state
    }
  }
}
