import { useState, useContext } from "react";
import ProfileCategoryClicksContext from "../contexts/ProfileCategoryClicksContext";

const useProfileCategoryClick = (id: number) => {
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const profileCategoryClicksContext = useContext(ProfileCategoryClicksContext)

    const onClick = () => {
        profileCategoryClicksContext.profileCategoryClicks.forEach(item => {
            item.setIsClicked(false)
        })

        const profileCategoryClick = profileCategoryClicksContext.profileCategoryClicks.find(item => item.id === id)

        if(!profileCategoryClick)
            profileCategoryClicksContext.profileCategoryClicks.push({
                id,
                setIsClicked
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