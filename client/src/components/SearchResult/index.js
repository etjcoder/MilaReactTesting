import React, {Component} from "react";
import "./style.css"
import API from "../../utils/API";

class SearchResult extends Component {

    state = {
        categories: [],
        comments: [],
        likes: 0,
    }

    componentDidMount(){
        this.establishState()
    }

    establishState = () => 
        this.setState({
           likes: this.props.likes
        })

    onClickLikeSuggestion() {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    render() {
        return (
            <div id="searchResDiv">
               <h4 id="capResult">{this.props.caption}</h4>
               <h6 id="categoryTxt">Category: {this.props.category}</h6>
               {this.props.reference ? <p id="referenceTxt">Where have I heard this?  {this.props.reference}</p> : null }        
            </div>
        );
    }
}
export default SearchResult;