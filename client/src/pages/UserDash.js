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


class UserDash extends Component {

    state = {
        captions: [],
        showCaptionCreator: false,
        showCaptionEditor: false,
        categories: [],
        captions: []
    };

    componentDidMount() {
        console.log("loaded user Dashboard page");
        this.gatherCategories();
        this.gatherCaptions("evanjcleary") 
    };

    gatherCategories = () => {
        API.getCategories()
            .then(res => 
                this.setState({
                    categories: res.data
                }))
    };

    gatherCaptions = (user) => {
        API.getUserCaptions(user)
            .then(res => 
                this.setState({
                    captions: res.data
                }))
    };

    onClickCaption = () => {
        if (this.state.showCaptionCreator === false ) {
            this.setState({
                showCaptionCreator: true,
                showCaptionEditor: false,
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
                showCaptionEditor: true
            })
        } else {
            this.setState({
                showCaptionEditor: false
            })
        }
    };

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
                            {this.state.showCaptionCreator ? <UserCaptionCreator categories={this.state.categories} toggleShow={this.OnClickCaption} /> : null }
                        </div>
                        <input type="submit" value="View Your Community Captions" onClick={this.onClickEditCaption} />
                        <div>
                            {this.state.showCaptionEditor ? <UserEditCaptions categories={this.state.categories} captions={this.state.captions} toggleShow={this.OnClickEditCaption} /> : null }
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default UserDash;






