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
  
    const possibleMoves = this.posiblMove(target);
    console.log(possibleMoves)
    return possibleMoves.some(move => {
      return move.x === target.x && move.y === target.y && (move.isEmpty() || move.figure?.color !== this.color);
    });
  }
  
  posiblMove(target: Cell): Cell[] {
    const startCol = this.cell.x;
    const startRow = this.cell.y;
    const endCol = target.x;
    const endRow = target.y;
    let available: Cell[] = [];
  
    const coldirection = endCol > startCol ? 1 : -1;
    const rowdirection = endRow > startRow ? 1 : -1;
  
    let col = startCol + coldirection;
    let row = startRow + rowdirection;
  
    while (col !== endCol || row !== endRow) {
      if (this.cell.board.cells[col] && this.cell.board.cells[col][row]) {
        const currentCell = this.cell.board.cells[col][row];
  
        if (currentCell.isEmpty()) {
          currentCell.available = true;
          available.push(currentCell);
        } else if (currentCell.figure ?.color !== this.color) {
          currentCell.available = true;
          available.push(currentCell);
          break;
        } else {
          break;
        }
  
        col += coldirection;
        row += rowdirection;
      } else {
        break;  
      }
    }
  
    return available;
  }
  
  moveFigure(target: Cell): void {
    if (target.available) {
     
      this.cell.figure = null;
  
      target.figure = this;
      this.cell = target;
  
      this.cell.setFigure(null);
  
      target.available = false;
    }
  }
  
  
  
    }
    
  
  

  

  
