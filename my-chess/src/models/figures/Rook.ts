import { Cell } from "../cell";
import { Colors } from "../color";
import { Figure } from "./figure";
import blackLogo from "./images/black-rook.png";
import whiteLogo from "./images/white-rook.png"

export class Rook extends Figure{
    constructor(color:Colors, cell:Cell){
        super(color, cell)
        this.logo =color=== Colors.BLACK ? blackLogo :whiteLogo
      
    }
    canMove(target: Cell): boolean {
      if(!super.canMove(target))
        return false;
      if(this.cell.isEmptyVertical(target))
        return true
      if(this.cell.isEmptyHorizontal(target))
        return true
      return false
    }

  //   canMove(target: Cell): boolean {
  //     if (!super.canMove(target)) {
  //         return false;
  //     }

  //     // Check if the target cell is in the same row or column
  //     if (this.cell.x === target.x || this.cell.y === target.y) {
  //         // Check if the path is clear (no pieces in between)
  //         if (this.isEmptyPath(target)) {
  //             return true;
  //         }
  //     }

  //     return false;
  // }

  // moveFigure(target: Cell) {
  //     if (this.canMove(target)) {
  //         super.moveFigure(target);
  //     }
  // }

  // private isEmptyPath(target: Cell): boolean {
  //    
  //     if (this.cell.x === target.x) {
  //         // Moving vertically (same column)
  //         const startRow = Math.min(this.cell.y, target.y);
  //         const endRow = Math.max(this.cell.y, target.y);
  //         for (let row = startRow + 1; row < endRow; row++) {
  //             if (!this.cell.board.getCell(this.cell.x, row).isEmpty()) {
  //                 return false; 
  //             }
  //         }
  //     } else if (this.cell.y === target.y) {
  //         
  //         const startCol = Math.min(this.cell.x, target.x);
  //         const endCol = Math.max(this.cell.x, target.x);
  //         for (let col = startCol + 1; col < endCol; col++) {
  //             if (!this.cell.board.getCell(col, this.cell.y).isEmpty()) {
  //                 return false; 
  //             }
  //         }
  //     }

  //     return true; 
  // }


  isEmptyVertical(target: Cell): boolean {
    if (this.cell.x !== target.x) {
        return false; 
    }

    const startY = Math.min(this.cell.y, target.y);
    const endY = Math.max(this.cell.y, target.y);

    for (let y = startY + 1; y < endY; y++) {
        const cell = this.cell.board.cells[y][this.cell.x];
        if (!cell.isEmpty()) {
            return false; 
        }
    }

    return true;
}

isEmptyHorizontal(target: Cell): boolean {
    if (this.cell.y !== target.y) {
        return false; 
    }

    const startX = Math.min(this.cell.x, target.x);
    const endX = Math.max(this.cell.x, target.x);

    for (let x = startX + 1; x < endX; x++) {
        const cell = this.cell.board.cells[this.cell.y][x];
        if (!cell.isEmpty()) {
            return false; 
        }
    }

    return true; 
}
  }
  
