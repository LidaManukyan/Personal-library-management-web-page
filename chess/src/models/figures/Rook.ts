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
      canMove(target: Cell): boolean {
          if(!super.canMove(target))
          return false;
        if(this.cell.isEmptyVertical(target))
        return true;

        if(this.cell.isEmptyHorizontal(target))
        return true;
    return false
      }
    
}
