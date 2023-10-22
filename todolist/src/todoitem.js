// տողերի դասավորվածությունը
export default function Todoitem({props, onChange,onDelete}){
    return(
        <div>
            <input type="checkbox" checked={props.isCompleted} onChange={ (e)=>{ 
                onChange({...props, isCompleted:e.target.checked})
            }}
            />
            {props.text}
            <button onClick={()=>onDelete(props)}>Delete</button>
        </div>
    )
}
