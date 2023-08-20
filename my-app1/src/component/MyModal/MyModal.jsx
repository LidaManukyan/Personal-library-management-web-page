import  React from "react"
import cl from "./MyModal.module.css"

 const MyModal=({children})=>{
    return(
        <div className={[cl.MyModal,cl.MyModal.active].join('')}>
            <div className={cl.MyModalcontent}>
                {children}
            </div>

        </div>
    )
}

export default MyModal