import React from "react";
import { Board } from "../models/board";
import CellComponent from "./CellComponent";

interface BoardProps{
    board: Board;
    
}

const BoardComponent:React.FC<BoardProps>=({board})=>{
    return(
        <div className="board">
            {
                board.cells.map((row,index)=>
                <React.Fragment key={index}>
                    {row.map(cell=>
                    <CellComponent
                    cell={cell}
                    key={cell.id}
                    />)
                    
                    }

                </React.Fragment>
                
                )
            }
            
        </div>
    )
}

export default BoardComponent