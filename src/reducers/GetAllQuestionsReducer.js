import { FETCH_QUESTIONS_SUCCESS, 
  FETCH_QUESTIONS, 
  FETCH_QUESTIONS_FAILED } from "../type/TypeQuestion"

const initialState = {
  loading: false,
  allquestions:[],
  error:''
}

const GetAllQuestionsReducer=(state=initialState, action)=>{
  switch(action.type){
    case FETCH_QUESTIONS:
      return {
        ...state,
        loading:true
      }
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading:false,
        allquestions:action.payload
      }
    case FETCH_QUESTIONS_FAILED:
      return {
        ...state,
        loading:false,
        error: action.payload
      }
    default:
      return state
  }
}

export default GetAllQuestionsReducer
