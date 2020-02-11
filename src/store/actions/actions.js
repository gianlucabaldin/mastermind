import { INCREMENT, TOGGLE_VISIBILITY, RESET} from '../const/consts'

export const increment = () => ({
  type: INCREMENT
})

export const toggleVisibilty = () => ({
  type: TOGGLE_VISIBILITY
})

export const reset = () => ({
  type: RESET
})