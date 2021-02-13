import React, { useState, useEffect } from 'react';
import Rows from './Components/Rows';
import { checkResult } from './Utilities/ResultValidation'
import './App.css';

const App = () => {

	/* Initial State */
	const [player1, setPlayer1] = useState("");
	const [player2, setPlayer2] = useState("");
	const [currentPlayer, setCurrentPlayer] = useState("");
	const [board, setBoard] = useState([]);
	const [gameResult, setGameResult] = useState("");
	const [gameStatus, setGameStatus] = useState("");

	 useEffect(() => initBoard(), []);

	const initBoard = () => {
		 /* Creating a board */
			let newBoard = [];
			for (let row = 0; row < 6; ++row) {
				let rows = [];
				for (let column = 0; column < 7; ++column) {
					rows.push(null)
				}
					newBoard.push(rows);
			}

			/* Setting initial state */
			setBoard(newBoard);
			setPlayer1('player1');
			setPlayer2('player2');
			setCurrentPlayer('player1');
			setGameResult('')
		}

		const playGame = column => {
		 if(gameResult) {
			 setGameStatus('Game over');
		 } else {
				 for (let row = 5; row >= 0; --row) {
					 if (!board[row][column]) {
						 board[row][column] = currentPlayer;
						 break;
					 }
				 }

			let result = checkResult(board);
			/* Declare the winner  if any or change the turn */
			if (result === player1) {
				setGameResult('Player 1 wins');
			} else if (result === player2) {
				setGameResult('Player 2 wins');
			} else if (result === 'Tie') {
				setGameResult('Tie');
			} else {
				changeTurn(currentPlayer);
			}
		}
	}

		const changeTurn = currentPlayerPlaying =>
			currentPlayerPlaying === player1
					? setCurrentPlayer(player2)
					: setCurrentPlayer(player1)

	return (
		<div className="App">

			<div>
				<table>
					<tbody>
						{board.map((row, i) => <Rows key={i} row={row} game={playGame} />)}
					</tbody>
				</table>
				<div className={"lowerPanel"}>
				<div className={"playerDetails"}>
					<span className="playerName">{'Player 1'} </span>
					<span className={"player1Color"} > </span>
					<span className="playerName">{'Player 2'} </span>
					<span className={"player2Color"} > </span>
				</div>
					{gameResult && <div className={"winner"}> {`Winner is ${currentPlayer}`}</div>}
					{gameStatus && <div> {'Game Over start new game'}</div>}
					<button className="button" onClick={() => {initBoard()}}>{'New Game'}</button>
				</div>
			</div>
		</div>
	);
}

export default App;
