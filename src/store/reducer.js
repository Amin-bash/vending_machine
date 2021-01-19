import { ADD_AMOUNT, SET_ITEMS, TOGGLE_KEYPAD_STATE} from './constants';

const initialState = {
  items: [],
  amountEntered: 0,
  keyPadActive: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_AMOUNT: 
      return {
        ...state,
        amountEntered: state.amountEntered + action.payload.amount
      }
    case SET_ITEMS: 
      return {
        ...state,
        items: action.payload.items
      }
    case TOGGLE_KEYPAD_STATE:
      return {
        ...state,
        keyPadActive: action.payload.value
      }
    default:
      return state
  }
}