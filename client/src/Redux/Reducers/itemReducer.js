import { SET_ITEM } from '../Actions/Item/types'

const initialState = {
  pack: '',
  quantity: '',
  price: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ITEM: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
