                
import { combineReducers, createStore } from 'redux'
import counter from './reducers/countReducer'

// create a global store
const store = createStore(combineReducers({ counter }))
export default store