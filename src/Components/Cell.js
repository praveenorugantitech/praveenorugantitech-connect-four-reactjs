import React from 'react';

const Cell = ({ cell, id, game }) => {
	let boxStyle;

	if(cell === 'player2') boxStyle = 'player2BoxStyle';
	else if(cell === 'player1') boxStyle = 'player1BoxStyle';

		return <td>
			<div className={"cell"} key={id} onClick={() => game(id)}>
				<div className={boxStyle} />
			</div>
		</td>

};

export default Cell;
