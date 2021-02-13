import React from 'react';
import Cell from './Cell';

const Rows = ({ row, game }) => {

	return <tr>{row && row.map((cell, i) => {
		return <Cell cell={cell} id={i} key={i} game={game} />}
	)}</tr>
};

export default Rows;
