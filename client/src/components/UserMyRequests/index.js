import React, { Component } from "react";
import API from "../../utils/API";
import MyRequestCard from "../MyRequestCard";
import { Col, Row, Container } from "../Grid";

class UserMyRequests extends Component {

    state = {
        categories: [],
        requests: [],
        captions: [],
        editRequestsShown: false,
        editRequestData: "",
        goldStarsLeft: 0,
        userdata: ""
    }

    componentDidMount() {
        console.log("UserMyRequests Component Mounted");
        this.setState({
            userdata: this.props.userdata
        })
        this.getMyRequests();
    }


    getMyRequests = () => {

        var id = this.props.userdata[0]._id

        API.getSpecificUserRequests(id)
            .then(res => 
                
                this.setState({
                    requests: res.data.myRequestedImages
                })
                
                )
            .catch(err => console.log(err))

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
        <div id="fullGalley">
        <Row>
           {this.state.requests.map(request =>(
               <Col size="6">
               <MyRequestCard 
               key={request._id}
               imageSrc={request.imageURL} 
               category={request.category} 
               id={request._id}
               likes={request.likes}
               suggestedCaptions={request.suggestedCaptions}
               description={request.description}
               username={request.username}
               tags={request.tags}
               userdata={this.props.userdata}
               goldStarGiven={request.goldStarGiven}
               />
               </Col>
           ))}
        </Row>
        </div>
            )
        }
    }
    
        
        
export default UserMyRequests