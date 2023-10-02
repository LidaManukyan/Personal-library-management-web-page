import { Cell } from "../cell";
import { Colors } from "../color";
import { Figure } from "./figure";
import blackLogo from "./images/black-knight.png";
import whiteLogo from "./images/white-knight.png"

export class Kinght extends Figure{
constructor(color:Colors, cell:Cell){
    super(color, cell)
    this.logo =color=== Colors.BLACK ? blackLogo :whiteLogo
    
}
  canMove(target: Cell): boolean {
      if(!super.canMove(target))
      return false;
    const dx= Math.abs(this.cell.x-target.x)
    const dy = Math.abs(this.cell.y-target.y)
    return (dx===1 && dy===2)||(dx===2 && dy===1)
  }

}
