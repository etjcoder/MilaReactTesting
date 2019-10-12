import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron/";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid/";
import { List, ListItem } from "../components/List/";
import { Input, FormBtn } from "../components/Form";
import SearchBtn from "../components/SearchBtn";


class UserDash extends Component {

    state = {
        captions: []
    }

    componentDidMount() {
        console.log("loaded user Dashboard page");
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

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default UserDash;






