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
    // const [validMoves, setValidMoves]=useState<boolean[][]>( Array(8)
    // .fill(false)
    // .map(() => Array(8).fill(false)))


    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
          selectedCell.moveFigure(cell);
          setSelectedCell(null);
        } else {
          setSelectedCell(cell);
          // Calculate valid moves for the selected cell (knight)
        //   if (cell.figure instanceof Kinght && cell.figure.color === Colors.WHITE) {
        //     const moves = cell.figure.calculatePossibleMoves(board);
      
        //     // Initialize a 2D array of booleans to represent valid moves
        //     const newValidMoves = Array(8).fill(false).map(() => Array(8).fill(false));
      
        //     moves.forEach((move:any) => {
        //       newValidMoves[move.x][move.y] = true; // Set to true for valid moves
        //     });
      
        //     setValidMoves(newValidMoves);
        //   } else {
        //     // Clear validMoves when there's no selected cell
        //     setValidMoves(Array(8).fill(false).map(() => Array(8).fill(false)));
        //   }
        }
      }

    function getMove() {
        board.getMove(selectedCell);
        
        updateBoard();
    }
    function updateBoard(){
        const newBoard=board.getCopyBoard()
        setBoard(newBoard)
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
                    // validMoves={validMoves[cell.x][cell.y]}
                    />)
                    }
                </React.Fragment>
                )
            }
        </div>
    )
}



export default BoardComponent