import { SEND_EMAIL } from '../Actions/types'

const initialState = {
  name: '',
  email: '',
  description: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_EMAIL: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
