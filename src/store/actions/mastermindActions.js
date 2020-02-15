import {
  START,
  ATTEMPT,
  ABORT,
  INSERT_ATTEMPT,
  TOGGLE_MODAL
} from "../consts/mastermindConsts";

export const start = () => ({
  type: START
});

export const attempt = () => ({
  type: ATTEMPT
});

export const abort = () => ({
  type: ABORT
});

export const insertAttempt = (newAttempt) => ({
  type: INSERT_ATTEMPT,
  payload: newAttempt
});

export const toggleVisibilty = () => ({
  type: TOGGLE_MODAL
});
