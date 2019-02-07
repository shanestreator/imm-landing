import axios from 'axios'

import { SET_CART, ADD_CART_ITEM, REMOVE_CART_ITEM } from '../Actions/types'

// Action
export const getItem = itemData => {
  return {
    type: SET_CART,
    payload: itemData
  }
}

// Action
export const postItem = item => {
  return {
    type: ADD_CART_ITEM,
    payload: item
  }
}

export const testAction = () => async dispatch => {
  try {
    console.log('TEST_ACTION')
    const res = await axios.get('/api/cart/test')
    console.log('FRONT_END_ITEM: ', res)
  } catch (error) {
    console.log('>>>ERRORING_OUT_HERE<<<: ', error)
  }
}

// Add an item to cart
export const addItemToCart = itemData => async dispatch => {
  try {
    const res = await axios.post('/api/cart', itemData)
    console.log('FRONT_END_ITEM: ', res.data)
    dispatch(postItem(res.data))

    // const { data: getItem } = await axios.get('/cart')
    // dispatch(getItem(getItem))
  } catch (error) {
    console.error(error)
  }
}
