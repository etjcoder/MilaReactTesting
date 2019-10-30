import React, { Component } from "react";
import "./style.css"
import API from "../../utils/API";
import SuggestedCaptions from "../SuggestedCaptions"
import SuggestionForm from "../SuggestionForm"
import Image from 'react-image-resizer';
import InfiniteUsersReqCard from "../InfiniteUsersReqCard";

class RequestCard extends Component {

    state = {
        categories: [],
        id: this.props.id,
        showSuggestions: true,
        showSuggestionForm: true,
        suggestions: [],
        goldStarGiven: ""
    }

    componentDidMount() {
        this.getSuggestions(this.props.id)
    }

    getSuggestions = (id) =>
        API.getSuggestions(id)
            .then(res =>
                this.setState({
                    suggestions: res.data.suggestedCaptions,
                    goldStarGiven: this.props.goldStarGiven
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
                            <img className="card-image" style={{ width: 278, height: 260, marginTop: "10%" }} alt={this.props.id} src={this.props.imageSrc} />
                
                            <SuggestionForm id={this.props.id} userdata={this.props.userdata} />
                        </div>
                    </div>

                    <div class="back">
                        {/* <div id="caption-here"> */}
                        {/* <button onClick={() => this.onClickShowSuggestions()}>Show Suggestions</button> */}
                        {this.state.showSuggestions ?

                            <div className="ul" style={{ height: 300, overflow: 'auto' }}>
                                <InfiniteUsersReqCard goldStarGiven={this.props.goldStarGiven} suggestions={this.state.suggestions} userdata={this.props.userdata}/>
                            </div>




                            : null}
                        {this.state.showSuggestionForm ?
                            <div style={{ marginTop: "5%" }}><SuggestionForm rerender={this.getSuggestions} userdata={this.props.userdata} id={this.props.id} /> </div> : null}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default RequestCard;