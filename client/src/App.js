import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import NoMatch from "./pages/NoMatch";
import SavedBooks from "./pages/SavedBooks";
import Nav from "./components/Nav/";

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
    console.log("New App loaded");
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Books} />
            <Route exact path="/search" component={Books} />
            <Route exact path="/saved" component={SavedBooks} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }


export default App;
