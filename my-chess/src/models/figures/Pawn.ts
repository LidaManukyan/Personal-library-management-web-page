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

//   canMove(target: Cell): boolean {
//       if(!super.canMove(target)){
//         return false
//       }
//       let startY = Math.min(this.cell.y,target.y)
//       const firstStepDirection = this.color === Colors.BLACK ? 2 : -2;
//       const direction = this.color === Colors.BLACK ? 1 : -1;
//       if(this.isFirstStep){
//       for(let y= startY+1;;y+1)
//       }
    




//1111111111111111
    // canMove(target: Cell): boolean {
    //     if (!super.canMove(target)) {
    //         return false;
    //     }

    //     const direction = this.color === Colors.BLACK ? 1 : -1;
    //     const firstStep = this.color === Colors.BLACK ? 2 : -2;

    //     if (
    //         (target.y === this.cell.y + direction || (this.isFirstStep && target.y === this.cell.y + firstStep)) &&
    //         target.x === this.cell.x &&
    //         target.isEmpty()
    //     ) {
    //         return true;
    //     }

     //     return false;
    // }

    // moveFigure(target: Cell) {
    //     super.moveFigure(target);
    //     this.isFirstStep = false;
    // }


  
}