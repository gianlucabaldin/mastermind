import React from 'react'
import { connect } from 'react-redux'
import { toggleModal, abort } from '../store/actions/mastermindActions'
import { Modal, Button } from 'react-bootstrap';
import '../style/modal.css';
import PropTypes from 'prop-types';

const DynamicModal = ({ visible, title, content, confirmButton, toggleModal, abort }) => (
  <Modal show={visible} onHide={toggleModal}>
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
      <Button variant="primary" onClick={abort} >
        Close
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
  toggleModal: PropTypes.func,
  abort: PropTypes.func
}

const mapStateToProps = ({ reducer }) => ({
  visible: reducer.modal.visible,
  title: reducer.modal.title,
  content: reducer.modal.content,
  confirmButton: reducer.modal.confirmButton
})

const mapDispatchToProps = {
  toggleModal,
  abort
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DynamicModal)