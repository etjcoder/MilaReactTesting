import React, { Component } from "react";
import "./style.css"
import API from "../../utils/API";
import SuggestedCaptions from "../SuggestedCaptions"
import SuggestionForm from "../SuggestionForm"
import Image from 'react-image-resizer';
import InfiniteUsersReqCard from "../InfiniteUsersReqCard";

class RequestCardDash extends Component {

    state = {
        categories: [],
        id: this.props.card._id,
        showSuggestions: true,
        showSuggestionForm: true,
        suggestions: [],
        goldStarGiven: "",
        card: "not focused",
        cardFront: true
    }

    componentDidMount() {
        this.getSuggestions(this.props.card._id)
    }

    componentDidUpdate() {
        this.getSuggestions(this.props.card._id)
    }

    getSuggestions = (id) =>
        API.getSuggestions(id)
            .then(res =>
                this.setState({
                    suggestions: res.data.suggestedCaptions,
                    goldStarGiven: this.props.card.goldStarGiven
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



    onClickFlipCard = () => {
        if (this.state.cardFront === true) {
            this.setState({
                cardFront: false
            })
        } else {
            this.setState({
                cardFront: true
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
                <div id="flipcard2" ref="flippercard">
                    <div class="container">
                        { this.state.cardFront ?  
                        <div class="front">
                            <div id="image-here">
                            <img className="card-image" style={{ width: 350, height: 335, marginTop: "10%", border: "17px solid white", borderBottom: "30px solid white"}} alt={this.props.card._id} src={this.props.card.imageURL} />
                            
                                <SuggestionForm id={this.props.card._id} flipCard={this.onClickFlipCard} userdata={this.props.userdata} />
                            </div>
                        </div>

                        :
                        <div class="back">
                            {/* <div id="caption-here"> */}
                            {/* <button onClick={() => this.onClickShowSuggestions()}>Show Suggestions</button> */}
                            {this.state.showSuggestions ?

                                <div className="ul" style={{ height: 300, overflow: 'auto' }}>
                                    <InfiniteUsersReqCard goldStarGiven={this.props.card.goldStarGiven} suggestions={this.state.suggestions} userdata={this.props.userdata} />
                                </div>




                                : null}
                            {this.state.showSuggestionForm ?
                                <div style={{ marginTop: "5%" }}><SuggestionForm flipCard={this.onClickFlipCard} rerender={this.getSuggestions} userdata={this.props.userdata} id={this.props.card._id} /> </div> : null}
                            {/* </div> */}
                        </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default RequestCardDash;