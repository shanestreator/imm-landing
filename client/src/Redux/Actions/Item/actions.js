// import axios from 'axios'

import { SET_ITEM } from './types'

// Action
export const setItem = itemData => {
  return {
    type: SET_ITEM,
    payload: itemData
  }
}

// Add an item to cart
export const addItem = itemData => async dispatch => {
  try {
    dispatch(setItem(itemData))
  } catch (error) {
    console.error(error)
  }
}
