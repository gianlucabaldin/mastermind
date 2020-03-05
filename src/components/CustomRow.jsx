import React from "react";
import {
  checkRightNumberWrongPosition,
  checkRightNumberRightPosition
} from "../shared/coreFunctions";

const CustomRow = ({index, attempt, secretCombination}) => (
  <tr key={index}>
    <td># {index + 1}</td>
    <td>{attempt[0]}</td>
    <td>{attempt[1]}</td>
    <td>{attempt[2]}</td>
    <td>
      {checkRightNumberWrongPosition(secretCombination, attempt)}
    </td>
    <td>
      {checkRightNumberRightPosition(secretCombination, attempt)}
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
