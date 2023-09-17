import { Cell } from "../cell";
import { Colors } from "../color";
import { Figure } from "./figure";
import blackLogo from "./images/black-bishop.png";
import whiteLogo from "./images/white-bishop.png"

export class Bishop extends Figure{
constructor(color:Colors, cell:Cell){
    super(color, cell)
    this.logo =color=== Colors.BLACK ? blackLogo :whiteLogo
}

}
