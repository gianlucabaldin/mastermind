import React from "react";
import { Table, Row, Col, Button } from "react-bootstrap";
import Attempt from "./Attempt";
import { connect } from "react-redux";
import { start, abort } from "../store/actions/mastermindActions";
import PropTypes from "prop-types";

const Board = ({ playing, start, abort, attempts }) => {
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
            <Table>
              <thead>
                <tr>
                  <td>Attempt</td>
                  <td>Number 1</td>
                  <td>Number 2</td>
                  <td>Number 3</td>
                  <td>Right number</td>
                  <td>Right position</td>
                </tr>
              </thead>
              <tbody>
                {attempts.map((attempt, index) => (
                  <tr>
                    <td>{index+1}</td>
                    <td>{attempt[0]}</td>
                    <td>{attempt[1]}</td>
                    <td>{attempt[2]}</td>
                    <td>to-do</td>
                    <td>to-do</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <Attempt />
          </Col>
        </Row>
      </>
    );
  }
};

const mapStateToProps = ({ reducer }) => ({
  playing: reducer.playing,
  attempts: reducer.attempts
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
