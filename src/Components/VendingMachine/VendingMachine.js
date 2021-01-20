import React from 'react';

import VendingMachineBackground from '../../img/vending_background.jpg';
import styles from './styles.module.scss';

const VendingMachine = ({ itemColumns, onOpenKeyPad }) => {
	return (
		<div className={styles.vendingWrapper}>
			{itemColumns.map((itemColumn, idx) => (
				<div key={idx} className={styles.itemsWrapper + ' ' + styles[`line-${idx}`]}>
					{itemColumn.map((item) => <div className={styles.itemWrapper}>{item}</div>)}
				</div>
			))}
			<img className={styles.vendingBackground} src={VendingMachineBackground} />
			<button onClick={onOpenKeyPad}>Pad</button>
		</div>
	);
};

export default VendingMachine;
