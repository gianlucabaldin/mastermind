import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Board from './components/Board'

const App = () => {
  return (
    <Container className="App">
      <Header />
      <Board />
      <Footer />
    </Container >
  );
}


export default App;
