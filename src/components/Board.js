import React from "react";
import { Table, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { start } from "../store/actions/mastermindActions";
import PropTypes from "prop-types";

const Board = ({ playing, start }) => {
  if (!playing) {
    return (
      <Row>
        <Col>
          <Button variant="primary" onClick={() => start()}>
            Start
          </Button>
        </Col>
      </Row>
    )
  } else {
    return (
      <>
        <Row>
          <Col>
            <Table>Table (TODO)</Table>
          </Col>
        </Row>
      </>
    );
  }
};

const mapStateToProps = ({ reducer }) => ({
  playing: reducer.playing,
});

const mapDispatchToProps = {
  start
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);

// check types
Board.propTypes = {
  playing: PropTypes.bool
};
