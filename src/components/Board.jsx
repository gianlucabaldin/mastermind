import React from "react";
import { Table, Row, Col, Button } from "react-bootstrap";
import Attempt from "./Attempt";
import { connect } from "react-redux";
import { start } from "../store/actions/mastermindActions";
import {
  checkRightNumberWrongPosition,
  checkRightNumberRightPosition
} from "../shared/coreFunctions";
import PropTypes from "prop-types";
import "../style/board.css";

const Board = ({ playing, start, attempts, secretCombination }) => {
  if (!playing) {
    return (
      <Row>
        <Col>
          <Button
            variant="primary"
            onClick={() => start()}
            data-test="btn-start"
          >
            Start
          </Button>
        </Col>
      </Row>
    );
  } else {
    return (
      <>
        {attempts && attempts.length > 0 && (
          <Row>
            <Col>
              <Table>
                <thead>
                  <tr>
                    <td>Attempt</td>
                    <td>N.1</td>
                    <td>N.2</td>
                    <td>N.3</td>
                    <td>
                      Right number(s)
                      <br /> in wrong position
                    </td>
                    <td>
                      Right number(s)
                      <br /> in right position
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {attempts.map((attempt, index) => (
                    <tr key={index}>
                      <td># {index + 1}</td>
                      <td>{attempt[0]}</td>
                      <td>{attempt[1]}</td>
                      <td>{attempt[2]}</td>
                      <td>
                        {checkRightNumberWrongPosition(
                          secretCombination,
                          attempt
                        )}
                      </td>
                      <td>
                        {checkRightNumberRightPosition(
                          secretCombination,
                          attempt
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        )}
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
  attempts: reducer.attempts,
  secretCombination: reducer.secretCombination
});

const mapDispatchToProps = {
  start
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);

// check types
Board.propTypes = {
  playing: PropTypes.bool,
  start: PropTypes.func,
  attempts: PropTypes.array,
  secretCombination: PropTypes.array
};
