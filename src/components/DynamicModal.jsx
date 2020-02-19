import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "../store/actions/mastermindActions";
import { abort } from "../shared/attemptsHelper";
import { Modal, Button } from "react-bootstrap";
import "../style/modal.css";
import PropTypes from "prop-types";

const DynamicModal = ({ visible, title, content, toggleModal }) => (
  <Modal show={visible} onHide={toggleModal}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>{content}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={abort}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

// check types
Modal.propTypes = {
  // variables
  visible: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
  // actions
  toggleModal: PropTypes.func
};

const mapStateToProps = ({ reducer }) => ({
  visible: reducer.modal.visible,
  title: reducer.modal.title,
  content: reducer.modal.content
});

const mapDispatchToProps = {
  toggleModal
};

export default connect(mapStateToProps, mapDispatchToProps)(DynamicModal);
