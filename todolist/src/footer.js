import React from "react";
import "./footer.css";

export default function Footer({props,onCleareCompleted}){
    const CompletedSize= props.filter(item=> item.isCompleted).length
    
    return(
        <div className="footer">
         <span>{CompletedSize}/{props.length} is Completed</span>
         <button onClick={onCleareCompleted}>clear Completed</button>

        </div>
    )
}