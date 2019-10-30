import React, { Component } from "react";
import { Input } from "../Form";
import API from "../../utils/API";
import {render} from 'react-dom';
import UserSearchResults from "../UserSearchResults";
import "./style.css";
import cogoToast from "cogo-toast"

class UserSearchOptions extends Component {
    state = {
        keyword: "",
        category: "",
        imageKeywords: [],
        searchResults: [],
        showResults: false,
    }

    componentDidMount() {
        console.log(this.props.categories);
    }
    searchKeyword = (word) => {
        API.searchByKeyword(word)
            .then(res =>
                this.setState({
                    searchResults: res.data,
                },
                () => {
                    // console.log(this.state.searchResults.length)
                    if (this.state.searchResults.length < 1) {
                        cogoToast.warn("No results found!")
                    }
                })
            )
    }
    searchCategory = (category) => {
        API.searchByCategory(category)
            .then(res =>
                this.setState({
                    searchResults: res.data,
                },
                () => {
                    // console.log(this.state.searchResults.length)
                    if (this.state.searchResults.length < 1) {
                        cogoToast.warn("No results found!")
                    }
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

    emptySearch = () => {
        this.setState({
            searchResults: []
        })
    }

    render() {
        return (
            <div className="card" id="searchCard">
            <h1 id="userHead">Welcome to the hub.</h1>
            <p id="userDashBlurb">Search the Mila caption database below. If you'd like to open your photo
            to suggestions from other users, upload it to the community feed! </p>

            <br/>
                <h4 id="searchHeader">Find a Caption</h4>              
                    <form>
                        <input class="search_input" value={this.state.keyword} onChange={this.handleInputChange} name="keyword" id="searchEntry" placeholder="Search by Keyword..." />
                        <br />
                        <div class="container" id="searchContain"><br />
                            <button id="searchBtn1" onClick={this.handleKeywordSearchSubmit} >
                                Search
                   <div class="fill"></div>
                            </button>
                        </div>
                    </form>
                    <br/>
                    <form>
                        <h5 id="categoryHeader">Search by Category</h5>
                        <select id="catDrop" value={this.state.category} onChange={this.handleInputChange} name="category">
                            {this.props.categories.map(listedcategory => (
                                <option key={listedcategory._id} value={listedcategory.category}>{listedcategory.category}</option>
                            ))}
                        </select>{' '}
                        <br/>
                        <div class="container" id="searchContain">
                            <br />
                            <button id="searchBtn" onClick={this.handleCategorySearchSubmit}>
                                Search by Category
                           <div class="fill"></div>
                            </button>
                        </div>
                    </form>
                { this.state.searchResults.length > 0 ? <UserSearchResults empty={this.emptySearch} results={this.state.searchResults} />  : null }
              
            </div>
        )
    }
}
export default UserSearchOptions