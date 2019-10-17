import React, {Component} from "react";
import "./style.css"
import API from "../../utils/API";

class SuggestedCaptions extends Component {

    state = {
        categories: [],
        imageID: 0,
        likes: 0,
        goldstar: false
    }

    componentDidMount(){
        this.establishState()
    }

    establishState = () => 
        this.setState({
           likes: this.props.likes,
           goldstar: this.props.goldstar 
        })


    onClickLikeSuggestion() {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    render() {
        return (
            <div>
                <li>{this.props.suggestion} by: {this.props.username} | likes: {this.state.likes} <button onClick={() => this.onClickLikeSuggestion()}>Like</button></li>
            </div>
        );
    }
}
export default SuggestedCaptions;