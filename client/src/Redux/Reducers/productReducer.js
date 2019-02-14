import {
  GET_ONE_PRODUCT,
  GET_ALL_PRODUCTS,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT
} from '../Actions/types'

const initialState = {
  allProducts: [],
  currentProduct: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ONE_PRODUCT: {
      return { ...state, currentProduct: action.payload }
    }
    case GET_ALL_PRODUCTS: {
      return { ...state, allProducts: action.payload }
    }
    case ADD_PRODUCT: {
      return { ...state, allProducts: [...state.allProducts, action.payload] }
    }
    case UPDATE_PRODUCT: {
      return {
        ...state,
        allProducts: state.allProducts.map(product => {
          if (product._id === action.payload._id) {
            return action.payload
          } else {
            return product
          }
        })
      }
    }
    case DELETE_PRODUCT: {
      return {
        ...state,
        allProducts: state.allProducts.filter(product => {
          return product._id !== action.payload
        })
      }
    }
    default: {
      return state
    }
  }
}
