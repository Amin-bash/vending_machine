import React from 'react';
import styles from './styles.module.scss';

const AmountInfo = (props) => {
	return (
		<div className={styles.moneyInfo}>
			<span>Amount: {props.amountEntered}</span>
			<span>Cod: {props.keyPadInput}</span>
			<span>{props.successMessage}</span>
			<span>{props.errorMessage}</span>
		</div>
	);
};

export default AmountInfo;
