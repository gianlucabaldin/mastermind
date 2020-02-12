import React from 'react';
import { Table, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { start } from '../store/actions/mastermindActions'
import PropTypes from 'prop-types';

const Board = ({ playing, prova}) => {
  return (
    <>
      <Row>
        <Col>
          <Button variant="primary" onClick={start}>
            Start
          </Button>
        </Col>
      </Row>
      playing : #{playing}#
      <br/>
      prova : #{prova}#

        <Row>
        <Col>
          <Table>Table (TODO)</Table>
        </Col>
      </Row>
    </>
  )
}

const mapStateToProps = ({ mastermind }) => ({
  playing: mastermind.playing,
  prova: mastermind.prova
})

const mapDispatchToProps = {
  start
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);

// check types
Board.propTypes = {
  playing: PropTypes.bool,
  prova: PropTypes.string
}
