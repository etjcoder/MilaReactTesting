import React, { Component } from "react";
import { Input } from "../Form";
import API from "../../utils/API";
import RequestCard from "../RequestCard";

class UserRequestViewer extends Component {

    state = {
        categories: [],
        requests: [],
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
        this.importRequests();
        console.log(this.props.categories);
    }

   importRequests = () => {
        API.getRequests()
            .then(res =>
                this.setState({
                    requests: res.data
                })
            )
   };

    render() {
        return (
            <div>
               {this.state.requests.map(request =>(
                   <RequestCard 
                   key={request._id}
                   imageSrc={request.imageURL} 
                   category={request.category} 
                   id={request._id}
                   likes={request.likes}
                   suggestedCaptions={request.suggestedCaptions}
                   description={request.description}
                   username={request.username}
                   tags={request.tags}
                   />
               ))}
            </div>
                )
            }
        }
        
export default UserRequestViewer