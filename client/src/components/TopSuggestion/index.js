import React, { Component } from "react";
import "./style.css"
import API from "../../utils/API";
import cogoToast from "cogo-toast"

class TopSuggestion extends Component {

    state = {
        caption: ""
    }

    componentDidMount() {
        this.getTopCaption(this.props.suggestions)
    }

    getTopCaption = (suggestions) => {

        for ( var i = 0; i < suggestions.length; i++) {
            if (suggestions[i].goldstar === true) {
                this.setState({
                    caption: suggestions[i].caption,
                    captionFound: true
                })
            } else {
                this.setState({
                    caption: suggestions[0].caption
                })
            }
        } 
    
    }


    


render() {
    return (
        <p>{this.state.caption}</p>
    );
}
}
export default TopSuggestion;

