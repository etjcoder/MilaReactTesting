import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron/";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid/";
import { List, ListItem } from "../components/List/";
import { Input, FormBtn } from "../components/Form";
import SearchBtn from "../components/SearchBtn";
import UserCaptionCreator from "../components/UserCaptionCreator";
import UserEditCaptions from "../components/UserEditCaptions";
import UserEditModal from "../components/UserEditModal";
import UserRequestCreator from "../components/UserRequestCreator"
import UserRequestViewer from "../components/UserRequestViewer"


class UserDash extends Component {

    state = {
        captions: [],
        showCaptionCreator: false,
        showCaptionEditor: false,
        showRequestCreator: false,
        showRequestViewer: false,
        categories: [],
        captions: []
    };

    componentDidMount() {
        console.log("loaded user Dashboard page");
        var username = "testuser"
        this.gatherCategories();
        this.importCaptions(username);
    };

    gatherCategories = () => {
        API.getCategories()
            .then(res => 
                this.setState({
                    categories: res.data
                }))
    };

    importCaptions = (user) => {
        API.getUserCaptions(user)
            .then(res => 
                this.setState({
                    captions: res.data
                })
                )

    };

    onClickCaption = () => {
        if (this.state.showCaptionCreator === false ) {
            this.setState({
                showCaptionCreator: true,
                showCaptionEditor: false,
                showRequestCreator: false,
                showRequestViewer: false
            }) 
        } else {
            this.setState({
                showCaptionCreator: false
            })
        }
    };

    onClickEditCaption = () => {
        if (this.state.showCaptionEditor === false) {
            this.setState({
                showCaptionCreator: false,
                showCaptionEditor: true,
                showRequestCreator: false,
                showRequestViewer: false
            })
        } else {
            this.setState({
                showCaptionEditor: false
            })
        }
    };

    onClickUserRequest = () => {
        if (this.state.showRequestCreator === false) {
            this.setState({
                showCaptionCreator: false,
                showCaptionEditor: false,
                showRequestCreator: true,
                showRequestViewer: false
            })
        } else {
            this.setState({
                showRequestCreator: false
            })
        }

    }   

    onClickViewRequest = () => {
        if (this.state.showRequestViewer === false) {
            this.setState({
                showCaptionCreator: false,
                showCaptionEditor: false,
                showRequestCreator: false,
                showRequestViewer: true
            })
        } else {
            this.setState({
                showRequestViewer: false
            })
        }

    }   

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="lg-12">
                        <Jumbotron>
                            <h1 className="text-dark display-4"><strong>User Dashboard</strong></h1>
                            <p className="lead"><strong>Please Choose your Option below</strong></p>
                        </Jumbotron>
                        <input type="submit" value="Create Community Caption" onClick={this.onClickCaption} />
                        <div>
                            {this.state.showCaptionCreator ? <UserCaptionCreator categories={this.state.categories} captions={this.state.captions}  /> : null }
                        </div>
                        <input type="submit" value="View/Edit Your Community Captions" onClick={this.onClickEditCaption} />
                        <div>
                            {this.state.showCaptionEditor ? <UserEditCaptions categories={this.state.categories} captions={this.state.captions}  /> : null }
                        </div>
                        <input type="submit" value="Request a Caption for an Image" onClick={this.onClickUserRequest} />
                        <div>
                            {this.state.showRequestCreator ? <UserRequestCreator categories={this.state.categories}  /> : null }
                        </div>
                        <input type="submit" value="Review Regional Caption Requests" onClick={this.onClickViewRequest} />
                        <div>
                            {this.state.showRequestViewer ? <UserRequestViewer categories={this.state.categories} /> : null }
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default UserDash;






