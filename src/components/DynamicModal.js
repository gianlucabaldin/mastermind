import React from 'react'
import { connect } from 'react-redux'
import { toggleVisibilty, reset } from '../store/actions/mastermindActions'
import { Modal, Button } from 'react-bootstrap';
import '../style/modal.css';
import PropTypes from 'prop-types';

const DynamicModal = ({ visible, title, content, confirmButton, toggleVisibilty, reset }) => (
  <Modal show={visible} onHide={toggleVisibilty}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        Content: {content}
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={confirmButton} className="mr-2" >
        {confirmButton}
      </Button>
      <Button variant="primary" onClick={reset} >
        Reset
      </Button>
    </Modal.Footer>
  </Modal >
)

// check types
Modal.propTypes = {
  // variables
  visible: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
  confirmButton: PropTypes.string,
  // actions
  toggleVisibilty: PropTypes.func,
  reset: PropTypes.func
}

const mapStateToProps = ({ mastermind }) => ({
  visible: mastermind.modal.visible,
  title: mastermind.modal.title,
  content: mastermind.modal.content,
  confirmButton: mastermind.modal.confirmButton
})

const mapDispatchToProps = {
  toggleVisibilty,
  reset
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DynamicModal)