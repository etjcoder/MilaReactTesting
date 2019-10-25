import React, { Component } from "react";
import { Input } from "../Form";
import API from "../../utils/API";
import axios from "axios";
import {storage} from "../../config/Fire";
import cogoToast from "cogo-toast";


class UserCaptionCreator extends Component {

    state = {
        category: this.props.categories[0].category,
        description: "",
        tags: "",
        suggestedCaptions: [],
        image: null,
        url: "",
        userdata: ""
    }

    componentDidMount() {
        // this.gatherCaptions();
        console.log(this.props.categories);
        // console.log(this.props.captions);
        this.setState({
            userdata: this.props.userdata[0]
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

    handleFormSubmit = event => {
        event.preventDefault();

        var apiTags = this.state.tags;
        var lowerCaseTags = apiTags.toLowerCase();
        var splicedArr = lowerCaseTags.split(", ")
        console.log(splicedArr)
        cogoToast.success("You've created a request!")
        API.saveCaptionRequest(this.state.userdata._id, {
            imageURL: this.state.url,
            category: this.state.category,
            description: this.state.description,
            username: this.props.userdata[0].username
        }) 
        .then(res => console.log("Successfully created request"))
        .catch(err => console.log)
    } 
    /// << Need to find a way to get this .then to trigger



    render() {
        return (
            <div className="card bg-dark text-white">
                <form>
                    <h5>Input your Request for a Caption here</h5>
                    {/* <Input value={this.state.category} onChange={this.handleInputChange} name="category" placeholder="Category goes here" /> */}

                    <input type="file" onChange={this.fileSelectedHandler} />
                    <button onClick={this.fileUploadHandlerB}>Upload</button>



                    <select value={this.state.category} onChange={this.handleInputChange} name="category">

                        {this.props.categories.map(listedcategory => (
                            <option key={listedcategory._id} value={listedcategory.category}>{listedcategory.category}</option>
                        ))}

                    </select>
                    <Input value={this.state.description} onChange={this.handleInputChange} name="description" placeholder="Description of your photo goes here" />
                    {/* <Input value={this.state.lyric} onChange={this.handleInputchange} name="caption" placeholder="Is this a Lyric? (true or false)"/> */}
                    {/* <Input value={this.state.quote} onChange={this.handleInputchange} name="quote" placeholder="Is this a quote? (true or false)"/> */}
                    <Input value={this.state.tags} onChange={this.handleInputChange} name="tags" placeholder="Tags go here, separate with commas!" />
                    <button onClick={this.handleFormSubmit}>Submit your caption</button>
                </form>
            </div>
        )
    }
}

export default UserCaptionCreator