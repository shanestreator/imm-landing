import { combineReducers } from 'redux'
import authReducer from './authReducer'
import cartReducer from './cartReducer'
import productReducer from './productReducer'
import contactReducer from './contactReducer'
import errorReducer from './errorReducer'

export default combineReducers({
  auth: authReducer,
  cart: cartReducer,
  product: productReducer,
  contact: contactReducer,
  errors: errorReducer
})
