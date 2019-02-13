import { combineReducers } from 'redux'
import adminReducer from './adminReducer'
import cartReducer from './cartReducer'
import itemReducer from './itemReducer'

export default combineReducers({
  admin: adminReducer,
  cart: cartReducer,
  item: itemReducer
})
