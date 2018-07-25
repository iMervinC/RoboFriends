import React from 'react';

const Scroll = (props) => {
	return(
		<div style={{overflowY: 'scroll', border: 'solid 0px', height: '700px'}}>
			{props.children}
		</div>
		)
	}

export default Scroll;