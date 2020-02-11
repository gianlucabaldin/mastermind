import React from 'react';
import './App.css';
import { Button, Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { start } from './store/actions/actions'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <Container className="App">
      <Header />
      <Row>
        <Col>
          <Button variant="primary" onClick={start}>
            Start
          </Button>
        </Col>
      </Row>
      <Footer />
    </Container >
  );
}

const mapDispatchToProps = {
  start
}
export default connect(undefined, mapDispatchToProps)(App);
