import React from 'react'
import { MenuCategoriesRefsContextProps } from '../menu_page.types'

const MenuCategoriesRefsContext = React.createContext<MenuCategoriesRefsContextProps>({
    categories: [],
    setCategories: () => {}
})

export default MenuCategoriesRefsContext;