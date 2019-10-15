import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid/";
// import { List, ListItem } from "../components/List/";
// import { Input, FormBtn } from "../components/Form";
// import SearchBtn from "../components/SearchBtn";
import AdminCaptionCreator from "../components/AdminCaptionCreator";
import AdminCategoryCreator from "../components/AdminCategoryCreator";
import AdminEditMila from "../components/AdminEditMila";
import AdminFeaturedMila from "../components/AdminFeaturedMila";

class AdminDash extends Component {

    state = {
        showCaptionCreator: false,
        showCategoryCreator: false,
        showMilaEditor: false,
        showMilaFeatured: false,
        categories: [],
        captions: [],
        featuredCaps: []
    };

    componentDidMount() {
        console.log("loaded admin Dashboard page");
        this.gatherCategories()
        this.gatherCaptions()
        this.gatherFeaturedCaptions()

    };

    gatherCategories = () => {
        API.getCategories()
            .then(res =>
                this.setState({
                    categories: res.data   
                }))
            // .catch(err => console.log(err)))
    };
    
    gatherCaptions = () => {
        API.getCaptions()
            .then(res => 
                console.log(res.data)
                //  this.setState({
                //     captions: res.data
                // })
                )
    }

    gatherFeaturedCaptions = () => {
        API.getFeaturedCaptions()
            .then(res => 
                this.setState({
                    featuredCaps: res.data
                }))
    }

    onClickCaption = () => {
        if (this.state.showCaptionCreator === false) {
            this.setState({
                showCaptionCreator: true,
                showCategoryCreator: false,
                showMilaEditor: false,
                showMilaFeatured: false
            })
        } else {
            this.setState({
                showCaptionCreator: false
            })
        }
    }

    onClickCategory = () => {
        if (this.state.showCategoryCreator === false) {
            this.setState({
                showCaptionCreator: false,
                showCategoryCreator: true,
                showMilaEditor: false,
                showMilaFeatured: false
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
                showCaptionCreator: false,
                showCategoryCreator: false,
                showMilaEditor: true,
                showMilaFeatured: false
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
                showCaptionCreator: false,
                showCategoryCreator: false,
                showMilaEditor: false,
                showMilaFeatured: true
            })
        } else {
            this.setState({
                showMilaFeatured: false
            })
        }
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="lg-12">
                        <Jumbotron>
                            <h1>Admin Dashboard!</h1>
                        </Jumbotron>
                        <input type="submit" value="CreateCaption" onClick={this.onClickCaption} />
                        <div>
                            {this.state.showCaptionCreator ? <AdminCaptionCreator categories={this.state.categories} toggleShow={this.OnClickCaption} /> : null}
                        </div>
                        <input type="submit" value="CreateCategory" onClick={this.onClickCategory} />
                        <div>
                            {this.state.showCategoryCreator ? <AdminCategoryCreator categories={this.state.categories} toggleShow={this.OnClickCategory} /> : null}
                        </div>
                        <input type="submit" value="Edit Mila Main Database Captions" onClick={this.onClickEditMila} />
                            <div>
                                {this.state.showMilaEditor ? <AdminEditMila categories={this.state.categories} captions={this.state.captions} toggleShow={this.OnClickEditMila} /> : null}
                            </div>
                            <input type="submit" value="View Featured Mila Captions" onClick={this.onClickFeaturedMila} />
                            <div>
                                {this.state.showMilaFeatured ? <AdminFeaturedMila featuredCaps={this.state.featuredCaps} toggleShow={this.OnClickFeaturedMila} /> : null}
                            </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AdminDash;




