import Axios from 'axios'
import {FETCH_QUESTIONS, 
  FETCH_QUESTIONS_SUCCESS, 
  FETCH_QUESTIONS_FAILED} from '../type/TypeQuestion'


const url = "https://stackoverflow-lite-apiv1.herokuapp.com/api/v1/questions"
const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NzM2NDc3NjAsIm5iZiI6MTU3MzY0Nzc2MCwianRpIjoiMDQ1YjMxMTQtM2FlNy00NGY5LTlmOGUtM2U0NWRlZmE5OGFiIiwiaWRlbnRpdHkiOjQwLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.9TvHvh7En_2Z6GWhcv2PE2Sl2CZzJzv8dPI03T-v-cM"
const config = {
  headers: {
    Authorization: token
  }
}

export const fetchQuestions=()=>{
  return {
    type: FETCH_QUESTIONS
  }
}

export const fetchQuestionsSuccess=(data)=>{
  return {
    type: FETCH_QUESTIONS_SUCCESS,
    payload: data
  }
}

export const fetchQuestionsFailed=(data)=>{
  return {
    type: FETCH_QUESTIONS_FAILED,
    payload: data
  }
}

export const fetAllQuestions=()=>{
  console.log("clicked")
  return function(dispatch){
    dispatch(fetchQuestions())
    Axios.get(url,config)
    .then(res=>{
      console.log("dataaaaaa")
      dispatch(fetchQuestionsSuccess(res.data))
    })
    .catch(err=>{
      console.log("errroooor")
      dispatch(fetchQuestionsFailed(err.data))
    })
  }
}
