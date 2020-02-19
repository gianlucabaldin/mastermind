import {
  START,
  INSERT_ATTEMPT,
  TOGGLE_MODAL,
  RESET
} from "../consts/mastermindConsts";
import { getRandomCombination } from "../../shared/coreFunctions";

const initialState = {
  playing: false,
  attempts: [],
  startingTime: Date.now(),
  attemptsCounter: 0,
  secretCombination: [],
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
        secretCombination: getRandomCombination(),
        playing: true
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
          visible: !state.modal.visible,
          ...action.payload
        }
      };
    }
    case RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
