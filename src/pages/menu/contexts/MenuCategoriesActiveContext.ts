import React from "react";
import { MenuCategoriesActiveContextProps } from "../menu_page.types";

const MenuCategoriesActiveContext = React.createContext<MenuCategoriesActiveContextProps>({
    activeCategoryId: '1',
    setActiveCategoryId: (id: string) => { }
})

export default MenuCategoriesActiveContext;