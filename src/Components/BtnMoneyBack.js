import React from 'react';

const BtnMoneyBack = (props) => {
  const {lastPurchased, moneyBack, money} = props; 
		return (
			lastPurchased || money ? <button onClick={moneyBack} className="btn btn-success">
				Get your {lastPurchased ? (lastPurchased).toLowerCase() : null} {lastPurchased && money ? 'and' : null } {money ? 'money' : null} 
			</button> : <button className="btn btn-success" disabled>Get your money</button>  
		)
};

export default BtnMoneyBack;

// BtnMoneyBack.propTypes = {
//   money: React.PropTypes.number,
//   moneyBack: React.PropTypes.func,
//   lastPurchased: React.PropTypes.string
// }