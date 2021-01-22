import { ADD_AMOUNT, SET_ITEMS, TOGGLE_KEYPAD_STATE, KEYPAD_BUTTON_PUSH, REMOVE_OUTPUT_MESSAGE } from './constants';

export const addAmount = (amount) => ({
  type: ADD_AMOUNT,
  payload: {
    amount
  }
});

export const setItems = (items) => ({
  type: SET_ITEMS,
  payload: {
    items
  }
});

export const toggleKeypad = (value) => ({
  type: TOGGLE_KEYPAD_STATE,
  payload: {
    value
  }
});

export const keypadButtonClick = (value) => ({
  type: KEYPAD_BUTTON_PUSH,
  payload: {
    value
  }
});

export const removeOutputMessage = () => ({
  type: REMOVE_OUTPUT_MESSAGE
});