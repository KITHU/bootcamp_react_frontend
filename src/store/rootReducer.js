import {combineReducers} from 'redux'
import GetAllQuestionsReducer from '../reducers/GetAllQuestionsReducer'


const rootReducer = combineReducers({
  getallquestions: GetAllQuestionsReducer
})

export default rootReducer