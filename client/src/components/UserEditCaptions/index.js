import React, { Component } from "react";
import ReactDom from "react-dom";
import { Input } from "../Form";
import API from "../../utils/API";
import UserEditModal from "../UserEditModal";
import cogoToast from "cogo-toast"
import "./style.css";


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
        editUserData: "",
        userdata: ""
    }

    componentDidMount() {
        console.log("Component Mounted");
        console.log(this.props.captions);
        this.setState({
            userdata: this.props.userdata
        })
        this.getUserCaptions()
    }

    // Two ways to do this, pass through entire object or just an ID
    editUserRow = (data) => {

        console.log("You've chosen to revise: " + data);
        console.log("The ID you've chosen is: " + JSON.stringify(data));
        if (this.state.editModalShown === false) {
            this.setState({
                editModalShown: true,
                editUserData: data
            }, () => {
                this.getUserCaptions()
            }) 
        } else {
                this.setState({
                    editModalShown: false,
                    editUserData: ""
                }, () => {
                    this.getUserCaptions()
                })
            }
        }

    getUserCaptions = () => {

        var id = this.props.userdata[0]._id
    
        API.getUserCaptions(id)
            .then(res => 
                // console.log(res)
                this.setState({
                    captions: res.data.myCommunityCaptions
                })
            )
    }
    handleDelete = () => {
        cogoToast.error("Deleted Caption")
        this.getUserCaptions()
    }

    deleteCaption = (id) => {

        API.deleteUserCaption(id)
            .then(res => this.handleDelete())
            .catch(err => console.log(err));
    }

    
    render() {
        return (
            <div className="card" id="editCaptions">
                <h5>Edit Your Captions Below</h5>
                <div>
                    {this.state.editModalShown ? <UserEditModal caption={this.state.editUserData} rerender={this.props.rerender} categories={this.props.categories}/> : null}
                </div>
                <br />
                <br />
                <table class="table">
                    <thead>
                        <tr>
                            <th>Caption</th>
                            <th>Category</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.captions.map(caption => (
                            <tr key={caption._id}>
                                <td>{caption.caption}</td>
                                <td>{caption.category}</td>
                              
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