import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron/";
// import API from "../utils/API/";
import { Col, Row, Container } from "../components/Grid/";
import { List, ListItem } from "../components/List/";
import { Input, FormBtn } from "../components/Form";
import SearchBtn from "../components/SearchBtn";


class Home extends Component {

    state = {
        starterImages: []
    }

    componentDidMount() {
        console.log("loaded home page");
    }

    render() {

        return (
            <Container fluid>
                <Row>
                    <Col size="lg-12">
                        <Jumbotron>
                            <h1>Mila Captions App!</h1>
                        </Jumbotron>

                    </Col>
                </Row>
            </Container>

        )


    }

}

export default Home;





