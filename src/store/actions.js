import { ADD_AMOUNT, SET_ITEMS, TOGGLE_KEYPAD_STATE } from './constants';

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
