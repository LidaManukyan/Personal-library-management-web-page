import React from 'react';
import './App.css';

const CheckBoard = () => {

  const chessboardSquares = [];

  for (let col = 0; col < 8; col++) {
    for (let row = 0; row < 8; row++) {
      
      const position = `${col}.${7 - row}`; 

      chessboardSquares.push(
        position
      );
    }
  }

  return (
    <div>
      {chessboardSquares}
    </div>
  );
};

export default CheckBoard;
