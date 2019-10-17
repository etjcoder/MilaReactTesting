import React, { Component } from "react";
import { Input } from "../Form";
import API from "../../utils/API";
import UserEditModal from "../UserEditModal";

class UserEditCaptions extends Component {

    state = {
        categories: [],
        captions: [],
        caption: "",
        category: "",
        reference: "",
        lyric: "",
        quote: "",
        originalAuthor: "",
        tags: "",
        editModalShown: false,
        editUserData: ""
    }

    componentDidMount() {
        console.log("Component Mounted");
        console.log(this.props.captions);
    }

    // Two ways to do this, pass through entire object or just an ID
    editUserRow = (data) => {

        console.log("You've chosen to revise: " + data);
        console.log("The ID you've chosen is: " + JSON.stringify(data));
        if (this.state.editModalShown === false) {
            this.setState({
                editModalShown: true,
                editUserData: data
            }) 
        } else {
                this.setState({
                    editModalShown: false,
                    editUserData: ""
                })
            }
        }
    
    deleteCaption = (id) => {

        API.deleteUserCaption(id)
            .then(res => console.log("Successfully deleted caption!"))
            .catch(err => console.log(err));
    }

    
    render() {
        return (
            <div className="card">
                <h5>Edit Your Captions Below</h5>
                <div>
                    {this.state.editModalShown ? <UserEditModal caption={this.state.editUserData} categories={this.props.categories}/> : null}
                </div>
                <br />
                <br />
                <table class="table">
                    <thead>
                        <tr>
                            <th>Caption</th>
                            <th>Category</th>
                            {/* <th>Author</th>
                            <th>Reference</th>
                            <th>Original Author</th>
                            <th>Tags</th> */}
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.captions.map(caption => (
                            <tr key={caption._id}>
                                <td>{caption.caption}</td>
                                <td>{caption.category}</td>
                                {/* <td>{caption.author}</td>
                                <td>{caption.reference}</td>
                                <td>{caption.originalAuthor}</td>
                                <td>{caption.tags}</td> */}
                                <td><button value={caption._id} onClick={() => this.editUserRow(caption)}>Edit</button></td>
                                <td><button value={caption._id} onClick={() => this.deleteCaption(caption._id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserEditCaptions