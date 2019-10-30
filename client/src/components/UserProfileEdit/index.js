import React from "react";
import ReactDom from "react-dom";
import cogoToast from "cogo-toast";
import { Input } from "../Form";
import API from "../../utils/API";
import "./style.css";

export default class UserProfileEdit extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        imageURL: "",
        profileDesc: "",
        id: "",
        username: ""
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

    handleFormSubmit = (e) => {
        e.preventDefault();

        console.log(this.state);
        API.updateUser(this.state.id, {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            image: this.state.imageURL,
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
                    <Input id="editProfileField" value={this.state.firstName} onChange={this.handleInputChange} name="firstName" placeholder="First Name" />
                    <Input id="editProfileField" value={this.state.lastName} onChange={this.handleInputChange} name="lastName" placeholder="Last Name" />
                    <Input id="editProfileField" value={this.state.username} onChange={this.handleInputChange} name="username" placeholder="Username" />
                    <Input id="editProfileField" value={this.state.imageURL} onChange={this.handleInputChange} name="imageURL" placeholder="Please upload an image for your profile" />
                    {/* <Input id="editProfileField" value={this.state.profileDesc} onChange={this.handleInputChange} name="profileDesc" placeholder="Tell us a little about yourself." /> */}
                    <button id="submitProfileEditsBtn" onClick={this.handleFormSubmit}>Submit your changes</button>
                </form>
            </div>
        )
    }

}