import { useState, useContext, useEffect } from "react";
import ProfileCategoryClicksContext from "../contexts/ProfileCategoryClicksContext";

const useProfileCategoryClick = (id: number) => {
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const profileCategoryClicksContext = useContext(ProfileCategoryClicksContext)

    useEffect(() => {
        profileCategoryClicksContext.profileCategoryClicks.push({
            id,
            setIsClicked
        })

        if (profileCategoryClicksContext.activeCategoryId === id)
            setIsClicked(true)

    }, [])
    
    const onClick = () => {
        profileCategoryClicksContext.profileCategoryClicks.forEach(item => {
            item.setIsClicked(false)
        })

        if (isClicked)
            profileCategoryClicksContext.activeCategoryId = undefined
        else
            profileCategoryClicksContext.activeCategoryId = id

        setIsClicked(!isClicked)
    }

    return { isClicked, onClick }
}

export default useProfileCategoryClick;