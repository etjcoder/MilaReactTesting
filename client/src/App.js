import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/";
import Home from "./pages/Home";
import AdminDash from "./pages/AdminDash";
import UserDash from "./pages/UserDash";
// import Test from "./pages/Test";


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
