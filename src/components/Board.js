import React from 'react';
import { Table, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { start } from '../store/actions/mastermindActions'

const Board = () => {

  return (
    <>
      <Row>
        <Col>
          <Button variant="primary" onClick={start}>
            Start
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table>Table (TODO)</Table>
        </Col>
      </Row>
    </>
  )
}

const mapDispatchToProps = {
  start
}

export default connect(undefined, mapDispatchToProps)(Board);