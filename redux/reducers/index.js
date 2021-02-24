import { combineReducers } from 'redux';
import actions from './actions';
import alert from './alert'

const rootReducer = combineReducers({
  actions, alert,
})

export default rootReducer;