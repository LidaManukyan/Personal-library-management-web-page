//բոլոր տեղերը մի տեղում
import Todoitem from "./todoitem";
import "./list.css"

export default function Todolist({props,onDelete,onChange}){

       return(
        <div>
            {
                props.map((item )=>{
                    return(
                        <div key={item.id} className="list">
                            <Todoitem 
                            props={item}
                            onChange={onChange}
                            onDelete={onDelete}
                            
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
