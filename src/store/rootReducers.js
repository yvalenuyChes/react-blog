import { combineReducers, createStore } from 'redux'
import appReducer from './appReducer'

const reducers = {
	appReducer
}

const reducer = combineReducers(reducers)
const rootReducer = createStore(reducer)

export default rootReducer