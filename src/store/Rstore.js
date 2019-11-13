import {createStore, applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'

const thk = applyMiddleware(thunk)

const store = createStore(rootReducer, thk)

export default store