import React, { Component } from "react";
import "./style.css"
import API from "../../utils/API";
import cogoToast from "cogo-toast"

class SuggestedCaptions extends Component {

    state = {
        categories: [],
        imageID: 0,
        likes: 0,
        goldstar: "",
        likedBy: "",
        userID: "",
        goldStarGivenToParent: "",
        userRequests: ""
    }

    componentDidMount() {
        this.establishState()
        console.log(this.props.goldStarGiven)
    }

    establishState = () =>
        this.setState({
            likes: this.props.likes,
            goldstar: this.props.goldstar,
            likedBy: this.props.likedBy,
            usersRequests: this.props.userdata[0].myRequestedImages,
            goldStarGivenToParent: this.props.goldStarGiven
        })

    onClickGiveGoldStar = (parentID, userID) => {

        if (this.state.usersRequests.indexOf(parentID) > -1) {
            this.doTheGoldStar()
        } else {
            cogoToast.error("This is not your request")
        }
    }

    doTheGoldStar = () => {
        if (this.props.goldStarGiven === true) {
            console.log("You've already given a Gold Star to this request!")
        } else if (this.state.goldstar === true) {
            console.log("This caption has already been gold starred!")
        } else {
            this.setState({
                goldStarGivenToParent: true,
                goldstar: true
            }, () => {
                this.updateDBGoldStar()
                cogoToast.success("You've gold-starred this caption!")
            })
        }

    }






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

updateDBGoldStar = () => {
    this.updateDBGiveGoldStarToAuthor()
    this.updateDBGiveGoldStarToCard()
    this.updateDBGiveGoldStarToCaption()
}

updateDBGiveGoldStarToAuthor = () => {
    API.updateUserGoldStars(this.props.authorID)
}

updateDBGiveGoldStarToCard = () => {
    API.updateCardGoldStars(this.props.parentID)
}

updateDBGiveGoldStarToCaption = () => {
    API.updateCaptionGoldStars(this.props.id)
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
        likes: this.state.likes - 1,
        likedBy: newLikedBy
    }, () => {
        this.updateDB()
        cogoToast.warn("You unliked a caption")
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
        cogoToast.success("You liked a caption")
    })
}

render() {
    return (
        <div style = { { fontSize: '18px', background: 'lightgray', color: this.props.goldstar ? '#787D2E' : 'darkslategrey'}}>
            <div className="li">{this.props.suggestion} 
            <p>Likes: {this.props.likes}</p></div>
            <button className="btn-sm" onClick={() => this.onClickLikeSuggestion(this.props.userdata[0]._id)}>Vote</button> 
            <button className="btn-sm" onClick={() => this.onClickGiveGoldStar(this.props.parentID, this.props.userdata[0]._id)}>Give Goldstar</button>
            <hr />
        </div>
    );
}
}
export default SuggestedCaptions;

