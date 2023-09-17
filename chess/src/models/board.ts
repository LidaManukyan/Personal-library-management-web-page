import { Cell } from "./cell"
import { Colors } from "./color"
import { Figure } from "./figures/figure"
import { Bishop } from "./figures/Bishop"
import { King } from "./figures/King"
import { Pawn } from "./figures/Pawn"

export class Board{
    cells:Cell[][]=[]

    initCells(){
        for(let i=0;i<8;i++){
            const row:Cell[]=[]
            for(let j=0; j<8; j++){
                if((i+j)%2 ===0){ 
                row.push(new Cell(this, i, j,Colors.WHITE,null)) 
            } else {
                row.push(new Cell(this,i,j,Colors.BLACK,null))
            }
        }
        this.cells.push(row)
    }

   
}
getCell(x:number,y:number){
    return this.cells[y][x]
}
private addPawns(){
    for(let i=0;i<8;i++){
        new Pawn(Colors.BLACK,this.getCell(i,1))
        new Pawn(Colors.WHITE,this.getCell(i,6))
    }
}

addFigures(){
    new Bishop(Colors.WHITE, this.getCell(3,3))
    new Bishop(Colors.BLACK, this.getCell(5,3))
    new King(Colors.WHITE, this.getCell(2,2))
    new King(Colors.WHITE, this.getCell(7,0))
    this.addPawns()
}
}