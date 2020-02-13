import {
  START,
  ATTEMPT,
  RESET,
  OPEN_MODAL,
  TOGGLE_MODAL
} from "../consts/mastermindConsts";
import { getRandomTriad } from "../../shared/attempts";

const initialState = {
  playing: false,
  attempts: [],
  prova: "ciao",
  secretTriad: [],
  modal: {
    visible: false,
    title: "title prova",
    content: "content prova",
    confirmButton: "Confirm"
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
    case RESET:
      return {
        ...state
      };
    case TOGGLE_MODAL: {
      return {
        ...state,
        modal: {
          visible: !state.modal.visible
        }
      };
    }
    case OPEN_MODAL: {
      return {
        ...state,
        modal: {
          visible: true
        }
      };
    }
    default:
      return state;
  }
};
