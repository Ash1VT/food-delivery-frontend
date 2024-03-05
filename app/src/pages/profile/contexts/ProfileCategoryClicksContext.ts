import React from "react";
import { ProfileCategoryClicksContextProps } from "../profile.types";

const ProfileCategoryClicksContext = React.createContext<ProfileCategoryClicksContextProps>({
    profileCategoryClicks: [],
    activeCategoryId: undefined
})

export default ProfileCategoryClicksContext;