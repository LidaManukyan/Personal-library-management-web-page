import { Figure } from "./figure";
import { Colors } from "../color";
import { Cell } from "../cell";
import blackLogo from "./images/black-pawn.png";
import whiteLogo from "./images/white-pawn.png";


export class Pawn extends Figure {
    isFirstStep: boolean = true;
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
  }

   
//1111111111111111
    // canMove(target: Cell): boolean {
    //     if (!super.canMove(target)) {
    //         return false;
    //     }

    //     const direction = this.color === Colors.BLACK ? 1 : -1;
    //     const firstStepDirection = this.color === Colors.BLACK ? 2 : -2;

    //     if (
    //         (target.y === this.cell.y + direction || (this.isFirstStep && target.y === this.cell.y + firstStepDirection)) &&
    //         target.x === this.cell.x &&
    //         target.isEmpty()
    //     ) {
    //         return true;
    //     }

    //     if (
    //         target.y === this.cell.y + direction &&
    //         (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
    //         !target.isEmpty() &&
    //         target.isEnemy(target)
    //     ) {
    //         return true;
    //     }

    //     return false;
    // }

    // moveFigure(target: Cell) {
    //     super.moveFigure(target);
    //     this.isFirstStep = false;
    // }


    //22222222222

    // canMove(target: Cell): boolean {
    //     if (!super.canMove(target)) {
    //         return false;
    //     }

    //     const direction = this.color === Colors.BLACK ? 1 : -1;
    //     const firstStepDirection = this.color === Colors.BLACK ? 2 : -2;

    //     // Check if the target cell is either one step or two steps away in the y-direction
    //     if ((target.y === this.cell.y + direction || (this.isFirstStep && target.y === this.cell.y + firstStepDirection)) &&
    //         target.x === this.cell.x &&
    //         target.isEmpty()) {
    //         return true;
    //     }

    //     return false;
    // }

    // moveFigure(target: Cell) {
    //     if (this.canMove(target)) {
    //         super.moveFigure(target);
    //         this.isFirstStep = false;
    //     }
    // }
}