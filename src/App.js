import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';

import Items from './Components/Items';
import MoneyPayment from './Components/MoenyPayment';
import Available from './Components/Available';
import BtnMoneyBack from './Components/BtnMoneyBack';

import getData from './api';
import { addAmount, setItems, toggleKeypad, keypadButtonClick } from './store/actions';

import logo from './img/react.png';
import twix from './img/twix.jpg';
import coke from './img/pngfind.com-pepsi-can-png-843265.png';
import jus from './img/another-juice.png';
import Choco from './img/cola.png';
import peanuts from './img/power-drink.png';
import water from './img/water.png';
import pents from './img/fat-burner.png';
import Nesck from './img/power-drink-2.png';
import Wallet from './Components/Wallet/Wallet';
import VendingMachine from './Components/VendingMachine/VendingMachine';
import Item from './Components/Item/Item';
import KeyPad from './Components/KeyPad/KeyPad';

class Apps extends Component {
	constructor() {
		super();
		this.state = {
			items: [
				{ itemId: 'a01', itemName: 'Twix', itemPrice: 1, itemCount: 2, imgUrl: twix },
				{ itemId: 'a02', itemName: 'Coke', itemPrice: 2.4, itemCount: 3, imgUrl: coke },
				{ itemId: 'a03', itemName: 'Jus', itemPrice: 1.5, itemCount: 4, imgUrl: jus },
				{ itemId: 'a04', itemName: 'Choco', itemPrice: 1.4, itemCount: 1, imgUrl: Choco },
				{ itemId: 'b04', itemName: 'Peanuts', itemPrice: 1, itemCount: 1, imgUrl: peanuts },
				{ itemId: 'b01', itemName: 'Water', itemPrice: 0.95, itemCount: 2, imgUrl: water },
				{ itemId: 'b02', itemName: 'Peanuts', itemPrice: 1.25, itemCount: 3, imgUrl: pents },
				{ itemId: 'b03', itemName: 'Chips', itemPrice: 1.3, itemCount: 4, imgUrl: Nesck }
			],
			money: 0,
			coins: [ 0.05, 0.1, 0.25, 0.5, 1 ],
			isPurchaseAlowed: true,
      justPurchased: '',
      keyPadActive: false,
		};
		this.addValue = this.addValue.bind(this);
		this.moneyBack = this.moneyBack.bind(this);
		this.purchaseItem = this.purchaseItem.bind(this);
	}

	addValue(e) {
		const currentValue = this.state.money;
		const isPurchaseAlowed = this.state.isPurchaseAlowed;
		const justPurchased = this.state.justPurchased;
		const addedValue = parseFloat(e.target.value, 10);
		const newValue = currentValue + addedValue;

		if (isPurchaseAlowed) {
			this.setState({
				money: parseFloat(newValue.toFixed(2), 10)
			});
		} else {
			alert(
				`One item at a time please. Collect your ${justPurchased.toLowerCase()} first, and then make new purchase.`
			);
		}
	}

	moneyBack() {
		this.setState({
			money: 0,
			isPurchaseAlowed: true,
			justPurchased: ''
		});
	}

	purchaseItem(e) {
		e.preventDefault();
		const currentState = this.state.items.slice(0);
		const isPurchaseAlowed = this.state.isPurchaseAlowed;
		let currentMoney = this.state.money;
		const justPurchased = this.state.justPurchased;
		const index = e.target.getAttribute('data-value');
		const howMany = currentState[index].itemCount;
		const whichItem = currentState[index].itemName;
		const itemPrice = currentState[index].itemPrice;

		if (howMany > 0 && isPurchaseAlowed && itemPrice > currentMoney) {
			alert("It looks like you don't have enough money. Insert some coins.");
		}

		if (!isPurchaseAlowed) {
			alert(
				`One item at a time please. Collect your ${justPurchased.toLowerCase()} first, and then make new purchase.`
			);
		}

		if (isPurchaseAlowed && howMany < 1) {
			alert('Out of stock. Would you like something else?');
		}

		if (isPurchaseAlowed && howMany > 0 && currentState[index].itemCount > 0 && itemPrice <= currentMoney) {
			currentState[index].itemCount -= 1;
			currentMoney -= itemPrice;

			this.setState({
				items: currentState,
				money: parseFloat(currentMoney.toFixed(2), 10),
				isPurchaseAlowed: !isPurchaseAlowed,
        justPurchased: whichItem,
			});
		}
	}

	render() {
    const itemColumns = [...Array(5).keys()].map(column => this.state.items.map(item => <Item {...item} />))
		return (
			<div className="App">
        {this.state.keyPadActive && <KeyPad/>}
        <VendingMachine itemColumns={itemColumns} onOpenKeyPad={() => this.setState({keyPadActive: true})}/>
        <Wallet onClickMoney={(money) => console.log(money)}s/>
			</div>
		);
	}
}


const App = () => {
  const dispatch = useDispatch();
  const { amountEntered, items, keyPadActive, keyPadInput, errorMessage, successMessage } = useSelector((store) => ({
    amountEntered: store.amountEntered,
    items: store.items,
    keyPadActive: store.keyPadActive,
    keyPadInput: store.keyPadInput,
    errorMessage: store.errorMessage,
    successMessage: store.successMessage,
  }));

  React.useEffect(() => {
    dispatch(setItems(getData()));
  }, [dispatch])


  const itemColumns = items.map(column => column.map(item => <Item {...item} />));
  return (
    <div className="App">
      {keyPadActive && <KeyPad onClosePad={() => dispatch(toggleKeypad(false))} onButtonClick={(value) => dispatch(keypadButtonClick(value))}/>}
      <VendingMachine itemColumns={itemColumns} onOpenKeyPad={() => dispatch(toggleKeypad(true))}/>
      <div style={{zIndex: 10000000, color: "black", position: "relative"}}>
        {amountEntered}-
        {keyPadInput}-
        {successMessage}-
        {errorMessage}
      </div>
      <Wallet onClickMoney={(money) => dispatch(addAmount(money))} />
    </div>
  );
};

export default App;