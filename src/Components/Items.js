import React from 'react';
import Item from './Item';

const Items = (props) => {
  const {items, purchaseItem} = props;
		const allItems = items.map((item, i) => {
			return (
				<Item purchaseItem={purchaseItem} item={item} key={item.itemId} i={i} />
		  )
		})
		return (
			<div className="row items-container">
		    {allItems}
		  </div>
		)
};

export default Items;


// Items.propTypes = {
//   items: React.PropTypes.array,
//   purchaseItem: React.PropTypes.func
// }

