import React from "react"

export default function MySelect(options,defaultvalue){
    return(
        <select>
            <option disabled value="">{defaultvalue}</option>
            {options.map(option=>
            <option value={option.value}>
                {option.name}
                </option> )
                }
            
        </select>
    )
}