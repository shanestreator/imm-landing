import axios from 'axios'

import { GET_ALL_ORDERS } from '../types'

// ---------------------------------- GET ALL ---------------------------------- //

// Action
export const fetchOrders = allOrders => {
  return {
    type: GET_ALL_ORDERS,
    payload: allOrders
  }
}

// Get all items from database
export const getAllOrders = () => async dispatch => {
  try {
    const { data: allOrders } = await axios.get('/admin/orders')

    dispatch(fetchOrders(allOrders))
  } catch (error) {
    console.error(error)
  }
}
