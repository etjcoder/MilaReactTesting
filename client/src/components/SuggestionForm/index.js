import React, { Component } from "react";
import "./style.css"
import { Input } from "../Form";
import API from "../../utils/API";

class SuggestionForm extends Component {

    state = {
        categories: [],
        imageID: this.props.id,
        caption: "",
        username: "",
        reference: "",
        parentID: this.props.id
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        console.log(this.state)

        API.saveCaptionSuggestion( this.state.imageID, {
            caption: this.state.caption,
            username: this.state.username,
            reference: this.state.reference,
            parentID: this.state.imageID
        })
        .then(res => console.log("Successfully saved your suggestion"))
        .catch(err => console.log(err))
    }


    onClickSubmitCaption() {
        console.log("Suggest a caption on caption id: " + this.props.id + " / " + this.state.id)
    }

    render() {
        return (
            <div className="card bg-dark text-white">
                <h4>Comment your Suggestion:</h4>
                <form>
                    <Input value={this.state.caption} onChange={this.handleInputChange} name="caption" placeholder="Write your caption here" />
                    <Input value={this.state.username} onChange={this.handleInputChange} name="username" placeholder="Username goes here" />
                    <Input value={this.state.reference} onChange={this.handleInputChange} name="reference" placeholder="Reference" />
                    <button onClick={this.handleFormSubmit}>Submit your suggestion</button>
                </form>
            </div>
        );
    }
}
export default SuggestionForm;