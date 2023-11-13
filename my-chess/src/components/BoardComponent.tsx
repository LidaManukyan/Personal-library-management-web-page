import React, { useEffect, useState } from "react";
import { Board } from "../models/board";
import CellComponent from "./CellComponent";
import { Cell } from "../models/cell";
import { Kinght } from "../models/figures/Kinght";
import { Colors } from "../models/color";


interface BoardProps{
    board: Board;
     setBoard:(board:Board)=>void
}
const BoardComponent:React.FC<BoardProps>=({board,setBoard})=>{
    const [selectedCell, setSelectedCell]=useState<Cell | null>(null)

    function click(cell: Cell) {
        console.log('Clicked cell:', cell);
        console.log('Selected cell:', selectedCell);
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
          console.log('Moving figure to the clicked cell:', selectedCell.figure);
          selectedCell.moveFigure(cell);
          setSelectedCell(null);
        } else {
          setSelectedCell(cell);
        }
      }
      
      
    
    
    function getMove() {
        board.getMove(selectedCell);
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
        console.log('Updated board with available moves:', newBoard);
    }

    useEffect(()=>{
        getMove();
    },[selectedCell])

    return(
        <div className="board">
            {
                board.cells.map((row,rowIndex)=>
                <React.Fragment key={rowIndex}>
                    {row.map(cell=>
                    <CellComponent
                    click={click}
                    cell={cell}
                    key={cell.id}
                    selected={ cell.x===selectedCell?.x && cell.y===selectedCell?.y}
                    
                    />)
                    }
                </React.Fragment>
                )
            }
        </div>
    )
}



export default BoardComponent