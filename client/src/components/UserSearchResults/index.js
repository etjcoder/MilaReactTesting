import React, { Component } from "react";
import { Input } from "../Form";
import API from "../../utils/API";
import SearchResult from "../SearchResult"

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
            <div className="card bg-dark text-white">
                <h5>Search Results Below</h5>
                <div className="row">
                    <div className="card col-12 text-dark">
                        {this.props.results.map(result => (
                            <SearchResult key={result._id}
                                author={result.author}
                                caption={result.caption}
                                id={result._id}
                                category={result.category}
                                reference={result.reference}
                                lyric={result.lyric}
                                quote={result.quote}
                                originalAuthor={result.originalAuthor}
                                tags={JSON.stringify(result.tags)}
                                comments={result.comments}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default UserSearchResults