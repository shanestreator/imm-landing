import { combineReducers } from 'redux'
import authReducer from './authReducer'
import cartReducer from './cartReducer'
import productReducer from './productReducer'
import errorReducer from './errorReducer'

export default combineReducers({
  auth: authReducer,
  cart: cartReducer,
  product: productReducer,
  errors: errorReducer
})
