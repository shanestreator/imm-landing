import {
  SET_CART,
  ADD_ITEM_TO_CART,
  UPDATE_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  REMOVE_ALL_FROM_CART
} from './types'

// Action
export const getAllItems = () => {
  return {
    type: SET_CART
  }
}

// Get all products in cart
export const getAllCartItems = () => async dispatch => {
  try {
    dispatch(getAllItems())
  } catch (error) {
    console.log('ERROR: ', error)
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
    // dispatch(getAllProducts())
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
    dispatch(putItem(quantityObj))
  } catch (error) {
    console.error(error)
  }
}

// --------------------------- DELETE --------------------------- //

// Action
export const deleteItem = prodId => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: prodId
  }
}

// Remove an item from cart
export const removeItemFromCart = prodId => async dispatch => {
  try {
    // itemIdInfo is an object that contains product id and a unique id
    dispatch(deleteItem(prodId))
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
    // Sets all of the cartReducer's props to initail state
    dispatch(clearCart())
  } catch (error) {
    console.error(error)
  }
}
