import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import DynamicModal from './components/DynamicModal'
import Board from './components/Board'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

const App = ({ modalVisible }) => {

  return (
    <Container className="App">
      <Header />
      <Board />
      <DynamicModal visible={modalVisible} />
      <Footer />
    </Container >
  );
}

const mapStateToProps = ({ reducer }) => ({
  modalVisible: reducer.modal.visible
})

// check types
Board.propTypes = {
  modalVisible: PropTypes.func
}

export default connect(mapStateToProps)(App);
