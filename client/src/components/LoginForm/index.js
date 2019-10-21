import React from 'react'
import './style.css'

function LoginForm () {
  return (
    <div className="login-form">
      <div id="login-welcome">
        Login or Sign up with MILA below.
      </div>
      <form>
        <br/>
        <input type="text" title="username" placeholder=" Username"/>
        <br/>
        <br/>
        <input type="password" title="username" placeholder=" Password"/>
        <br/>
        <br/>
        <button type="submit" className="btn">Login</button>
        <button id="forgot">Forgot Username?</button>
      </form>
    </div>
  )
}

export default LoginForm