import React from 'react'
import { MenuCategoriesRefsContextProps } from '../menu_page.types'

const MenuCategoriesRefsContext = React.createContext<MenuCategoriesRefsContextProps>({
    categoriesRefs: [],
    setCategoriesRefs: () => {}
})

export default MenuCategoriesRefsContext;