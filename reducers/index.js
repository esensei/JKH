import {combineReducers} from 'redux'
import cartReducer from './cartReducer'
import menuReducer from './menuReducer'
import serviceReducer from './serviceReducer'
import alertReducer from './alertReducer'

export default rootReducer = combineReducers({
  cart: cartReducer, menu: menuReducer, service: serviceReducer, alerts: alertReducer
})
