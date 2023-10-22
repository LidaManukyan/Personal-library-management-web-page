import React, { useState } from "react";

export default function Input({onAdd}){
    const [text, setText]=useState("")

    const handelClick = ()=>{
        onAdd(text)
        setText("")
    }

    return(
        <div>
            <input type="text" value={text}
             onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handelClick}>Add</button>
        </div>
    )
}