import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { insertAttempt } from "../store/actions/mastermindActions";
import { abort } from "../shared/coreFunctions";
import "../style/attempt.css";
import {
  checkRepeteadValues,
  checkInputsValues,
  checkAttempts
} from "../shared/coreFunctions";
import PropTypes from "prop-types";

const Attempt = ({ insertAttempt }) => {
  const emptyAttempt = {
    n1: "",
    n2: "",
    n3: ""
  };
  const [invalidMessage, setInvalidMessage] = useState();
  const [attempt, setAttempt] = useState(emptyAttempt);

  // saves the input value
  const updateField = e => {
    setAttempt({
      ...attempt,
      [e.target.name]: Number(e.target.value)
    });
  };

  // Check inputs correctness and if the combination is guessed
  const handleSubmit = event => {
    event.preventDefault();
    if (checkInputsValues([attempt.n1, attempt.n2, attempt.n3])) {
      setInvalidMessage("Error: please input three numbers within range [1-9]");
      return;
    }
    if (checkRepeteadValues([attempt.n1, attempt.n2, attempt.n3])) {
      setInvalidMessage(
        "You have inserted a repeated value (not allowed in this version)"
      );
      return;
    }
    // save the compination into the store
    insertAttempt([attempt.n1, attempt.n2, attempt.n3]);
    checkAttempts();
    setInvalidMessage("");
    setAttempt(emptyAttempt);
    return;
  };

  return (
    <Row>
      <Col>
        <Form onSubmit={handleSubmit}>
          <Form.Row className="justify-content-md-center">
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
              <Button variant="primary" type="submit" data-test="insert">
                Insert
              </Button>
            </Form.Group>
          </Form.Row>
          {invalidMessage && invalidMessage !== "" && (
            <Form.Row className="justify-content-md-center">
              <Form.Group controlId="error" className="attempt__invalidMessage">
                <Form.Label>{invalidMessage}</Form.Label>
              </Form.Group>
            </Form.Row>
          )}
          <Button variant="primary" onClick={() => abort()} data-test="abort">
            Abort
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

const mapDispatchToProps = {
  insertAttempt
};

// check types
Attempt.propTypes = {
  insertAttempt: PropTypes.func
};

export default connect(undefined, mapDispatchToProps)(Attempt);
