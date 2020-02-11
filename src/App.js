import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Jumbotron, Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Container className="App">
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
      <Row>
        <Col>
          <Button variant="primary" >
            Start
          </Button>
        </Col>
      </Row>
    </Container >
  );
}

export default App;
