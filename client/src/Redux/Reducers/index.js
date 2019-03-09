import { combineReducers } from 'redux'
import orderReducer from './Admin/orderReducer'
import questionReducer from './Admin/questionReducer'

import authReducer from './authReducer'
import cartReducer from './cartReducer'
import productReducer from './productReducer'
import contactReducer from './contactReducer'
import checkoutReducer from './checkoutReducer'
import errorReducer from './errorReducer'

const adminReducer = combineReducers({
  orders: orderReducer,
  questions: questionReducer
})

export default combineReducers({
  admin: adminReducer,
  auth: authReducer,
  cart: cartReducer,
  product: productReducer,
  contact: contactReducer,
  checkout: checkoutReducer,
  errors: errorReducer
})
