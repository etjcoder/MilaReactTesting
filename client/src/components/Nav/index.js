import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

class Nav extends Component {

  state = {
    image: ""
  }

  componentDidMount = () => {
    this.getUserData()
  }

  getUserData = () => {
    var userID = this.props.user.uid

    API.getUserData(userID)
      .then(res =>
        this.setState({
          image: res.data[0].image
        })
      )
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/">
          M I L A
      </a>

        {/* <a href="/user" className="navbar-text ml-auto"> View User Dash/  </a> */}
        {/* <a href="/admin" className="navbar-text">  View Admin Dash </a> */}
        <div class="avatar ml-auto">
        {/* {this.state.image ? <img alt="" class="card-image" src={this.state.image} /> : null } */}
        
        { this.state.image ? <img alt="profilePic" class="carrd-image" style={{height: '45px', width: '45px'}} src={this.state.image} /> :
        <img alt="profilePic" class="card-image" style={{height: '45px', width:'45px'}}src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>}
        </div>
      </nav>
    );
  }
}

export default Nav;
