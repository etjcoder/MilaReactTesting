import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
import NoMatch from "./pages/NoMatch";
// import SavedBooks from "./pages/SavedBooks";
import Nav from "./components/Nav/";
import Home from "./pages/Home";
import AdminDash from "./pages/AdminDash";
import UserDash from "./pages/UserDash";
// import Test from "./pages/Test";

// class App extends Component {
  // state = {
  //   books: [],
  //   title: "",
  //   author: "",
  //   image: "",
  //   description: "",
  //   link: "",
  // }


  // render() {

function App () {
    console.log("Mira App loaded");
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={UserDash} />
            <Route exact path="/admin" component={AdminDash} />
            {/* <Route exact path="/test" component={Test} /> */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }


export default App;
