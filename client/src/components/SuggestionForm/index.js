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

        API.saveCaptionSuggestion(this.props.id, {
            caption: this.state.caption,
            username: this.props.userdata[0].username,
            parentID: this.props.id,
            authorID: this.props.userdata[0]._id
        })
            .then(res => this.props.rerender(this.props.id))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div class="input-group">
                        <span className="input-group-btn"><button className="btn btn-light" onClick={this.props.flipCard}> ↻ </button></span>
                        <input value={this.state.caption} onChange={this.handleInputChange} name="caption" placeholder="Write your caption here" />
                        <span className="input-group-btn"><button className="btn btn-light" onClick={this.handleFormSubmit}> ⮑ </button></span>
            </div>
        );
    }
}
export default SuggestionForm;