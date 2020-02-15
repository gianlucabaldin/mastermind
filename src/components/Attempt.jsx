import React from "react";
import { Col, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { abort, insertAttempt } from "../store/actions/mastermindActions";
import PropTypes from "prop-types";

const Attempt = ({ abort, insertAttempt }) => (
  <Form>
    <Form.Row>
      <Form.Group as={Col} xs={3} controlId="formGridEmail">
        <Form.Label>Next attempt:</Form.Label>
      </Form.Group>
      <Form.Group as={Col} xs={1} controlId="formGridEmail">
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group as={Col} xs={1} controlId="formGridEmail">
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group as={Col} xs={1} controlId="formGridEmail">
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group as={Col} xs={2} controlId="formGridEmail">
        <Button variant="primary" onClick={() => insertAttempt([9,9,9])}>
          insert
        </Button>
      </Form.Group>
    </Form.Row>
    <Button variant="primary" onClick={() => abort()}>
      Abort
    </Button>
  </Form>
);

// const mapStateToProps = ({ reducer }) => ({
//   playing: reducer.playing
// });

const mapDispatchToProps = {
  insertAttempt,
  abort
};

// export default connect(mapStateToProps, mapDispatchToProps)(Attempt);
export default connect(undefined, mapDispatchToProps)(Attempt);

// check types
Attempt.propTypes = {
  abort: PropTypes.func
};
