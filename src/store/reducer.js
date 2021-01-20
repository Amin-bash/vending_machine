import { ADD_AMOUNT, SET_ITEMS, TOGGLE_KEYPAD_STATE, KEYPAD_BUTTON_PUSH} from './constants';

const initialState = {
  items: [],
  amountEntered: 0,
  keyPadActive: false,
  keyPadInput: "",
  errorMessage: "",
  successMessage: "",
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
    case KEYPAD_BUTTON_PUSH:
      const newState = state;
      if(action.payload.value === "OK") {

        if(state.keyPadInput.length === 2) {
          const [i,j] = newState.keyPadInput.split("").map(key => parseInt(key));

          let desiredProduct;
          if(newState.items[i]) {
            desiredProduct = newState.items[i][j-1];
          }
  
          if(desiredProduct && desiredProduct.itemCount > 0 && desiredProduct.itemPrice <= newState.amountEntered) {
            desiredProduct.itemCount -= 1;
            newState.amountEntered -= desiredProduct.itemPrice;
            newState.successMessage = "Produs cumparat !";
            newState.errorMessage = "";
          } else {
            if(!desiredProduct) {
              newState.successMessage = "";
              newState.errorMessage = "Produsul nu a fost găsit";
            } else if(desiredProduct.itemCount <= 0) {
              newState.successMessage = "";
              newState.errorMessage = "Stoc epuizat";
            } else if(desiredProduct.itemPrice > newState.amountEntered) {
              newState.successMessage = "";
              newState.errorMessage = "Nu ati introdus suficienti bani";
            }
          }
        } else {
          newState.successMessage = "";
          newState.errorMessage = "Produsul nu a fost găsit";
        }
        newState.keyPadInput = "";
      } else if(action.payload.value === "<-") {
        newState.keyPadInput = newState.keyPadInput.slice(0, newState.keyPadInput.length -1);
      } else {
        newState.keyPadInput += action.payload.value;
      } 

      setTimeout(() => {
        newState.errorMessage = "";
        newState.successMessage = "";
      }, 20);
  
      return {
        ...newState,
      }
    default:
      return state
    }
    
}