import {
  START,
  INSERT_ATTEMPT,
  TOGGLE_MODAL,
  RESET
} from "../consts/mastermindConsts";

export const start = () => ({
  type: START
});

export const reset = () => ({
  type: RESET
});

export const insertAttempt = newAttempt => ({
  type: INSERT_ATTEMPT,
  payload: newAttempt
});

export const toggleModal = modalProps => ({
  type: TOGGLE_MODAL,
  payload: modalProps
});
