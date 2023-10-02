import { Cell } from "../cell";
import { Colors } from "../color";
import  logo from "./images/black-bishop.png"





export class Figure{
    color:Colors;
    cell:Cell;
    logo:typeof logo | null   
    id:number;
   

    constructor(color:Colors,cell:Cell){
        this.color=color;
        this.cell=cell;
        this.cell.figure=this; //վանդակի մեջ ավելացնում ենք ֆիգուռը,որպեսընթացիկ օբյեկտ
        this.id=Math.random()
        this.logo=null
       
             
    }

    canMove(target:Cell): boolean{
     if(target.figure?.color===this.color){return false}
     return true
         }

    moveFigure(target:Cell){
        
    }

}