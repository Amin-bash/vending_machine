import React from 'react';

import styles from './styles.module.scss';

const Item = ({ itemId, itemName, itemPrice, itemCount, imgUrl }) => {
	return (
		<div className={styles.itemWrapper}>
			{[ ...Array(itemCount).keys() ].map((idx) => (
				<div  className={styles.productImage + ' ' + styles[`order-${idx}`]} >
					{/* <img className={styles.productImage + ' ' + styles[`order-${idx}`]} src={imgUrl} /> */}
					<img src={imgUrl} />
          
				</div>
			))}
      <div className={styles.productStats}>
        <p className={styles.price}>{itemPrice} RON</p>
        <p className={styles.price}>COD:{itemId}</p>
      </div>
		</div>
	);
};

export default Item;
