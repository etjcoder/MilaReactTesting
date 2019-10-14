import React, { Component } from "react";
import { Input } from "./Form";
import API from "../utils/API";

class AdminEditMila extends Component {

    state = {
        categories: [],
        captions: [],
        caption: "",
        category: "",
        reference: "",
        lyric: "",
        quote: "",
        originalAuthor: "",
        tags: ""
    }

    componentDidMount() {
        console.log("Component Mounted");
        console.log(this.props.captions);
    }




    render() {
        return (
            <h1> Edit Mila</h1>
        )
    }
}

export default AdminEditMila