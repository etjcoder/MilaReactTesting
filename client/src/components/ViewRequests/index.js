import React, { Component } from "react";
import { Input } from "../Form";
import API from "../../utils/API"


class ViewRequests extends Component {

    state = {
        imageURL: "",
        category: this.props.categories[0].category,
        description: "",
        tags: "",
        username: "",
        suggestedCaptions: [],
        requests: [],
        currentRequest: [],
        requestIndex: 0,
        showRequests: false
    }

    componentDidMount() {
        // this.gatherCaptions();
        console.log(this.props.categories);
    }
    
    

    onClickStartRequestViewer = () => {

        this.setState({
            currentRequest: this.state.requests[this.state.requestIndex],
            showRequests: true
        })

        console.log(this.state.currentRequest)

    }

    onClickViewNextRequest = () => {
        this.setState({
            requestIndex: this.state.requestIndex + 1,
            currentRequest: this.state.requests[this.state.requestIndex + 1]
        })
    }

    onClickViewLastRequest = () => {
        this.setState({
            requestIndex: this.state.requestIndex - 1,
            currentRequest: this.state.requests[this.state.requestIndex -1]
        })
    }



    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();

    //     var apiTags = this.state.tags;
    //     var lowerCaseTags = apiTags.toLowerCase();
    //     var splicedArr = lowerCaseTags.split(", ")
    //     console.log(splicedArr)

    //       API.saveCaptionRequest({
    //         imageURL: this.state.imageURL,
    //         category: this.state.category,
    //         description: this.state.description,
    //         username: this.state.username,
    //     })
    //     .then(res => console.log("Successfully added caption"))
    //     .catch(err => console.log)
    // }

    

    render() {
        return (
            <div>
               <input type="submit" value="Begin Viewing Requests" onClick={this.onClickStartRequestViewer} />
                
                <div>
                    <h4>Requestable Caption:</h4>
                    <img src={this.state.currentRequest.imageURL}/>
                    <p>Category: {this.state.currentRequest.category}</p>
                    <p>Description: {this.state.currentRequest.description}</p>
                    <p>Tags: {this.state.currentRequest.tags}</p>
                    <p>User: {this.state.username}</p>
                </div>

                <input type="submit" value="View Next" onClick={this.onClickViewNextRequest} />
                <input type="submit" value="View Last" onClick={this.onClickViewLastRequest} />
                

            </div>
        )
    }
}

export default ViewRequests