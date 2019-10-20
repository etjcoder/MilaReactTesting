import React, {Component} from "react";
import ReactDom from "react-dom";
import Jumbotron from "../components/Jumbotron/";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid/";
import { List, ListItem } from "../components/List/";
import { Input, FormBtn } from "../components/Form";
import SearchBtn from "../components/SearchBtn";
import UserCaptionCreator from "../components/UserCaptionCreator";
import UserEditCaptions from "../components/UserEditCaptions";
import UserEditModal from "../components/UserEditModal";
import UserRequestCreator from "../components/UserRequestCreator";
import UserRequestViewer from "../components/UserRequestViewer";
import UserSearchOptions from "../components/UserSearchOptions";
import SideNavPage from "../components/SideNavPage";
import CommunityInfiniteScroll from "../components/CommunityInfiniteScroll";
import cogoToast from "cogo-toast";

class UserDash extends Component {

    state = {
        captions: [],
        showCaptionCreator: false,
        showCaptionEditor: false,
        showRequestCreator: false,
        showRequestViewer: false,
        showUserSearchOptions: false,
        categories: [],
        captions: [],
        user: "testuser"
    };

    componentDidMount() {
        console.log("loaded user Dashboard page");
        this.gatherCategories();
        this.importCaptions();
    };

    gatherCategories = () => {
        API.getCategories()
            .then(res => 
                this.setState({
                    categories: res.data
                }))
    };

    importCaptions = () => {
        API.getUserCaptions()
            .then(res => 
                console.log(res)
                )

    };

    onClickCaption = () => {
        if (this.state.showCaptionCreator === false ) {
            this.setState({
                showCaptionCreator: true,
                showCaptionEditor: false,
                showRequestCreator: false,
                showRequestViewer: false,
                showUserSearchOptions: false,
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
                showRequestViewer: false,
                showUserSearchOptions: false,
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
                showRequestViewer: false,
                showUserSearchOptions: false,
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
                showRequestViewer: true,
                showUserSearchOptions: false,
            })
        } else {
            this.setState({
                showRequestViewer: false
            })
        }

    }   

    onClickSearchOptions = () => {
        if (this.state.showUserSearchOptions === false) {
            this.setState({
                showCaptionCreator: false,
                showCaptionEditor: false,
                showRequestCreator: false,
                showRequestViewer: false,
                showUserSearchOptions: true,
            })
        } else {
            this.setState({
                showUserSearchOptions: false
            })
        }

    }   

    render() {
        return (
        <div>
           <SideNavPage createOption={this.onClickCaption} editOption={this.onClickEditCaption} requestOption={this.onClickUserRequest} searchOption={this.onClickSearchOptions} viewrequestsOption={this.onClickViewRequest}/>
            <Container fluid>
                <Row>
                <Col size ="1">
                {/* Blank Space for SideNavPage */}
                </Col>
                <Col size ="8">
                        {/* <input type="submit" value="Create Community Caption" onClick={this.onClickCaption} /> */}
                        <div>
                            {this.state.showCaptionCreator ? <UserCaptionCreator categories={this.state.categories} captions={this.state.captions}  /> : null }
                        </div>
                        {/* <input type="submit" value="View/Edit Your Community Captions" onClick={this.onClickEditCaption} /> */}
                        <div>
                            {this.state.showCaptionEditor ? <UserEditCaptions categories={this.state.categories} rerender={this.importCaptions} captions={this.state.captions}  /> : null }
                        </div>
                        {/* <input type="submit" value="Request a Caption for an Image" onClick={this.onClickUserRequest} /> */}
                        <div>
                            {this.state.showRequestCreator ? <UserRequestCreator categories={this.state.categories}  /> : null }
                        </div>
                        {/* <input type="submit" value="Review Regional Caption Requests" onClick={this.onClickViewRequest} /> */}
                        <div>
                            {this.state.showRequestViewer ? <UserRequestViewer categories={this.state.categories} /> : null }
                        </div>
                        {/* <input type="submit" value="Search for Captions" onClick={this.onClickSearchOptions} /> */}
                        <div>
                            {this.state.showUserSearchOptions ? <UserSearchOptions categories={this.state.categories} /> : null }
                        </div>
                    </Col>
           <Col size="3">
           <CommunityInfiniteScroll />
           </Col>
           </Row>
           </Container>
           </div>
        )
    }
}

export default UserDash;





