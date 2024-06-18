import { useState, useContext, useEffect } from "react";
import ProfileCategoryClicksContext from "../contexts/ProfileCategoryClicksContext";

const useProfileCategoryClick = (id: number) => {
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const { profileCategoryClicks, activeCategoryId, setActiveCategoryId } = useContext(ProfileCategoryClicksContext)

    useEffect(() => {
        profileCategoryClicks.push({
            id,
            setIsClicked
        })

        if (activeCategoryId === id)
            setIsClicked(true)

    }, [activeCategoryId])
    
    const onClick = () => {
        profileCategoryClicks.forEach(item => {
            item.setIsClicked(false)
        })

        if (!isClicked)
            setActiveCategoryId(id)

        setIsClicked(true)
    }

    return { isClicked, onClick }
}

export default useProfileCategoryClick;