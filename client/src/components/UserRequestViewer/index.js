import React, { Component } from "react";
import API from "../../utils/API";
import RequestCard from "../RequestCard";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class UserRequestViewer extends Component {

    state = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        categories: [],
        requests: [],
        captions: [],
        caption: "",
        category: "",
        reference: "",
        lyric: "",
        quote: "",
        originalAuthor: "",
        tags: "",
        editModalShown: false,
        editUserData: ""
    }

    componentDidMount() {
        console.log("Component Mounted");
        this.importRequests();
        console.log(this.props.categories);
    }

    importRequests = () => {
        API.getRequests()
            .then(res =>
                this.setState({
                    requests: res.data
                })
            )
    };

    render() {
        return (

            <div style={{ textAlign: "center"}}>
                <Slider swipeToSlide="true" arrows="false">
                    {this.state.requests.map(request => (
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
                            userdata={this.props.userdata}
                            goldStarGiven={request.goldStarGiven}
                        />
                    ))}
                </Slider>
            </div>
        )
    }
}

export default UserRequestViewer
