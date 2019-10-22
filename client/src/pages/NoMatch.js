import React from "react";
import { Col, Row, Container } from "../components/Grid/";
import Nav from "../components/Nav/";
import Jumbotron from "../components/Jumbotron/";
import "./page-styles/css/style.css";

function NoMatch() {
  return (
    <Container fluid>
    <Nav />
      <Row>
        <Col size="md-12">
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
