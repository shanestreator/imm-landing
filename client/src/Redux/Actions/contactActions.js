import axios from 'axios'

// Types
import { GET_ERRORS, SENT_EMAIL } from './types'

// Action
export const postEmail = data => ({
  type: SENT_EMAIL,
  payload: data
})

// User sends email to IMM
export const sendCustomerEmail = (emailData, history) => async dispatch => {
  try {
    const { data } = await axios.post('/api/contact', emailData)

    dispatch(postEmail(data))
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    })
  }
}
