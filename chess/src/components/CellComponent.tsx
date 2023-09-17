import React from "react";
import { Cell } from "../models/cell";

interface CellProps{
    cell:Cell
}

const CellComponent:React.FC<CellProps>=({cell})=>{
    return(
        <div className={["cell",cell.color].join(" ")}>
           
           {cell.figure ?.logo && <img src ={cell.figure.logo}/>}

            </div>
    )
}

export default CellComponent