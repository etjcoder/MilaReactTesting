import React from "react";
import ReactDom from "react-dom";
import cogoToast from "cogo-toast";
import { Input } from "../Form";
import API from "../../utils/API";
import "./style.css";
import { storage } from "../../config/Fire"; 

export default class UserProfileEdit extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        url: "",
        profileDesc: "",
        id: "",
        username: "",
        image: ""
    }



    componentDidMount() {
        console.log(this.props.userdata)
        this.setState({
            id: this.props.userdata[0]._id
        })
    }



    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    fileSelectedHandler = event => {
        event.preventDefault();
        if (event.target.files[0]) {
            this.setState({
                image: event.target.files[0]
            })
        }
    }

    fileUploadHandlerB = (event) => {
        event.preventDefault();
        const uploadTask = storage.ref(`*/${this.state.image.name}`).put(this.state.image);
        uploadTask.on('state_changed',
            (snapshot) => {
                //progress function .... demonstrates progress
                console.log(snapshot)
            },
            (error) => {
                //error function .... 
                console.log(error)
            },
            () => {
                //complete function ....
                storage.ref('*').child(this.state.image.name).getDownloadURL().then(urlB => {
                    this.setState({
                        url: urlB
                    });
                })
            });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        console.log(this.state);
        API.updateUser(this.state.id, {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            image: this.state.url,
            username: this.state.username,
            profileDesc: this.state.profileDesc
        })
            .then(res => this.handleSuccess())
            .catch(err => console.log)
    }

    handleSuccess = () => {
        cogoToast.info("Updated profile!")
    }


    render() {
        return(
            <div className="card" id="userEdit">
                <form>
                    <h5 id="editProfileHeader">Update your profile</h5>
                    <Input id="editProfileField" className="edit-input" value={this.state.firstName} onChange={this.handleInputChange} name="firstName" placeholder="What is your first name?" />
                    <Input id="editProfileField" className="edit-input" value={this.state.lastName} onChange={this.handleInputChange} name="lastName" placeholder="What is your last name?" />
                    <Input id="editProfileField" className="edit-input" value={this.state.username} onChange={this.handleInputChange} name="username" placeholder="What will be your username?" />
                    <input className="form-group" id="photoUpload" type="file" onChange={this.fileSelectedHandler} />
                    <br />
                    <br />
                    <button id="UserProfileEditBtn" onClick={this.fileUploadHandlerB}>Upload</button>
                    <br />
                    <br />
                    {/* <Input value={this.state.imageURL} onChange={this.handleInputChange} name="imageURL" placeholder="Please upload an image for your profile" /> */}
                    <button id="submitProfileEditsBtn" style={{textAlign: "center"}} onClick={this.handleFormSubmit}>Submit your changes</button>
                </form>
            </div>
        )
    }

}