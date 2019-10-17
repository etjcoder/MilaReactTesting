import React, {Component} from "react";
import "./style.css"
import API from "../../utils/API";

class SuggestedCaptions extends Component {

    state = {
        categories: [],
        imageID: "",
        likes: "",
        goldstar: false
    }

    onClickSubmitCaption(){
        console.log("Suggest a caption on caption id: " + this.props.id + " / " + this.state.id)
    }

    render() {
        return (
            <div>
                <li className="list-group-item">Caption1</li>
                <li className="list-group-item">Caption2</li>
                <li className="list-group-item">Caption3</li>
            </div>
        );
    }
}
export default SuggestedCaptions;