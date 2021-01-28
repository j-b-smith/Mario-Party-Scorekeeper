import React from 'react'

function GameHeader({board, date}){
  return (
    <div className="game-header yellow-header">
      <span>Board: {board}</span>
      <span>Date: {date}</span>
    </div>
  );
}
export default GameHeader;
