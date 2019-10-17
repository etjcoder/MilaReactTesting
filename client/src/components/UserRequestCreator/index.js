import React, { Component } from "react";
import { Input } from "../Form";
import API from "../../utils/API"


class UserCaptionCreator extends Component {

    state = {
        imageURL: "",
        category: this.props.categories[0].category,
        description: "",
        tags: "",
        username: "",
        suggestedCaptions: []
    }

    componentDidMount() {
        // this.gatherCaptions();
        console.log(this.props.categories);
        // console.log(this.props.captions);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();

        var apiTags = this.state.tags;
        var lowerCaseTags = apiTags.toLowerCase();
        var splicedArr = lowerCaseTags.split(", ")
        console.log(splicedArr)

          API.saveCaptionRequest({
            imageURL: this.state.imageURL,
            category: this.state.category,
            description: this.state.description,
            username: this.state.username,
        })
        .then(res => console.log("Successfully added caption"))
        .catch(err => console.log)
    }

    

    render() {
        return (
            <div className="card bg-dark text-white">
                <form>
                    <h5>Input your Request for a Caption here</h5>
                    <Input value={this.state.imageURL} onChange={this.handleInputChange} name="imageURL" placeholder="Image URL goes here" />
                    {/* <Input value={this.state.category} onChange={this.handleInputChange} name="category" placeholder="Category goes here" /> */}
                    <select value={this.state.category} onChange={this.handleInputChange} name="category">

                        {this.props.categories.map(listedcategory => (
                           <option key={listedcategory._id} value={listedcategory.category}>{listedcategory.category}</option>
                        ))}

                    </select>
                    <Input value={this.state.username} onChange={this.handleInputChange} name="username" placeholder="Your name goes here" />
                    <Input value={this.state.description} onChange={this.handleInputChange} name="description" placeholder="Description of your photo goes here" />
                    {/* <Input value={this.state.lyric} onChange={this.handleInputchange} name="caption" placeholder="Is this a Lyric? (true or false)"/> */}
                    {/* <Input value={this.state.quote} onChange={this.handleInputchange} name="quote" placeholder="Is this a quote? (true or false)"/> */}
                    <Input value={this.state.tags} onChange={this.handleInputChange} name="tags" placeholder="Tags go here, separate with commas!" />
                    <button onClick={this.handleFormSubmit}>Submit your caption</button>
                </form>
            </div>
        )
    }
}

export default UserCaptionCreator