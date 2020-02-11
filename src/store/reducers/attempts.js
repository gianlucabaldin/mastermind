import { START, ATTEMPT, RESET } from '../consts/consts'

const initialState = {
  playing: false,
  attempts: []
}

export const attempts = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        ...state
      }
    case ATTEMPT:
      return {
        ...state
      }
    case RESET:
      return {
        ...state
      }
    default:
      return state
  }
}