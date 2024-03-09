import React from "react";
import { ProfileCategoryClicksContextProps } from "../profile.types";

const ProfileCategoryClicksContext = React.createContext<ProfileCategoryClicksContextProps>({
    profileCategoryClicks: [],
    activeCategoryId: 0,
    setActiveCategoryId: () => {}
})

export default ProfileCategoryClicksContext;