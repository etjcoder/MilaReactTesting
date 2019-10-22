import React, { Component } from 'react';
import fire from "../../config/Fire";
import './style.css'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  login = e => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
      console.log(error);
    })
  }

  signup = e => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        console.log(error)
      })
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <div className="login-form">
        <div id="login-welcome">
          Login or Sign up with MILA below.
      </div>
        <form>
          <br />
          <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
         <br />
          <br />
          <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
             <br />
          <br />
          <button type="submit" onClick={this.login} className="btn">Login</button>
          <button onClick={this.signup} style={{ marginLeft: '25px' }} className="btn btn-success">Signup</button>

        </form>
      </div>
    )
  }
}

export default LoginForm