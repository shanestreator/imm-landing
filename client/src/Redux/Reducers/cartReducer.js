import {
  SET_CART,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM
} from '../Actions/types'

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CART: {
      return [...state]
    }
    case ADD_CART_ITEM: {
      return [...state, action.payload]
    }
    case UPDATE_CART_ITEM: {
      return state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload
        } else {
          return item
        }
      })
    }
    case REMOVE_CART_ITEM: {
      console.log('STATE: ', state, 'PAYLOAD: ', action.payload)
      return state.filter(item => item.id !== action.payload)
    }
    default: {
      return state
    }
  }
}
