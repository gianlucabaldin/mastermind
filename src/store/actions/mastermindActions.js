import {START, ATTEMPT, RESET, TOGGLE_MODAL} from '../consts/mastermindConsts'

export const start = () => ({
  type: START
})

export const attempt = () => ({
  type: ATTEMPT
})

export const reset = () => ({
  type: RESET
})

export const toggleVisibilty = () => ({
  type: TOGGLE_MODAL
})