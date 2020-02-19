import {
  START,
  ABORT,
  INSERT_ATTEMPT,
  TOGGLE_MODAL
} from "../consts/mastermindConsts";
import { getRandomTriad } from "../../shared/attemptsHelper";

const initialState = {
  playing: false,
  attempts: [],
  won: false,
  startingTime: Date.now(),
  attemptsCounter: 0,
  secretTriad: [],
  modal: {
    visible: false,
    title: "",
    content: ""
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
    case ABORT:
      return {
        ...initialState
      };
    case INSERT_ATTEMPT:
      return {
        ...state,
        attempts: state.attempts.concat([action.payload]),
        won: action.payload === state.secretTriad
      };
    case TOGGLE_MODAL: {
      return {
        ...state,
        modal: {
          visible: !state.modal.visible,
          ...action.payload
        }
      };
    }
    default:
      return state;
  }
};
