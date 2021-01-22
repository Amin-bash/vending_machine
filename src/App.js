import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import {} from "redux-thunk"
import styles from './App.scss';

import getData from './api';
import { addAmount, setItems, toggleKeypad, keypadButtonClick, removeOutputMessage } from './store/actions';

import Wallet from './Components/Wallet/Wallet';
import VendingMachine from './Components/VendingMachine/VendingMachine';
import Item from './Components/Item/Item';
import KeyPad from './Components/KeyPad/KeyPad';
import AmountInfo from './Components/AmountInfo/AmountInfo';

const App = () => {
	const dispatch = useDispatch();
	const { amountEntered, items, keyPadActive, keyPadInput, errorMessage, successMessage } = useSelector((store) => ({
		amountEntered: store.amountEntered,
		items: store.items,
		keyPadActive: store.keyPadActive,
		keyPadInput: store.keyPadInput,
		errorMessage: store.errorMessage,
		successMessage: store.successMessage
	}));

	React.useEffect(() => {
			dispatch(setItems(getData()));
  },[ dispatch ]);

  React.useEffect(() => {
    if(successMessage || errorMessage) {
      setTimeout(() => {
        dispatch(removeOutputMessage())  
      }, 2000);
    }
  },[errorMessage, successMessage, dispatch])

	const itemColumns = items.map((column) => column.map((item) => <Item {...item} />));
	return (
		<div className="App">
			{keyPadActive && (
				<KeyPad
					onClosePad={() => dispatch(toggleKeypad(false))}
					onButtonClick={(value) => dispatch(keypadButtonClick(value))}
				/>
			)}
			<VendingMachine itemColumns={itemColumns} onOpenKeyPad={() => dispatch(toggleKeypad(true))} />
			<AmountInfo
				amountEntered={amountEntered}
				keyPadInput={keyPadInput}
				successMessage={successMessage}
				errorMessage={errorMessage}
			/>
			<Wallet onClickMoney={(money) => dispatch(addAmount(money))} />
		</div>
	);
};

export default App;
