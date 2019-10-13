import React, { Container } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/";
import Home from "./pages/Home";
import AdminDash from "./pages/AdminDash";
import UserDash from "./pages/UserDash";


class Test extends Container {

    render() {
        return (
            <div>
                <h1> Hello this is the test page</h1>
            </div>
        )
    }
}




export default Test;