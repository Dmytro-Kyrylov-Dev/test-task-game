import { useState } from "react";
import Board from "./Board";
import Score from "./Score";

const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Game = () => {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [score, setScore] = useState({ X: 0, O: 0 });

  const gameOver = () => {
    if (!gameFinished) {
      for (let i = 0; i < 8; i++) {
        if (
          gameBoard[winCombination[i][0]] === "X" &&
          gameBoard[winCombination[i][1]] === "X" &&
          gameBoard[winCombination[i][2]] === "X"
        ) {
          setGameFinished(true);
          setScore({ ...score, X: score.X + 1 });
          return;
        }
      }

      for (let i = 0; i < 8; i++) {
        if (
          gameBoard[winCombination[i][0]] === "O" &&
          gameBoard[winCombination[i][1]] === "O" &&
          gameBoard[winCombination[i][2]] === "O"
        ) {
          setGameFinished(true);
          setScore({ ...score, O: score.O + 1 });
          return;
        }
      }
    }
  }

  gameOver();

  const handleClick = (id) => {
    setGameBoard(
      gameBoard.map((item, index) => {
        if (index === id) {
          if (player) {
            return "X";
          } else {
            return "O";
          }
        } else {
          return item;
        }
      })
    );
    setPlayer(!player);
  }

  const restartGame = () => {
    setGameBoard(Array(9).fill(""));
    setGameFinished(false);
  }

  return (
    <div className="game">
      <Board gameBoard={gameBoard} handleClick={handleClick} />
      <Score score={score} restartGame={restartGame} />
    </div>
  );
}

export default Game;