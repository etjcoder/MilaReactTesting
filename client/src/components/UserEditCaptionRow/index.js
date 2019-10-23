import React, {Component} from "react";
import "./style.css"
import API from "../../utils/API";

class UserEditCaptionRow extends Component {

    state = {
        categories: [],
        imageID: 0,
        likes: 0,
        goldstar: false
    }

    componentDidMount(){
        // this.establishState()
    }

    // establishState = () => 
    //     this.setState({
    //        likes: this.props.likes
    //     })



    render() {
        return (
            <tr>
                <p>Caption 1</p>
                {/* <td>{this.props.caption}</td>
                <td>{this.props.category}</td>
                <td><button value={this.props._id} onClick={() => this.editUserRow(this.props.caption)}>Edit</button></td>
                <td><button value={this.props._id} onClick={() => this.deleteCaption(this.props._id)}>Delete</button></td> */}
            </tr>
        );
    }
}
export default UserEditCaptionRow;