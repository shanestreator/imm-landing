import commaNumber from 'comma-number'

import { calcForItemTotal } from '../../Utils/Utils'

import {
  SET_CART,
  ADD_ITEM_TO_CART,
  UPDATE_CART_TOTAL,
  UPDATE_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  REMOVE_ALL_FROM_CART
} from '../Actions/types'

const initialState = {
  productsInCart: [],
  currentProduct: {},
  total: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CART: {
      return { ...state, productsInCart: action.payload }
    }
    case ADD_ITEM_TO_CART: {
      console.log('ADD_ITEM: ', action.payload)
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload],
        currentProduct: action.payload
      }
    }
    case UPDATE_QUANTITY: {
      return {
        ...state,
        productsInCart: state.productsInCart.map(product => {
          const { uniqueId, price, manualsPerPack } = product
          const newQuantity = action.payload.quantity

          if (uniqueId === action.payload.uniqueId) {
            product.total = commaNumber(
              calcForItemTotal(price, newQuantity, manualsPerPack)
            )

            product.quantity = newQuantity

            return product
          } else {
            return product
          }
        })
      }
    }
    case UPDATE_CART_TOTAL: {
      return { ...state, total: action.payload }
    }
    case REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        productsInCart: state.productsInCart.filter(item => {
          const { _id, uniqueId } = action.payload
          return item.uniqueId !== uniqueId
        })
      }
    }
    case REMOVE_ALL_FROM_CART: {
      return initialState
    }
    default: {
      return state
    }
  }
}
