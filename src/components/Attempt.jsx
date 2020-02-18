import React, { useState } from "react";
import { Col, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { abort, insertAttempt } from "../store/actions/mastermindActions";
import PropTypes from "prop-types";

const Attempt = ({ abort, insertAttempt }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(false);
    }
    // setValidated(true);
    insertAttempt([
      Number(form.elements.n1.value),
      Number(form.elements.n2.value),
      Number(form.elements.n3.value)
    ]);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} xs={3}>
          <Form.Label>Next attempt:</Form.Label>
        </Form.Group>
        <Form.Group required as={Col} xs={1} controlId="n1">
          <Form.Control type="text" />
          <Form.Control.Feedback type="invalid">
            Insert number!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group required as={Col} xs={1} controlId="n2">
          <Form.Control type="text" />
          <Form.Control.Feedback type="invalid">
            Insert number!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group required as={Col} xs={1} controlId="n3">
          <Form.Control type="text" />
          <Form.Control.Feedback type="invalid">
            Insert number!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} xs={2}>
          <Button
            variant="primary"
            type="submit"
            // onClick={() =>
            // insertAttempt([ref.n1.value], [n2.value], [n3.value])
            // handleSubmit()
            // }
          >
            Insert
          </Button>
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
