import {
  START,
  ATTEMPT,
  ABORT,
  INSERT_ATTEMPT,
  TOGGLE_MODAL
} from "../consts/mastermindConsts";
import { getRandomTriad } from "../../shared/attempts";

const initialState = {
  playing: false,
  attempts: [],
  won: false,
  attemptsCounter: 0,
  secretTriad: [],
  modal: {
    visible: false,
    title: "",
    content: "",
    confirmButton: ""
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        secretTriad: getRandomTriad(),
        playing: true
      };
    case ATTEMPT:
      return {
        ...state,
        attemptsCounter: state.attemptsCounter++
      };
    case ABORT:
      return {
        ...initialState
      };
    case INSERT_ATTEMPT:
      return {
        ...state,
        attempts: state.attempts.concat([action.payload])
      };
    case TOGGLE_MODAL: {
      return {
        ...state,
        modal: {
          visible: !state.modal.visible
        }
      };
    }
    default:
      return state;
  }
};
