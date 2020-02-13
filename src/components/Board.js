import React from "react";
import { Table, Row, Col, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { start, abort } from "../store/actions/mastermindActions";
import PropTypes from "prop-types";

const Board = ({ playing, start, abort }) => {
  if (!playing) {
    return (
      <Row>
        <Col>
          <Button variant="primary" onClick={() => start()}>
            Start
          </Button>
        </Col>
      </Row>
    );
  } else {
    return (
      <>
        <Row>
          <Col>
            <Table>Table (TODO)</Table>
          </Col>
        </Row>

        <Form>
          <Form.Row>
            <Form.Group as={Col} xs={3} controlId="formGridEmail">
              <Form.Label >Insert your attempt</Form.Label>
            </Form.Group>
            <Form.Group as={Col} xs={2} controlId="formGridEmail">
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control type="text" placeholder="number 1" />
            </Form.Group>
            <Form.Group as={Col} xs={2} controlId="formGridEmail">
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control type="text" placeholder="number 2" />
            </Form.Group>
            <Form.Group as={Col} xs={2} controlId="formGridEmail">
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control type="text" placeholder="number 3" />
            </Form.Group>
          </Form.Row>
          <Button variant="primary" onClick={() => abort()}>
            Abort
          </Button>
        </Form>
      </>
    );
  }
};

const mapStateToProps = ({ reducer }) => ({
  playing: reducer.playing
});

const mapDispatchToProps = {
  start,
  abort
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);

// check types
Board.propTypes = {
  playing: PropTypes.bool
};
