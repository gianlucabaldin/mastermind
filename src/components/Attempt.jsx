import React, { useState } from "react";
import { Col, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { abort, insertAttempt } from "../store/actions/mastermindActions";
import PropTypes from "prop-types";
import "../style/attempt.css";

const Attempt = ({ abort, insertAttempt }) => {
  const emptyAttempt = {
    n1: "",
    n2: "",
    n3: ""
  }
  const [invalidMessage, setInvalidMessage] = useState();
  const [attempt, setAttempt] = useState(emptyAttempt);

  const updateField = e => {
    setAttempt({
      ...attempt,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    for (let n in attempt) {
      const element = attempt[n];
      if (isNaN(element) || Number(element) <= 0 || Number(element) > 9) {
        setInvalidMessage(
          "Error: please input three numbers within range [1-9]"
        );
        return;
      }
    }

    insertAttempt([
      Number(attempt.n1),
      Number(attempt.n2),
      Number(attempt.n3)
    ]);
    setInvalidMessage("");
    setAttempt(emptyAttempt);
    return;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} xs={3}>
          <Form.Label>Next attempt:</Form.Label>
        </Form.Group>
        <Form.Group required as={Col} xs={1} controlId="n1">
          <Form.Control
            type="text"
            name="n1"
            required
            value={attempt.n1}
            onChange={updateField}
          />
        </Form.Group>
        <Form.Group required as={Col} xs={1} controlId="n2">
          <Form.Control
            type="text"
            name="n2"
            required
            value={attempt.n2}
            onChange={updateField}
          />
        </Form.Group>
        <Form.Group required as={Col} xs={1} controlId="n3">
          <Form.Control
            type="text"
            name="n3"
            required
            value={attempt.n3}
            onChange={updateField}
          />
        </Form.Group>
        <Form.Group as={Col} xs={2}>
          <Button
            variant="primary"
            type="submit"
          >
            Insert
          </Button>
        </Form.Group>
        <Form.Group controlId="error">
          <Form.Label>{invalidMessage}</Form.Label>
        </Form.Group>
      </Form.Row>
      <Button variant="primary" onClick={() => abort()}>
        Abort
      </Button>
    </Form>
  );
};

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
