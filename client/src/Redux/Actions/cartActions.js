// import axios from 'axios'

import {
  SET_CART,
  ADD_CART_ITEM,
  UPDATE_CART_ITEM,
  REMOVE_CART_ITEM
} from './types'

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

// Add an item to cart
export const addItemToCart = itemData => async dispatch => {
  try {
    // const res = await axios.post('/api/cart', itemData)
    // console.log('FRONT_END_ITEM: ', res.data)
    dispatch(postItem(itemData))

    // const { data: getItem } = await axios.get('/cart')
    // dispatch(getItem(getItem))
  } catch (error) {
    console.error(error)
  }
}

// Action
export const putItem = item => {
  return {
    type: UPDATE_CART_ITEM,
    payload: item
  }
}

// Add an item to cart
export const updateCartItem = itemData => async dispatch => {
  try {
    // const res = await axios.post('/api/cart', itemData)
    // console.log('UPDATE_CART_ITEM: ', itemData)
    dispatch(putItem(itemData))

    // const { data: getItem } = await axios.get('/cart')
    // dispatch(getItem(getItem))
  } catch (error) {
    console.error(error)
  }
}

// Action
export const deleteItem = itemId => {
  return {
    type: REMOVE_CART_ITEM,
    payload: itemId
  }
}

// Remove an item from cart
export const removeItemFromCart = itemId => async dispatch => {
  try {
    // const res = await axios.delete('/api/cart', itemId)

    dispatch(deleteItem(itemId))
  } catch (error) {
    console.error(error)
  }
}
