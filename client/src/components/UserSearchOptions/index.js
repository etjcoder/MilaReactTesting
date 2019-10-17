import React, { Component } from "react";
import { Input } from "../Form";
import API from "../../utils/API";
import UserSearchResults from "../UserSearchResults"

class UserSearchOptions extends Component {

    state = {
        keyword: "",
        category: "Autumn",
        imageKeywords: [],
        searchResults: [],
        showResults: false
    }

    componentDidMount() {

        console.log(this.props.categories);
    }

    searchKeyword = (word) => {
        API.searchByKeyword(word)
            .then(res =>
                this.setState({
                    searchResults: res.data,
                })
            )
    }

    searchCategory = (category) => {
        API.searchByCategory(category)
            .then(res =>
                this.setState({
                    searchResults: res.data,
                })
            )
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

    }

    handleKeywordSearchSubmit = event => {
        event.preventDefault();
        this.searchKeyword(this.state.keyword)
        console.log("You're searching for: " + this.state.keyword)
    }

    handleCategorySearchSubmit = event => {
        event.preventDefault();
        this.searchCategory(this.state.category)
        console.log("You're searching for: " + this.state.category)
    }

    render() {
        return (
            <div className="card bg-dark text-white">
                <form>
                    <h4>Search By Keyword</h4>
                    <Input value={this.state.keyword} onChange={this.handleInputChange} name="keyword" placeholder="Enter search terms here" />
                    <button onClick={this.handleKeywordSearchSubmit}>Search by Tags</button>
                </form>
                <br />
                <form>
                    <h4>Search By Category</h4>
                    <select value={this.state.category} onChange={this.handleInputChange} name="category">
                        {this.props.categories.map(listedcategory => (
                            <option key={listedcategory._id} value={listedcategory.category}>{listedcategory.category}</option>
                        ))}
                    </select>
                    <button onClick={this.handleCategorySearchSubmit}>Search by Category</button>
                </form>
                <br/>
                <button>Search By Imagereader (Coming soon!)</button>
                <UserSearchResults results={this.state.searchResults}/>
            </div>
        )
    }

}

export default UserSearchOptions
