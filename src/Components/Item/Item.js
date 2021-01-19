import React from 'react';

import styles from './styles.module.scss';

const Item = ({ itemId, itemName, itemPrice, itemCount, imgUrl }) => {
	return (
		<div className={styles.itemWrapper}>
			{[ ...Array(itemCount).keys() ].map((idx) => (
				<div  className={styles.productImage + ' ' + styles[`order-${idx}`]} >
					{/* <img className={styles.productImage + ' ' + styles[`order-${idx}`]} src={imgUrl} /> */}
					<img src={imgUrl} />
          <p className={styles.price}>{itemPrice}</p>
				</div>
			))}
		</div>
	);
};

export default Item;
