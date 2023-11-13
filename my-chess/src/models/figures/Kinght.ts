import { Cell } from "../cell";
import { Colors } from "../color";
import { Figure } from "./figure";
import blackLogo from "./images/black-knight.png";
import whiteLogo from "./images/white-knight.png";

export class Kinght extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
  }
  
//1
// calculatePossibleMoves() {
//   const knightMoves = [
//     { dx: 2, dy: 1 },
//     { dx: 1, dy: 2 },
//     { dx: -1, dy: 2 },
//     { dx: -2, dy: 1 },
//     { dx: -2, dy: -1 },
//     { dx: -1, dy: -2 },
//     { dx: 1, dy: -2 },
//     { dx: 2, dy: -1 },
//   ];

//   for (const move of knightMoves) {
//     const x = this.cell.x + move.dx;
//     const y = this.cell.y + move.dy;

//     if (x >= 0 && x < 8 && y >= 0 && y < 8) {
//       const targetCell = this.cell.board.cells[y][x];
//       if (targetCell.isEmpty() || targetCell.figure?.color !== this.color) {
//         targetCell.available = true;
//       }
//     }
//   }
// }




  // canMove(target: Cell): boolean {
  //   if(!super.canMove(target))
  //   return false

  //   const dx= Math.abs(this.cell.x-target.x)
  //   const dy = Math.abs(this.cell.y-target.y)
  //   if ((dx === 2 && dy === 1) || (dx === 1 && dy === 2)) {
     
  //     return target.isEmpty() || target.figure?.color !== this.color;
  //   }

  //   return false;
  // }

}
 

