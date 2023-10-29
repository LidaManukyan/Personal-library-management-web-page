import { Cell } from "../cell";
import { Colors } from "../color";
import { Figure } from "./figure";
import blackLogo from "./images/black-bishop.png";
import whiteLogo from "./images/white-bishop.png"

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    
    if (Math.abs(this.cell.x - target.x) !== Math.abs(this.cell.y - target.y)) {
      return false; 
    }

    
    if (!this.isEmptyDiagonal(target)) {
      return false; 
    }

    return true; 
  }

  isEmptyDiagonal(target: Cell): boolean {
    const startCol = Math.min(this.cell.x, target.x);
    const startRow = Math.min(this.cell.y, target.y);
    const endCol = Math.max(this.cell.x, target.x);
    const endRow = Math.max(this.cell.y, target.y);

    
    for (let col = startCol + 1, row = startRow + 1; col > endCol; col++, row++) {
        
        if (this.cell.board.getCell(col, row).figure !==null) {
           
            
                return false;
                
            
        }
    }

    return true; 
}

}