import React from 'react';

const Available = ({money}) => {
  return (
		<div className="result">${money}</div>			
	)
};

export default Available;

// Available.propTypes = {
//   money: React.PropTypes.number
// }