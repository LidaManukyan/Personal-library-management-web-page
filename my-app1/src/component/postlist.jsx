import React from "react";
import PostItem from "./post";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';



const Postlist=({posts,title,remove})=>{

  if(!posts.length){
    return (<h1 style={{ textAlign: "center" }}>Հրապարակված գրքեր առկա չեն</h1>)
  }

    return (  <div>
    <h1 style={{textAlign:"center"}}>{title}</h1>
    <TransitionGroup> 
    
    {posts.map((e,index)=>
    <CSSTransition
    key={e.id}
     timeout={500}
    classNames="item" >
  
     <PostItem remove={remove} e={e} name={index+1} />
    </CSSTransition>
    
      )}

</TransitionGroup>

  
   
      </div>)

}

export default Postlist