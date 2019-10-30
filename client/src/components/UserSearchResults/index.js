import React, { Component } from "react";
import { Input } from "../Form";
import API from "../../utils/API";
import SearchResult from "../SearchResult"
import "./style.css";
import cogoToast from 'cogo-toast';


class UserSearchResults extends Component {

    state = {
        categories: [],
        captions: [],
        caption: "",
        category: "",
        reference: "",
        lyric: "",
        quote: "",
        originalAuthor: "",
        tags: "",
        editModalShown: false,
        editUserData: "",
        stringTags: ""
    }

    componentDidMount() {
        console.log("Component Mounted");
        console.log(this.props.captions);
        
    }

    render() {
        return (
            <div className="card" id="searchResults">
                        {this.props.results.map(result => (
                        <SearchResult key={result._id} author={result.author} caption={result.caption} id={result._id} category={result.category} reference={result.reference} />
                       ))}
                       <button id="closeBtn">X</button>

            </div>
        )
    }
}

export default UserSearchResults