import { Cell } from "../cell";
import { Colors } from "../color";
import { Figure } from "./figure";
import blackLogo from "./images/black-rook.png";
import whiteLogo from "./images/white-rook.png"

export class Rook extends Figure{
    constructor(color:Colors, cell:Cell){
        super(color, cell)
        this.logo =color=== Colors.BLACK ? blackLogo :whiteLogo
      
    }
//     canMove(target: Cell): boolean {
//       if(!super.canMove(target))
//         return false;


//           let currentX  = this.cell.x;
//         let currentY = this.cell.y;
       

//         // vervev
       
// for (let index = currentX - 1; index >= 0; index--) {
//   if (this.cell.board.cells[index][currentY].isEmpty()) {
//     this.cell.board.cells[index][currentY].available = true;
//   } else {
//     if (this.cell.board.cells[index][currentY].figure?.color == this.color) {
//       break;
//     } else {
//       this.cell.board.cells[index][currentY].available = true;
//       break;
//     }
//   }
 
// }

// // ներքև
// for (let index = currentX + 1; index < this.cell.board.cells.length; index++) {
//   if (this.cell.board.cells[index][currentY].isEmpty()) {
//     this.cell.board.cells[index][currentY].available = true;
//   } else {
//     if (this.cell.board.cells[index][currentY].figure?.color == this.color) {
//       break;
//     } else {
//       this.cell.board.cells[index][currentY].available = true;
//       break;
//     }
//   }
// }


//     // Vertical 
// for (let index = currentY - 1; index >= 0; index--) {
//   if (this.cell.board.cells[currentX][index].isEmpty()) {
//     this.cell.board.cells[currentX][index].available = true;
//   } else {
//     if (this.cell.board.cells[currentX][index].figure?.color === this.color) {
//       break;
//     } else {
//       this.cell.board.cells[currentX][index].available = true;
//       break;
//     }
//   }
// }

// // Vertical 
// for (let index = currentY + 1; index < this.cell.board.cells.length; index++) {
//   if (this.cell.board.cells[currentX][index].isEmpty()) {
//     this.cell.board.cells[currentX][index].available = true;
//   } else {
//     if (this.cell.board.cells[currentX][index].figure?.color === this.color) {
//       break;
//     } else {
//       this.cell.board.cells[currentX][index].available = true;
//       break;
//     }
//   }
// }

     
        
//       return false;
//     }

   
   
    

//   isEmptyVertical(target: Cell): boolean {
//     if (this.cell.x !== target.x) {
//         return false; 
//     }

//     const startY = Math.min(this.cell.y, target.y);
//     const endY = Math.max(this.cell.y, target.y);

//     for (let y = startY + 1; y <= endY; y++) {
//         const cell = this.cell.board.getCell(y, this.cell.x);
//         if (!cell.isEmpty()) {
//             return false; 
//         }
//     }

//     return true;
// }

// isEmptyHorizontal(target: Cell): boolean {
//   if (this.cell.y !== target.y) {
//       return false;
//   }

//   const startX = Math.min(this.cell.x, target.x);
//   const endX = Math.max(this.cell.x, target.x);
//   alert(startX)

//   for (let x = startX + 1; x <= endX; x++) {
//       const cell = this.cell.board.getCell(x, this.cell.y); 
//       if (!cell.isEmpty()) {
//           return false;
//       }
//   }

//   return true;
// }

  }
  

