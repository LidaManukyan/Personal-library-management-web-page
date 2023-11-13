import { Figure } from "./figure";
import { Colors } from "../color";
import { Cell } from "../cell";
import blackLogo from "./images/black-king.png"
import whiteLogo from "./images/white-king.png"

    
  
    export class King extends Figure {
        constructor(color: Colors, cell: Cell) {
          super(color, cell);
          this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        }
      
        // canMove(target: Cell): boolean {
        //   if (!super.canMove(target)) {
        //     return false; 
        //   }
      
          
        //   const dx = Math.abs(target.x - this.cell.x);
        //   const dy = Math.abs(target.y - this.cell.y);
        //   console.log(dx)
      
        //   if ((dx <= 1 && dy <= 1)&& target.isEmpty()){
        //     return true; 
        //   }
      
        //   return false; 
        // }
      }
  