import {
  START,
  ATTEMPT,
  ABORT,
  TOGGLE_MODAL
} from "../consts/mastermindConsts";
import { getRandomTriad } from "../../shared/attempts";

const initialState = {
  playing: false,
  attempts: [[1,2,3], [3,4,5]],
  prova: "ciao",
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
        ...state
      };
    case ABORT:
      return {
        ...initialState
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
