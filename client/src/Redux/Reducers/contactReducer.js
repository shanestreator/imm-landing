import { SENT_EMAIL } from '../Actions/types'

const initialState = {
  success: false,
  message: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SENT_EMAIL: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
