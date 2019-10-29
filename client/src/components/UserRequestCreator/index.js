import React, { Component } from "react";
import { Input } from "../Form";
import API from "../../utils/API";
import axios from "axios";
import {storage} from "../../config/Fire";
import cogoToast from "cogo-toast";
import "./style.css";


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
            username: this.props.userdata[0].username,
            authorID: this.props.userdata._id
        }) 
        .then(res => console.log("Successfully created request"))
        .catch(err => console.log)
    } 
    /// << Need to find a way to get this .then to trigger



    render() {
        return (
            <div className="card" id="createCard">
                <form>
                    <h5 id="requestHead">Upload your Photo</h5>
                    <p id="uploadBlurb">See what the Mila community has to offer. 
                    Submit your photo and have your fellow users submit caption suggestions. 
                    Head to <i>'View My Requests'</i> to rank and select your favorite!</p>
                    <br/>
                    <input id="photoUpload" type="file" onChange={this.fileSelectedHandler} />
                    <br/>
                    <br/>
                    <button id="UserRequestBtn" onClick={this.fileUploadHandlerB}>Upload</button>
                    <br/>
                    <br/>
                    <h1 id="categorySelectText">We'll cap it, you tag it </h1>
                    <br/>
                    <br/>
                    <select id="catDrop2" value={this.state.category} onChange={this.handleInputChange} name="category">

                        {this.props.categories.map(listedcategory => (
                            <option key={listedcategory._id} value={listedcategory.category}>{listedcategory.category}</option>
                        ))}
                    </select>
                    <br/>
                    <br/>
                    <Input id="uploadText" value={this.state.description} onChange={this.handleInputChange} name="description" placeholder="Insert photo description" />
                    <br/>
                    {/* <Input value={this.state.lyric} onChange={this.handleInputchange} name="caption" placeholder="Is this a Lyric? (true or false)"/> */}
                    {/* <Input value={this.state.quote} onChange={this.handleInputchange} name="quote" placeholder="Is this a quote? (true or false)"/> */}
                    <Input id="uploadText" value={this.state.tags} onChange={this.handleInputChange} name="tags" placeholder="Insert tags, separate with commas" />
                    <br/>
                    <button id="UserRequestBtn" onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserCaptionCreator