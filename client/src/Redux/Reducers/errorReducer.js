import { GET_ERRORS, CLEAR_ERRORS } from '../Actions/types'

const initialState = {}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS: {
      // console.log('ERRORING OUT HERE >>>><<<<')
      return action.payload
    }
    case CLEAR_ERRORS: {
      return {}
    }
    default: {
      return state
    }
  }
}
