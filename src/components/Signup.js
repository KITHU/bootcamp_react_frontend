import React, { Component } from 'react'


export default class Signup extends Component {
  constructor(){
    super()
    this.state={
      username:"",
      email:"",
      password:""
    }
  }
  validate=(e)=>{
    e.preventDefault()
    console.log(this.state.email)
    console.log(this.state.password)
    console.log(this.state.username)
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
                                  <span className="card-title">CREATE ACCOUNT</span>

                                  <div className="input-field">
                                      <i className="material-icons prefix">user</i>
                                      <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                                      <label htmlFor="email">UserName</label>
                                  </div>

                                  <div className="input-field">
                                      <i className="material-icons prefix">security</i>
                                      <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                                      <label htmlFor="email">Email</label>
                                  </div>

                                  <div className="input-field" >
                                      <i className="material-icons prefix">password</i>
                                      <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                                      <label htmlFor="password">Password</label>
                                  </div>

                                  <button className="btn pulse waves-effect waves-light" type="submit" onClick={this.validate}name="action">Sign Up</button>
                              </div>
                              <div className="card-footer">already have an account, Sign in</div>
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

