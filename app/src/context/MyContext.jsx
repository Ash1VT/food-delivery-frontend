
import { createContext  } from "react";
import { useState } from "react";
export const Context = createContext()

export const MyContext = ({children}) =>  {
    const [editMode, setEditMode] = useState(false)

    const onCloseInput = (e) => {
        
        if(!e.target.classList.contains("edit")) {
            setEditMode(false)
            console.log("click")
        }
    }

    return (
        <Context.Provider  value={{ 
            setEditMode,
            editMode,
            onCloseInput
        }}>
            {children}
        </Context.Provider>
    )
}