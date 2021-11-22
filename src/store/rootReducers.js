import { combineReducers, createStore } from 'redux'
import appReducer from './appReducer'
import newsFilter from './newsFilter'

const reducers = {
	appReducer,
	newsFilter
}

const reducer = combineReducers(reducers)
const rootReducer = createStore(reducer)

export default rootReducer