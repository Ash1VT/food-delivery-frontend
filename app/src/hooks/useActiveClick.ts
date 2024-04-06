import { useContext, useEffect, useState } from "react"
import useSetActive from "./useSetActive"

export type ClickProps = {
    id: bigint
    setIsClicked: (isClicked: boolean) => void
}

export type ClicksContextProps = {
    clicks: ClickProps[]
    setClicks: (callback: (prevClicks: ClickProps[]) => ClickProps[]) => void
    activeItemId: bigint
    setActiveItemId: (id: bigint) => void
}

const useActiveClick = (id: bigint, context: React.Context<ClicksContextProps>) => {
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const { setClicks } = useContext(context)

    useEffect(() => {
        setClicks((prevClicks: ClickProps[]) => [...prevClicks, { id, setIsClicked }])
    }, [])
    
    const setActive = useSetActive(id, context)

    return { isClicked, setActive }
}

export default useActiveClick;