import { Cell } from "../cell";
import { Colors } from "../color";
import { Figure } from "./figure";
import blackLogo from "./images/black-queen.png";
import whiteLogo from "./images/white-queen.png"


export class Queen extends Figure{
    constructor(color:Colors, cell:Cell){
        super(color, cell)
        this.logo =color=== Colors.BLACK ? blackLogo :whiteLogo
        
    }
    canMove(target: Cell): boolean {
      if (!super.canMove(target)) {
          return false;
      }

     

     
          if (this.cell.isEmptyVertical(target) || this.cell.isEmptyHorizontal(target) || this.cell.isEmptyDiagonal(target)) {
              return true;
        
      }

      return false;
  }
    
    }
    