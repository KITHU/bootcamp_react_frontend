import React, { Component } from 'react'


export default class Signin extends Component {
  constructor(){
    super()
    this.state={
      email:"",
      password:""
    }
  }
  validate=(e)=>{
    e.preventDefault()
    console.log(this.state.email)
    console.log(this.state.password)
   
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
              <form>
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                          <div className="card center-align mg">
                              <div className="card-content">
                                  <span className="card-title">Sign In</span>
                                  <div className="input-field">
                                      <i className="material-icons prefix">security</i>
                                      <input name="email" type="email" onChange={this.handleChange} value={this.state.email}/>
                                      <label htmlFor="email">Email</label>
                                  </div>

                                  <div className="input-field" >
                                      <i className="material-icons prefix">password</i>
                                      <input name="password" type="password" onChange={this.handleChange} value={this.state.password}/>
                                      <label htmlFor="password">Password</label>
                                  </div>

                                  <button className="btn pulse waves-effect waves-light" type="submit" onClick={this.validate}>Login</button>
                              </div>
                              <div className="card-footer">dont have an acount, Sign Up</div>
                            </div>
                          </div>
                    </div>
              </form>  
          </div>
        </div>
      </div>
    )
  }
}

