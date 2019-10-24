import React, { Component } from "react";
import "./style.css"
import { Input } from "../Form";
import API from "../../utils/API";

class SuggestionForm extends Component {

    state = {
        caption: "",
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

       
        console.log("Working on caption suggestion into database...")

        API.saveCaptionSuggestion( this.props.id, {
            caption: this.state.caption,
            username: this.props.userdata[0].username,
            parentID: this.props.id
        })
        .then(res => console.log("Successfully saved your suggestion"))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="card bg-dark text-white">
                <h4>Comment your Suggestion:</h4>
                <form>
                    <Input value={this.state.caption} onChange={this.handleInputChange} name="caption" placeholder="Write your caption here" />
                    <button className="btn-sm btn-outline-warning" onClick={this.handleFormSubmit}>Submit your suggestion</button>
                </form>
            </div>
        );
    }
}
export default SuggestionForm;