import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import AdminDash from "./pages/AdminDash";
import UserDash from "./pages/UserDash";
import LoginRegister from "./pages/LoginRegister";
import fire from "./config/Fire"

// import Test from "./pages/Test";


class App extends Component {

  constructor() {
    super() 
    this.state = {
      user: '',
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem('user', user.uid)
      } else {
        // localStorage.removeItem('user')
      }
    });
  }

  render() {
    return (
      // <Router>
        <div>
          {/* <Switch> */}
            { this.state.user ? <UserDash user={this.state.user}/> : <Home />}
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route exact path="/user" component={UserDash} /> */}
            {/* <Route exact path="/admin" component={AdminDash} /> */}
            {/* <Route exact path="/test" component={Test} /> */}
            {/* <Route component={NoMatch} /> */}
          {/* </Switch> */}
        </div>
  // </Router>
    );
  }


}
export default App;
