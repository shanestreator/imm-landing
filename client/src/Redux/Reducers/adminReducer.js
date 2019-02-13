import { SET_ADMIN_USER } from '../Actions/Admin/types'

const initialState = {
  id: '',
  name: '',
  email: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ADMIN_USER: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
