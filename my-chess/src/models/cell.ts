import { Board } from "./board";
import { Colors } from "./color";
import { Figure } from "./figures/figure";

export class Cell {
    x: number;
    y: number;
    color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean=false;
    id: number

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.board = board;
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.id = Math.random();
        this.available=false
    }

  

    setFigure(figure: Figure | null): void {
      if (this.figure) {
        this.figure.cell = null!; 
      }
  
      this.figure = figure;
  
      if (figure) {
        figure.cell = this;
      }
    }

    moveFigure(target: Cell) {
        if(this.figure && this.figure?.canMove(target) ) { /*&& this.figure?.canMove(target)*/
          this.figure.moveFigure(target)
          target.setFigure(this.figure);
          this.figure = null;
        }
      }

    isEmpty(): boolean {
        return this.figure === null
               
    }

    isEnemy(target: Cell): boolean {
        if (target.figure) {
          return this.figure?.color !== target.figure.color;
        }
        return false;
      }

  

      isEmptyVertical(target: Cell): boolean {
        if (this.x !== target.x) {
          return false; 
        }
      
        const minY = Math.min(this.y, target.y);
        const maxY = Math.max(this.y, target.y);
      
        for (let y = minY + 1; y < maxY; y++) {
          if (this.board.cells[this.x][y].isEmpty()) {
            this.board.cells[this.x][y].available = true;
          } else {
            if (this.board.cells[this.x][y].figure?.color === this.color) {
              return false;
            } else {
              this.board.cells[this.x][y].available = true;
            }
          }
        }
      
        return true; 
      }
      
    
      isEmptyHorizontal(target: Cell): boolean {
        if (this.y !== target.y) {
          return false;
        }
    
        const min = Math.min(this.x, target.x);
        const max = Math.max(this.x, target.x);
        for (let x = min + 1; x < max; x++) {
          if(!this.board.cells[x][this.y].isEmpty()) {
            return false
          }
        }
        return true;
      }

    isEmptyDiagonal(target: Cell): boolean {
        
        if (Math.abs(this.x - target.x) !== Math.abs(this.y - target.y)) {
            return false; 
        }

        const startCol = Math.min(this.x, target.x);
        const startRow = Math.min(this.y, target.y);
        const endCol = Math.max(this.x, target.x);
       

        
        for (let col = startCol + 1, row = startRow + 1; col < endCol; col++, row++) {
            
            if (!this.board.cells[col][row].isEmpty() ) {
                return false
            }
            if (this.board.cells[col][row].figure?.color === this.color ) {
              break
          }
          
            
        }

        return true; 
    }

       
}