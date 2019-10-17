import React, { Component } from "react";
import "./style.css"
import API from "../../utils/API";
import SuggestedCaptions from "../SuggestedCaptions"
import SuggestionForm from "../SuggestionForm"

class RequestCard extends Component {

    state = {
        categories: [],
        id: this.props.id,
        showSuggestions: false,
        showSuggestionForm: false,
        suggestions: []
    }

    componentDidMount() {
        this.getSuggestions()
    }

    getSuggestions = () =>
        API.getSuggestions(this.props.id)
            .then(res =>
                console.log(res) 
                // this.setState({
                //     suggestions: res.data
                // })
                )

    onClickSuggestCaption() {
        if (this.state.showSuggestionForm === false) {
            this.setState({
                showSuggestionForm: true,
            })
        } else {
            this.setState({
                showSuggestionForm: false
            })
        }
    }

    onClickShowSuggestions() {
        if (this.state.showSuggestions === false) {
            this.setState({
                showSuggestions: true
            })
        } else {
            this.setState({
                showSuggestions: false
            })
        }
    }

    render() {
        return (
            <div>
                <div className="card col-6">
                    <img className="card-image" alt={this.props.id} src={this.props.imageSrc} />
                    <p>By: {this.props.username}</p>
                    <p>Category: {this.props.category}</p>
                    <p>Description: {this.props.description}</p>
                    <p>Current Suggestions: {this.props.suggestedCaptions.length}</p>
                    <p>Current Likes: {this.props.likes}</p>
                    <button onClick={() => this.onClickShowSuggestions()}>Show Suggestions</button>
                    {this.state.showSuggestions ? <ul class="list-group list-group-flush"><SuggestedCaptions suggestions={this.props.suggestedCaptions} /></ul> : null}
                    <button onClick={() => this.onClickSuggestCaption()}>Suggest a caption</button>
                    {this.state.showSuggestionForm ? <SuggestionForm id={this.props.id} /> : null}
                </div>
            </div>
        )
    }
}
export default RequestCard;