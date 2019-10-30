import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid/";
import UserCaptionCreator from "../components/UserCaptionCreator";
import UserEditCaptions from "../components/UserEditCaptions";
import UserRequestCreator from "../components/UserRequestCreator";
import UserRequestViewer from "../components/UserRequestViewer";
import UserSearchOptions from "../components/UserSearchOptions";
import Nav from "../components/Nav/";
import "./page-styles/css/style.css";
import SideNavPage from "../components/SideNavPage";
import CommunityInfiniteScroll from "../components/InfiniteUsers";
import cogoToast from "cogo-toast";
import fire from "../config/Fire";
import FlipCard from "../components/FlipCard";
import UserProfileEdit from "../components/UserProfileEdit"
import InfiniteUsers from "../components/InfiniteUsers";
import UserMyRequests from "../components/UserMyRequests";
import '../pages/page-styles/css/style.css';
import AdminCaptionCreator from "../components/AdminCaptionCreator";
import AdminCategoryCreator from "../components/AdminCategoryCreator";
import AdminEditMila from "../components/AdminEditMila";
import AdminFeaturedMila from "../components/AdminFeaturedMila";
import InfiniteUsersCaptionScroll from "../components/InfiniteUsersCaptionScroll";
import RequestCardDash from "../components/RequestCardDash";
import LeaderBoard from "../components/LeaderBoard"

class UserDash extends Component {

    state = {
        showCaptionCreator: false,
        showCaptionEditor: false,
        showRequestCreator: false,
        showRequestViewer: false,
        showUserSearchOptions: true,
        showProfileEdit: false,
        showMyRequests: false,
        categories: [],
        captions: [],
        userData: "",
        showAdminCaptionCreator: false,
        showCategoryCreator: false,
        showMilaEditor: false,
        showMilaFeatured: false,
        showLeaderBoard: false,
        featuredCaps: [],
        suggestables: [],
        chosenRequestData: "",
        showRequestCardDash: false
    };

    componentDidMount = () => {
        console.log("loaded user Dashboard page");
        this.getUserData();
        this.gatherCategories();
        this.gatherAdminCaptions();
        this.gatherFeaturedCaptions();
        this.gatherSuggestables();

    };


    gatherCategories = () => {
        API.getCategories()
            .then(res =>
                this.setState({
                    categories: res.data
                }))
    };

    getUserData = () => {
        var userID = this.props.user.uid

        API.getUserData(userID)
            .then(res =>
                this.setState({
                    userData: res.data
                })
            )
    }

    gatherAdminCaptions = () => {
        API.getCaptions()
            .then(res =>
                this.setState({
                    captions: res.data
                }))
    }

    gatherFeaturedCaptions = () => {
        API.getFeaturedCaptions()
            .then(res =>
                this.setState({
                    featuredCaps: res.data
                }))
    }

    gatherSuggestables = () => {
        API.getRequests()
        .then(res =>
            this.setState({
                suggestables: res.data
            })
        )
    } 

    getSuggestable = (id) => {
        console.log(id)
        API.getRequest(id)
            .then(res =>
                this.setState({
                    chosenRequestData: res.data
                })
                )
    }

    onClickAdminCaption = () => {
        if (this.state.showAdminCaptionCreator === false) {
            this.setState({
                showAdminCaptionCreator: true,
                showCategoryCreator: false,
                showMilaEditor: false,
                showMilaFeatured: false,
                showCaptionCreator: false,
                showCaptionEditor: false,
                showRequestCreator: false,
                showRequestViewer: false,
                showUserSearchOptions: false,
                showProfileEdit: false,
                showMyRequests: false,
                showRequestCardDash: false,
                showLeaderBoard: false
            })
        } else {
            this.setState({
                showAdminCaptionCreator: false
            })
        }
    }

    onClickCategory = () => {
        if (this.state.showCategoryCreator === false) {
            this.setState({
                showAdminCaptionCreator: false,
                showCategoryCreator: true,
                showMilaEditor: false,
                showMilaFeatured: false,
                showCaptionCreator: false,
                showCaptionEditor: false,
                showRequestCreator: false,
                showRequestViewer: false,
                showUserSearchOptions: false,
                showProfileEdit: false,
                showMyRequests: false,
                showRequestCardDash: false,
                showLeaderBoard: false
            })
        } else {
            this.setState({
                showCategoryCreator: false
            })
        }
    }

    onClickEditMila = () => {
        if (this.state.showMilaEditor === false) {
            this.setState({
                showAdminCaptionCreator: false,
                showCategoryCreator: false,
                showMilaEditor: true,
                showMilaFeatured: false,
                showCaptionCreator: false,
                showCaptionEditor: false,
                showRequestCreator: false,
                showRequestViewer: false,
                showUserSearchOptions: false,
                showProfileEdit: false,
                showMyRequests: false,
                showRequestCardDash: false,
                showLeaderBoard: false
            })
        } else {
            this.setState({
                showMilaEditor: false
            })
        }
    }

    onClickFeaturedMila = () => {
        if (this.state.showMilaFeatured === false) {
            this.setState({
                showAdminCaptionCreator: false,
                showCategoryCreator: false,
                showMilaEditor: false,
                showMilaFeatured: true,
                showCaptionCreator: false,
                showCaptionEditor: false,
                showRequestCreator: false,
                showRequestViewer: false,
                showUserSearchOptions: false,
                showProfileEdit: false,
                showMyRequests: false,
                showRequestCardDash: false,
                showLeaderBoard: false
            })
        } else {
            this.setState({
                showMilaFeatured: false
            })
        }
    }

    onClickCaption = () => {
        if (this.state.showCaptionCreator === false) {
            this.setState({
                showAdminCaptionCreator: false,
                showCategoryCreator: false,
                showMilaEditor: false,
                showMilaFeatured: false,
                showCaptionCreator: true,
                showCaptionEditor: false,
                showRequestCreator: false,
                showRequestViewer: false,
                showUserSearchOptions: false,
                showProfileEdit: false,
                showMyRequests: false,
                showRequestCardDash: false,
                showLeaderBoard: false
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
                showAdminCaptionCreator: false,
                showCategoryCreator: false,
                showMilaEditor: false,
                showMilaFeatured: false,
                showCaptionCreator: false,
                showCaptionEditor: true,
                showRequestCreator: false,
                showRequestViewer: false,
                showUserSearchOptions: false,
                showProfileEdit: false,
                showMyRequests: false,
                showRequestCardDash: false,
                showLeaderBoard: false
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
                showAdminCaptionCreator: false,
                showCategoryCreator: false,
                showMilaEditor: false,
                showMilaFeatured: false,
                showCaptionCreator: false,
                showCaptionEditor: false,
                showRequestCreator: true,
                showRequestViewer: false,
                showUserSearchOptions: false,
                showProfileEdit: false,
                showMyRequests: false,
                showRequestCardDash: false,
                showLeaderBoard: false
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
                showAdminCaptionCreator: false,
                showCategoryCreator: false,
                showMilaEditor: false,
                showMilaFeatured: false,
                showCaptionCreator: false,
                showCaptionEditor: false,
                showRequestCreator: false,
                showRequestViewer: true,
                showUserSearchOptions: false,
                showProfileEdit: false,
                showMyRequests: false,
                showRequestCardDash: false,
                showLeaderBoard: false
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
                showAdminCaptionCreator: false,
                showCategoryCreator: false,
                showMilaEditor: false,
                showMilaFeatured: false,
                showCaptionCreator: false,
                showCaptionEditor: false,
                showRequestCreator: false,
                showRequestViewer: false,
                showUserSearchOptions: true,
                showProfileEdit: false,
                showMyRequests: false,
                showRequestCardDash: false,
                showLeaderBoard: false
            })
        } else {
            this.setState({
                showUserSearchOptions: false
            })
        }
    }

    onClickLogout() {
        fire.auth().signOut();
        cogoToast.success("You've logged out!")
    }

    onClickProfileEdit = () => {
        if (this.state.showProfileEdit === false) {
            this.setState({
                showAdminCaptionCreator: false,
                showCategoryCreator: false,
                showMilaEditor: false,
                showMilaFeatured: false,
                showCaptionCreator: false,
                showCaptionEditor: false,
                showRequestCreator: false,
                showRequestViewer: false,
                showUserSearchOptions: false,
                showProfileEdit: true,
                showMyRequests: false,
                showRequestCardDash: false,
                showLeaderBoard: false
            })
        } else {
            this.setState({
                showProfileEdit: false
            })
        }
    }

    onClickViewMyRequests = () => {
        if (this.state.showMyRequests === false) {
            this.setState({
                showAdminCaptionCreator: false,
                showCategoryCreator: false,
                showMilaEditor: false,
                showMilaFeatured: false,
                showCaptionCreator: false,
                showCaptionEditor: false,
                showRequestCreator: false,
                showRequestViewer: false,
                showUserSearchOptions: false,
                showProfileEdit: false,
                showMyRequests: true,
                showRequestCardDash: false,
                showLeaderBoard: false

            })
        } else {
            this.setState({
                showMyRequests: false
            })
        }
    }

    onClickShowRequestCardDash = () => {
        if (this.state.showRequestCardDash === false) {
            this.setState({
                showAdminCaptionCreator: false,
                showCategoryCreator: false,
                showMilaEditor: false,
                showMilaFeatured: false,
                showCaptionCreator: false,
                showCaptionEditor: false,
                showRequestCreator: false,
                showRequestViewer: false,
                showUserSearchOptions: false,
                showProfileEdit: false,
                showMyRequests: false,
                showRequestCardDash: true,
                showLeaderBoard: false
            })
        } else {
            this.setState({
                showRequestCardDash: false
            })
        }
    }

    onClickLeaderBoard = () => {
        if (this.state.showLeaderBoard === false) {
            this.setState({
                showAdminCaptionCreator: false,
                showCategoryCreator: false,
                showMilaEditor: false,
                showMilaFeatured: false,
                showCaptionCreator: false,
                showCaptionEditor: false,
                showRequestCreator: false,
                showRequestViewer: false,
                showUserSearchOptions: false,
                showProfileEdit: false,
                showMyRequests: false,
                showRequestCardDash: false,
                showLeaderBoard: true
            })
        } else {
            this.setState({
                showLeaderBoard: false
            })
        }
    }



    render() {
        return (
            <div>
                <Nav user={this.props.user} />
                <SideNavPage createOption={this.onClickCaption}
                    editOption={this.onClickEditCaption}
                    requestOption={this.onClickUserRequest}
                    searchOption={this.onClickSearchOptions}
                    viewrequestsOption={this.onClickViewRequest}
                    logOut={this.onClickLogout}
                    editProfile={this.onClickProfileEdit}
                    viewMyRequests={this.onClickViewMyRequests}
                    createAdminOption={this.onClickAdminCaption}
                    createCategoryOption={this.onClickCategory}
                    editMilaOption={this.onClickEditMila}
                    featureOption={this.onClickFeaturedMila}
                    leaderBoardOption={this.onClickLeaderBoard}
                />
                <Container fluid>
                    <Row>
                        <Col size="1">
                            {/* Blank Space for SideNavPage */}
                        </Col>
                        <Col size="8">
                            {/* User Tools Below */}
                            {/* User Create Caption Tool */}
                            <div>
                                {this.state.showCaptionCreator ? <UserCaptionCreator userdata={this.state.userData} categories={this.state.categories} captions={this.state.captions} /> : null}
                            </div>
                            {/* User Edit Caption Tool */}
                            <div>
                                {this.state.showCaptionEditor ? <UserEditCaptions userdata={this.state.userData} categories={this.state.categories} rerender={this.importCaptions} captions={this.state.captions} /> : null}
                            </div>
                            {/* User Create Request Tool */}
                            <div>
                                {this.state.showRequestCreator ? <UserRequestCreator userdata={this.state.userData} categories={this.state.categories} /> : null}
                            </div>
                            {/* View All Requests Tool /swipeables/ */}
                            <div>
                                {this.state.showRequestViewer ? <UserRequestViewer userdata={this.state.userData} categories={this.state.categories} /> : null}
                            </div>
                            {/* Search for Captions Tool */}
                            <div>
                                {this.state.showUserSearchOptions ? <UserSearchOptions categories={this.state.categories} /> : null}
                            </div>
                            {/* User Update Profile Tool */}
                            <div>
                                {this.state.showProfileEdit ? <UserProfileEdit userdata={this.state.userData} /> : null}
                            </div>
                            {/* User View their personal request cards */}
                            <div>
                                {this.state.showMyRequests ? <UserMyRequests userdata={this.state.userData} /> : null}
                            </div>
                            {/* Shows leaderboard in Goldstars and Likes */}
                            <div>
                                {this.state.showLeaderBoard ? <LeaderBoard userdata={this.state.userData} /> : null}
                            </div>

                            {/* Admin Tools Below */}
                            {/* Create a Mila Official caption */}
                            <div>
                                {this.state.showAdminCaptionCreator ? <AdminCaptionCreator categories={this.state.categories} toggleShow={this.OnClickAdminCaption} /> : null}
                            </div>
                            {/* Create a Category for future caption creation */}
                            <div>
                                {this.state.showCategoryCreator ? <AdminCategoryCreator categories={this.state.categories} rerender={this.state.gatherCategories} toggleShow={this.OnClickCategory} /> : null}
                            </div>
                            {/* Edit Mila Official captions */}
                            <div>
                                {this.state.showMilaEditor ? <AdminEditMila categories={this.state.categories} captions={this.state.captions} rerender={this.gatherAdminCaptions} /> : null}
                            </div>
                            {/* View / Unfeature Mila Captions */}
                            <div>
                                {this.state.showMilaFeatured ? <AdminFeaturedMila featuredCaps={this.state.featuredCaps} rerender={this.gatherFeaturedCaptions} toggleShow={this.OnClickFeaturedMila} /> : null}
                            </div>

                            {/* Dashboard Community Request Card */}
                            <div id="request-card-dash">
                                {this.state.showRequestCardDash ? <RequestCardDash card={this.state.chosenRequestData} userdata={this.state.userData} /> : null}
                            </div>
                        </Col>

                        <Col size="3">
                            <div className="card" id="infinite-card" style={{ height: 800, overflow: 'auto' }}>
                                {this.state.showMilaEditor ? null : <InfiniteUsersCaptionScroll suggestableShown={this.state.showRequestCardDash} getSuggestable={this.getSuggestable} showSuggestable={this.onClickShowRequestCardDash} suggestables={this.state.suggestables} />}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
        )
    }
}

export default UserDash;





