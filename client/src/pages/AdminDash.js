import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid/";
import { List, ListItem } from "../components/List/";
import { Input, FormBtn } from "../components/Form";
import SearchBtn from "../components/SearchBtn";
import AdminCaptionCreator from "../components/AdminCaptionCreator";

class AdminDash extends Component {

    state = {
        captions: [],
        showCaptionCreator: false
    }

    componentDidMount() {
        console.log("loaded admin Dashboard page");
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
                            {this.state.showCaptionCreator ? <AdminCaptionCreator toggleShow={this.OnClickCaption} /> : null}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AdminDash;




