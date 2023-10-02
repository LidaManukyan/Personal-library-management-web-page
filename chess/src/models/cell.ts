import { Board } from "./board";
import { Colors } from "./color";
import { Figure } from "./figures/figure";

export class Cell {
    x: number;
    y: number;
    color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean;
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

    getMove():any[][] {
        let moves:any[][] = [];

        if (this.figure) {
            alert("not empty");
            moves.push([this.x+1,this.y+1]);
        }

        return moves;
    }

    setFigur(figure:Figure){
        this.figure=figure;
        this.figure.cell=this;

    }

    moveFigure(target: Cell) {
        if (this.figure && this.figure.canMove(target)) {//թարգեթը մեր ընտրած վանդակն է, եթե վրան կա ֆիգուր և anMoveը true է
            this.figure.moveFigure(target)// ֆիգուռը կարող ենք տեղաշարժել,թարգեթը վանդակն է որտեղուզում ենք տեղաշարժել
            target.setFigur(this.figure);//  տանել նշված դաշտ
            this.figure = null; //հեռացնել ֆիգուրը ընթացիկ դաշտից

        }

    }

    isEmpty(): boolean {
        return this.figure === null;
    }

  

    isEmptyVertical(target: Cell): boolean {
        
        if (this.x !== target.x) {
            return false;
        }

        const min = Math.min(this.y, target.y);
        const max = Math.max(this.y, target.y);
        for (let y = min + 1; y < max; y++) {
            if (!this.board.getCell(this.x, y).isEmpty()) {
                return false
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
        for (let x = min + 1; x <= max; x++) {
            if (!this.board.getCell(x, this.y).isEmpty()) {
                return false
            }
        }
        return true;
    }

    
}