import { Figure } from "./figure";
import { Colors } from "../color";
import { Cell } from "../cell";
import blackLogo from "./images/black-pawn.png"
import whiteLogo from "./images/white-pawn.png"

export class Pawn extends Figure{
    isFirstStep: boolean = true;

    constructor(color:Colors, cell:Cell){
        super(color, cell)
        this.logo =color=== Colors.BLACK ? blackLogo :whiteLogo
    }

    // canMove(target: Cell): boolean {
    //     if(!super.canMove(target))
    //         return false
    //         const direction=this.cell.figure?.color===Colors.BLACK?1 : -1 //սևերը վերևից ներքև սպիտակները՝ հակառակ
    //         const firstStep=this.cell.figure?.color=== Colors.BLACK ? 2 : -2 // առաջին քայլը կարող են անել 2 վանդակ

    //         if((target.y === this.cell.y + direction || this.isFirstStep && (target.y === this.cell.y + firstStep))
    //         && target.x === this.cell.x && this.cell.board.getCell(target.x, target.y).isEmpty()){
    //         return true;
    //     }

    //     // Условие для атаки (только по диагонали)
    //     if(target.y === this.cell.y + direction
    //         && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
    //         && this.cell.isEnemy(target)) {
    //         return true;
    //     }

    //     return false;
    // }

    // moveFigure(target: Cell) {
    //     super.moveFigure(target);
    //     this.isFirstStep = false;
    }
