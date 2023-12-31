import { Cell } from "./cell"
import { Colors } from "./color"
import { Figure } from "./figures/figure"
import { Bishop } from "./figures/Bishop"
import { King } from "./figures/King"
import { Pawn } from "./figures/Pawn"
import {Kinght } from "./figures/Kinght"
import { Queen } from "./figures/Queen"
import { Rook } from "./figures/Rook"

export class Board {
    cells: Cell[][] = []
   size:number=8
   public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0) {
                    row.push(new Cell(this, i, j, Colors.WHITE, null))
                } else {
                    row.push(new Cell(this, i, j, Colors.BLACK, null))
                }
            }
            this.cells.push(row)
        }
    }
    public getCell(x: number, y: number) {
        return this.cells[y][x]
    }
    
    private addPawns() {
        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.BLACK, this.getCell(i, 1))
            new Pawn(Colors.WHITE, this.getCell(i, 6))
        }
    }
    private addKnights() {
        new Kinght(Colors.BLACK, this.getCell(1, 0));
        new Kinght(Colors.BLACK, this.getCell(6, 0));
        new Kinght(Colors.WHITE, this.getCell(1, 7));
        new Kinght(Colors.WHITE, this.getCell(6, 7));
    }
    private addKings() {
        new King(Colors.BLACK, this.getCell(4, 0));
        new King(Colors.WHITE, this.getCell(4, 7));
    }
    private addQueens() {
        new Queen(Colors.BLACK, this.getCell(3, 0));
        new Queen(Colors.WHITE, this.getCell(3, 7));
    }
    private addBishops() {
        new Bishop(Colors.BLACK, this.getCell(4, 2));
        new Bishop(Colors.BLACK, this.getCell(5, 0));
        new Bishop(Colors.WHITE, this.getCell(2, 7));
        new Bishop(Colors.WHITE, this.getCell(5, 7));
    }
    private addRooks() {
        new Rook(Colors.BLACK, this.getCell(0, 0));
        new Rook(Colors.BLACK, this.getCell(5, 1));
        new Rook(Colors.WHITE, this.getCell(0, 7));
        new Rook(Colors.WHITE, this.getCell(6, 5));
    }
    addFigures() {
        this.addPawns();
        this.addBishops();
        //this.addKings();
        //this.addKnights();
        this.addQueens();
        this.addRooks();
    }
    public getCopyBoard(): Board {
        const newBoard = new Board()
        newBoard.cells = this.cells
        return newBoard
    }

    public getMove(selectedCell: Cell | null) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i];
            for (let j = 0; j < row.length; j++) {
                const target = row[j];
                if (selectedCell?.figure?.canMove(target)) {
                    target.available = true;
                } else {
                    target.available = false;
                }
            }
        }
    }
    

    getSize(): number {
        return this.size;
    }
}