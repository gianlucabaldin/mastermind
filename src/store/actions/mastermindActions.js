import {START, ATTEMPT, RESET, OPEN_MODAL, TOGGLE_VISIBILITY} from '../consts/mastermindConsts'

export const start = () => ({
  type: START
})

export const attempt = () => ({
  type: ATTEMPT
})

export const reset = () => ({
  type: RESET
})

// export const openModal = () => ({
//   type: OPEN_MODAL
// })

export const toggleVisibilty = () => ({
  type: TOGGLE_VISIBILITY
})