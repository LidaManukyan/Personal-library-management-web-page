import { Board } from "./board";
import { Colors } from "./color";
import { Figure } from "./figures/figure";

export class Cell{
    x:number;
    y:number;
    color:Colors;
    figure:Figure | null;
    board:Board;
    avalable:boolean=true;
    id:number

    constructor(board:Board, x:number,y:number,color:Colors,figure:Figure | null){
        this.board=board;
        this.x=x;
        this.y=y;
        this.color=color;
        this.figure=figure;
        this.id=Math.random();

    }
}