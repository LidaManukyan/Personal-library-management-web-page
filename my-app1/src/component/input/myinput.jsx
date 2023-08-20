import React from "react"
import classes from "./myinput.module.css"


const Myinput=(props)=>{
    return(
        <input {...props} className={classes.myInput}/>
       
    )
}

export default Myinput