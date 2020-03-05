import React from "react";
import {
  checkRightNumberWrongPosition,
  checkRightNumberRightPosition
} from "../shared/coreFunctions";

const CustomRow = props => (
  <tr key={props.index}>
    <td># {props.index + 1}</td>
    <td>{props.attempt[0]}</td>
    <td>{props.attempt[1]}</td>
    <td>{props.attempt[2]}</td>
    <td>
      {checkRightNumberWrongPosition(props.secretCombination, props.attempt)}
    </td>
    <td>
      {checkRightNumberRightPosition(props.secretCombination, props.attempt)}
    </td>
  </tr>
);

// the function to be passed to React.memo() to avoid re-render if the row
// has already be printed in the Board (and won't ever need to be updated)
const checkUpdate = (prevProps, nextProps) => {
  return prevProps.attempt === nextProps.attempt ? true : false;
};

// export the memoized component
export default React.memo(CustomRow, checkUpdate);
