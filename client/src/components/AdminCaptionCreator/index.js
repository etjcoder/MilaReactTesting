import React, { Component } from "react";
import ReactDom from "react-dom"
import { Input } from "../Form";
import API from "../../utils/API"
import cogoToast from 'cogo-toast'
import "./style.css"


class AdminCaptionCreator extends Component {

    state = {
        caption: "",
        category: this.props.categories[0].category,
        author: "Mila",
        reference: "",
        lyric: "",
        quote: "",
        originalAuthor: "",
        tags: "",
        categories: []
    }

    componentDidMount() {
        // this.gatherCaptions();
        console.log(this.props.categories);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    testState = () => {
        console.log(this.state.books)
    }


    handleFormSubmit = event => {
        event.preventDefault();

        var apiTags = this.state.tags;
        var lowerCaseTags = apiTags.toLowerCase();
        var splicedArr = lowerCaseTags.split(", ")
        console.log(splicedArr)

        API.saveCaption({
            caption: this.state.caption,
            category: this.state.category,
            author: this.state.author,
            reference: this.state.reference,
            originalAuthor: this.state.originalAuthor,
            tags: splicedArr
        })
            .then(res =>
                cogoToast.success("Your caption was saved!"))
            .catch(err => console.log)
    }



    render() {
        return (
            <div className="card" id="admin-createCard">
                <form>
                    <h5 id="admin-requestHead">Admin Caption Creator</h5>
                    <br />
                    <Input className="caption-create-input" value={this.state.caption} onChange={this.handleInputChange} name="caption" placeholder="Caption goes here" />
                    {/* <Input value={this.state.category} onChange={this.handleInputChange} name="category" placeholder="Category goes here" /> */}
                    <br />
                    <select id="catDrop3" value={this.state.category} onChange={this.handleInputChange} name="category">

                        {this.props.categories.map(listedcategory => (
                            <option key={listedcategory._id} value={listedcategory.category}>{listedcategory.category}</option>
                        ))}

                    </select>
                    <br />
                    <Input className="caption-create-input" value={this.state.reference} onChange={this.handleInputChange} name="reference" placeholder="Caption's reference goes here" />
                    <br />
                    {/* <Input value={this.state.lyric} onChange={this.handleInputchange} name="caption" placeholder="Is this a Lyric? (true or false)"/> */}
                    {/* <Input value={this.state.quote} onChange={this.handleInputchange} name="quote" placeholder="Is this a quote? (true or false)"/> */}
                    <Input className="caption-create-input" value={this.state.tags} onChange={this.handleInputChange} name="tags" placeholder="Tags go here, separate with commas!" />
                    <br />
                    <button id="admin-createCaptionBtn" onClick={this.handleFormSubmit}>Submit your caption</button>
                </form>
            </div>
        )
    }
}

export default AdminCaptionCreator