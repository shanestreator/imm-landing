import { GET_ALL_QUESTIONS } from '../../Actions/types'

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_QUESTIONS: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
