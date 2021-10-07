const Board = ({ gameBoard, handleClick }) => {
  return (
    <div className="board">
      {gameBoard.map((item, index) => {
        if (item === "") {
          return (
            <div key={index} className="square" onClick={() => handleClick(index)}>
              {item}
            </div>
          );
        } else {
          return (
            <div key={index} className="square">
              {item}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Board;