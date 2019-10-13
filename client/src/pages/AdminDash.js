import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid/";
import { List, ListItem } from "../components/List/";
import { Input, FormBtn } from "../components/Form";
import SearchBtn from "../components/SearchBtn";
import AdminCaptionCreator from "../components/AdminCaptionCreator";

class AdminDash extends Component {

    state = {
        captions: [],
        showCaptionCreator: false,
        categories: []
    }

    componentDidMount() {
        console.log("loaded admin Dashboard page");
        this.gatherCategories()

    }

    gatherCategories = () => {
        API.getCategories()
            .then(res =>
                this.setState({
                    categories: res.data   
                }))
            // .catch(err => console.log(err)))
    }
 

    onClickCaption = () => {

        if (this.state.showCaptionCreator === false) {

            this.setState({
                showCaptionCreator: true
            })

        } else {
            this.setState({
                showCaptionCreator: false
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
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AdminDash;




