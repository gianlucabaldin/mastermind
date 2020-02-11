import React from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap';

export const Header = () => (
  <Row>
    <Col xs={12}>
      <Jumbotron>
        <h1>Mastermind game</h1>
        <p>
          A React-Redux project simulates the Mastermind game
        </p>
        <p>
          Click on the button below to start a new match
        </p>
      </Jumbotron>
    </Col>
  </Row >
)