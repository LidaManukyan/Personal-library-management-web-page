import React, { useEffect, useState } from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import { Board } from './models/board';
//import CheckBoard from './CheckBoard';

function App() {
  const[board, setBoard]= useState(new Board())

  const restart=()=>{
    const newBoard=new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  useEffect(()=>{
    restart()
  },[])
  return (
    <div className="app">
     <BoardComponent
     board={board}
     />

     {/* <CheckBoard/> */}

    </div>
  );
}

export default App;
