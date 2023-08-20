import React from "react";
import Mybutton from "./button/mybuton";

const PostItem=(props)=>{

       return(
        
        <div className="prop">
            <div className="prop_">
    <strong>{props.name}. {props.e.title}</strong>
    <div>
     {props.e.body}
      
      </div>
    
      </div >
      <div>
      <Mybutton onClick={()=>props.remove(props.e)}>delete</Mybutton>
      
    </div>
   </div>

        
    )

}

export default PostItem