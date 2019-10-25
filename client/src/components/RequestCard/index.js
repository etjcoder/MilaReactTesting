import React, { Component } from "react";
import "./style.css"
import API from "../../utils/API";
import SuggestedCaptions from "../SuggestedCaptions"
import SuggestionForm from "../SuggestionForm"
import Image from 'react-image-resizer'

class RequestCard extends Component {

    state = {
        categories: [],
        id: this.props.id,
        showSuggestions: true,
        showSuggestionForm: true,
        suggestions: []
    }

    componentDidMount() {
        this.getSuggestions(this.props.id)
    }

    getSuggestions = (id) =>
        API.getSuggestions(id)
            .then(res =>
                this.setState({
                    suggestions: res.data.suggestedCaptions
                })
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
            <div id="flipcard">
                <div class="container">
                    <div class="front">
                            <div id="image-here">
                            <img className="card-image" style={{ width: 280, height: 280, marginTop: "10%"}} alt={this.props.id} src={this.props.imageSrc} />
                            <p>Current Likes: {this.props.likes}</p>
                            <SuggestionForm id={this.props.id} userdata={this.props.userdata}/>
                            </div>
                    </div>

                    <div class="back">
                            {/* <div id="caption-here"> */}
                            {/* <button onClick={() => this.onClickShowSuggestions()}>Show Suggestions</button> */}
                            {this.state.showSuggestions ?

                                <div class="ul">

                                    {this.state.suggestions.map(suggestedCap => (
                                        <SuggestedCaptions
                                            key={suggestedCap._id}
                                            id={suggestedCap._id}
                                            parentID={suggestedCap.parentID}
                                            suggestion={suggestedCap.caption}
                                            username={suggestedCap.username}
                                            reference={suggestedCap.reference}
                                            lyric={suggestedCap.lyric}
                                            quote={suggestedCap.quote}
                                            originalAuthor={suggestedCap.originalAuthor}
                                            likes={suggestedCap.likes}
                                            likedBy={suggestedCap.likedBy}
                                            goldstar={suggestedCap.goldstar}
                                            userdata={this.props.userdata}
                                        />
                                    ))}


                                </div> : null}
                            {this.state.showSuggestionForm ? 
                            <div style={{marginTop: "50%"}}><SuggestionForm rerender={this.getSuggestions} userdata={this.props.userdata} id={this.props.id} /> </div>: null}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default RequestCard;