import React, { useEffect, useState } from "react";
import { Board } from "../models/board";
import CellComponent from "./CellComponent";
import { Cell } from "../models/cell";

interface BoardProps{
    board: Board;
     setBoard:(board:Board)=>void
    
}

const BoardComponent:React.FC<BoardProps>=({board,setBoard})=>{
    const [selectedCell, setSelectedCell]=useState<Cell | null>(null)

    function click(cell:Cell){
      if(selectedCell && selectedCell !== cell){ 
            selectedCell.moveFigure(cell)
            setSelectedCell(null)// ընտրված դաշտը զրոյացնում ենք
            // updateBoard()

      } if (cell.figure) { 
            setSelectedCell(cell)
      } 
         //փոխում ենք state-ը՝ տալով ընտրված դաշտը
    }


    // useEffect(()=>{
    //     updateBoard()
    // },[])

    
    function updateBoard(){
        const newBoard=board.getCopyBoard()
        setBoard(newBoard)
    }


    return(
        <div className="board">
            {
                board.cells.map((row,index)=>
                <React.Fragment key={index}>
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