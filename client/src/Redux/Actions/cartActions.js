// import axios from 'axios'

import { getAllProducts } from './productActions'

import {
  SET_CART,
  ADD_ITEM_TO_CART,
  UPDATE_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  REMOVE_ALL_FROM_CART
} from './types'

// Action
export const getItem = itemData => {
  return {
    type: SET_CART,
    payload: itemData
  }
}

// --------------------------- ADD ITEM --------------------------- //

// Action
export const postItem = item => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item
  }
}

// Add an item to cart
export const addItemToCart = itemData => async dispatch => {
  try {
    dispatch(postItem(itemData))
    dispatch(getAllProducts())
  } catch (error) {
    console.error(error)
  }
}

// --------------------------- UPDATE QUANTITY --------------------------- //

// Action
export const putItem = quantityObj => {
  return {
    type: UPDATE_QUANTITY,
    payload: quantityObj
  }
}

// Add an item to cart
export const updateCartItem = quantityObj => async dispatch => {
  try {
    console.log('cart_action: ', quantityObj)
    dispatch(putItem(quantityObj))
  } catch (error) {
    console.error(error)
  }
}

// --------------------------- DELETE --------------------------- //

// Action
export const deleteItem = itemIdInfo => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: itemIdInfo
  }
}

// Remove an item from cart
export const removeItemFromCart = itemIdInfo => async dispatch => {
  try {
    // itemIdInfo is an object that contains product id and a unique id
    dispatch(deleteItem(itemIdInfo))
  } catch (error) {
    console.error(error)
  }
}

// --------------------------- DELETE ALL --------------------------- //

// Action
export const clearCart = () => {
  return {
    type: REMOVE_ALL_FROM_CART
  }
}

// Remove an item from cart
export const removeAllFromCart = () => async dispatch => {
  try {
    console.log('!!!!! ----- REMOVE_ALL_FROM_CART ----- !!!!!')
    // Sets all of the cartReducer's props to initail state
    dispatch(clearCart())
  } catch (error) {
    console.error(error)
  }
}
