import axios from 'axios'

// Types
import { GET_ERRORS, SEND_EMAIL } from './types'

// Action
export const postEmail = () => ({
  type: SEND_EMAIL,
  payload: {}
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
  axios
    .post('/api/contact', userData)
    .then(res =>
      
    )

}
