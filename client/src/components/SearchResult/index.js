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
            <div>
               <h4><u>Caption</u> <i>{this.props.caption}</i></h4>
               <h5><u>by</u> {this.props.author} </h5>
               <h6><u>Category</u> {this.props.category}</h6>
               <h6><u>Tags:</u> {this.props.tags} </h6>
               <p><u>Primary reference:</u> {this.props.reference}</p>
               {this.props.lyric ? <p>This is a Song Lyric by {this.props.originalAuthor} </p> : null}
               {this.props.quote ? <p>This is a Quote by {this.props.originalAuthor} </p> : null}               
               <hr/>
            </div>
        );
    }
}
export default SearchResult;