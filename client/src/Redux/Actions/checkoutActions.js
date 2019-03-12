import axios from 'axios'

// Types
import {
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_SHIP_TO,
  SET_SHIP_TO,
  SET_SHIP_TO_IS_EMPTY,
  CLEAR_SHIP_TO
} from './types'

// Get ship to info from database
export const getShipTo = shippingId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/checkout/${shippingId}`)

    if (data.shipTo) {
      dispatch({ type: GET_SHIP_TO, payload: data.shipTo })
    }
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    })
  }
}

// Action
export const postShippingAddress = shippingData => ({
  type: SET_SHIP_TO,
  payload: shippingData
})

// User provides Ship To information
export const sendShippingAddress = shipTo => async dispatch => {
  try {
    const shippingId = localStorage.getItem('shippingId')

    // if no shippingId create a new shipTo isntance
    if (!shippingId) {
      const { data } = await axios.post('/api/checkout', shipTo)

      localStorage.setItem('shippingId', data.shipTo._id)

      dispatch(postShippingAddress({ id: data.shipTo._id, shipTo }))

      return dispatch({ type: CLEAR_ERRORS })
    }

    const { data } = await axios.get(`/api/checkout/${shippingId}`)
    // if shippingId exists update shipTo details
    if (shipTo !== data) {
      const { data } = await axios.put(`/api/checkout/${shippingId}`, shipTo)

      dispatch(postShippingAddress({ id: data.shippingId, shipTo }))

      return dispatch({ type: CLEAR_ERRORS })
    }
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    })
    dispatch({
      type: SET_SHIP_TO_IS_EMPTY,
      payload: true
    })
  }
}

// Clear reducer and state
export const clearShipTo = () => async dispatch => {
  try {
    dispatch({ type: CLEAR_SHIP_TO })
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    })
  }
}
