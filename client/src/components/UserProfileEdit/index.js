import React from "react";
import ReactDom from "react-dom";
import cogoToast from "cogo-toast";
import { Input } from "../Form";
import API from "../../utils/API";

export default class UserProfileEdit extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        imageURL: "",
        profileDesc: "",
        id: ""
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
            <div className="card bg-dark text-white">
                <form>
                    <h5>Update your profile</h5>
                    <Input value={this.state.firstName} onChange={this.handleInputChange} name="firstName" placeholder="What is your first name?" />
                    <Input value={this.state.lastName} onChange={this.handleInputChange} name="lastName" placeholder="What is your last name?" />
                    <Input value={this.state.imageURL} onChange={this.handleInputChange} name="imageURL" placeholder="Please upload an image for your profile" />
                    <Input value={this.state.profileDesc} onChange={this.handleInputChange} name="profileDesc" placeholder="Tell us a little about yourself." />
                    <button onClick={this.handleFormSubmit}>Submit your changes</button>
                </form>
            </div>
        )
    }

}