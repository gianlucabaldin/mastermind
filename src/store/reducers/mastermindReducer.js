import { START, ATTEMPT, RESET, OPEN_MODAL, TOGGLE_VISIBILITY } from '../consts/mastermindConsts'

const initialState = {
  playing: false,
  attempts: [],
  prova: "ciao",
  modal: {
    visible: true,
    title: "title prova",
    content: "content prova",
    confirmButton: "Confirm"
  }
}

export const mastermind = (state = initialState, action) => {
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
    case TOGGLE_VISIBILITY: {
      return {
        ...state,
        modal: {
          visible: !state.modal.visible
        }
      }
      // case OPEN_MODAL: {
      //   return {
      //     ...state,
      //     modal: {
      //       visible: true
      //     }
      //   }
    }
    default:
      return state
  }
}