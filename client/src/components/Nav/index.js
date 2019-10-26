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

        <div class="avatar ml-auto">
        {/* {this.state.image ? <img alt="" class="card-image" src={this.state.image} /> : null } */}
        <img alt="profilePic" class="card-image" src="https://picsum.photos/id/141/45/45"/>
        </div>
      </nav>
    );
  }
}

export default Nav;
