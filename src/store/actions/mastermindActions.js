import {
  START,
  ATTEMPT,
  ABORT,
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

export const toggleVisibilty = () => ({
  type: TOGGLE_MODAL
});
