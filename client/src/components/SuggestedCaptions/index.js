import React, { Component } from "react";
import "./style.css"
import API from "../../utils/API";

class SuggestedCaptions extends Component {

    state = {
        categories: [],
        imageID: 0,
        likes: 0,
        goldstar: false,
        likedBy: "",
        userID: "",
    }

    componentDidMount() {
        this.establishState()
    }

    establishState = () =>
        this.setState({
            likes: this.props.likes,
            goldstar: this.props.goldstar,
            likedBy: this.props.likedBy
        })


    onClickLikeSuggestion = (userID) => {


        if (this.state.likedBy.indexOf(userID) > -1) {
            this.decrementStatePrep(userID)

        } else {
            this.incrementState(userID)
        }

        
    }
    
    updateDB = () => {
        API.updateUserSuggestedCaption(this.props.id, {
            likes: this.state.likes,
            likedBy: this.state.likedBy,
            goldstar: this.state.goldstar
        }).then(res => console.log("Successfully registered like to DB"))
        .catch(err => console.log(err))
    }

   

    decrementStatePrep = (userID) => {
        var newStateArray = this.state.likedBy.slice();
        this.decrementStateSlice(newStateArray, userID);
    }

    decrementStateSlice = (newStateArr, userID) => {
        for (var i = newStateArr.length - 1; i >= 0; i--) {
            if (newStateArr[i] === userID) {
                newStateArr.splice(i, 1)
            }
        }
        this.decrementState(newStateArr)
    }

    decrementState = (newLikedBy) => {
        this.setState({
            likes: this.state.likes -1,
            likedBy: newLikedBy
        }, () => {
            this.updateDB()
        })
    }

    incrementState = (userID) => {
        var newStateArray = this.state.likedBy.slice();
        newStateArray.push(userID);

        this.setState({
            likes: this.props.likes + 1,
            likedBy: newStateArray
        }, () => {
            this.updateDB()
        })
    }

    render() {
        return (

            <div className="li">{this.props.suggestion} <button onClick={() => this.onClickLikeSuggestion(this.props.userdata[0]._id)}>Like</button></div>

        );
    }
}
export default SuggestedCaptions;