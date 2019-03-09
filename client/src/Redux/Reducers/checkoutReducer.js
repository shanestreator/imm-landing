import {
  SET_SHIP_TO,
  GET_SHIP_TO,
  SET_SHIP_TO_IS_EMPTY
} from '../Actions/types'

const initialState = {
  shipTo: {
    firstName: '',
    lastName: '',
    shippingAddress: '',
    shippingAddress2: '',
    shippingCountry: '',
    shippingState: '',
    shippingZip: '',
    phone: '',
    email: '',
    emailConfirm: ''
  },
  shipToIsEmpty: true
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SHIP_TO: {
      return { ...state, shipTo: action.payload, shipToIsEmpty: true }
    }
    case SET_SHIP_TO: {
      return {
        id: action.payload.id,
        shipTo: action.payload.shipTo,
        shipToIsEmpty: false
      }
    }
    case SET_SHIP_TO_IS_EMPTY: {
      return { ...state, shipToIsEmpty: action.payload }
    }
    default: {
      return state
    }
  }
}
