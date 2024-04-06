import { useContext, useEffect, useState } from "react"
import { ClicksContextProps } from "./useActiveClick"


const useSetActive = (id: bigint, context: React.Context<ClicksContextProps>) => {
    const { clicks, setActiveItemId } = useContext(context)

    const setActive = () => {
        clicks.forEach(item => {
            item.setIsClicked(false)
            if (item.id === id)
                item.setIsClicked(true)
        })

        setActiveItemId(id)
    }

    return setActive
}

export default useSetActive;