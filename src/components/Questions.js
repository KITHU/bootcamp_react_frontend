import React,{Component} from 'react'
import {CircularProgress} from '@material-ui/core'
import {connect} from 'react-redux'
import { fetAllQuestions } from '../actions/ActionQuestions'

import {Paper} from '@material-ui/core'


class Questions extends Component{
  constructor(props){
    super(props)
    fetAllQuestions()
  }

  componentDidMount(){
    this.props.fetAllQuestions()
  }
  render(){
    console.log(this.props.allquestions)
    return (
      <div>
        {
          this.props.loading? <CircularProgress />:""
        }
      <Paper>hello</Paper>
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
