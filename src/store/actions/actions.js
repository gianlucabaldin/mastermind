import {START, ATTEMPT, RESET} from '../consts/consts'

export const start = () => ({
  type: START
})

export const attempt = () => ({
  type: ATTEMPT
})

export const reset = () => ({
  type: RESET
})