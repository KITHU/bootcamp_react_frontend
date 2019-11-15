import React,{Component} from 'react'
import {connect} from 'react-redux'
import { fetAllQuestions } from '../actions/ActionQuestions'

import {CircularProgress, Container, Grid, Paper} from '@material-ui/core'



class Questions extends Component{
  constructor(props){
    super(props)
    fetAllQuestions()
  }

  componentDidMount(){
    this.props.fetAllQuestions()
  }
  render(){
    return (
      <div className="container">
          {
            this.props.loading?
            <div className="valign-wrapper"> 
              <div className="progress">
                <div className="indeterminate"></div>
              </div>
            </div>:""
          }
          {
            this.props.allquestions.map(q=>
              <>
              <div className="section">
                <h5>{q.title}</h5>
                <p>{q.description}</p>
              </div>
              <div className="divider"/>
              </>
            )
          }
      </div>
    )
  }
}

const mapStateToProps=state=>{
  return{
    allquestions: state.getallquestions.allquestions,
    error:state.getallquestions.error,
    loading:state.getallquestions.loading
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    fetAllQuestions:()=>dispatch(fetAllQuestions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions)
