import { useState } from 'react';
import MenuCategoryName from '../menu-category-name/MenuCategoryName';
import { MenuCategoriesNamesProps } from '../menu_page.types';
import MenuCategoriesNamesClicksContext from '../contexts/MenuCategoriesNamesClicksContext';
import { ClicksContextProps } from 'src/hooks/useActiveClick';
import './menu_categories_names.css'

const MenuCategoriesNames = ({categoryNames} : MenuCategoriesNamesProps) => {
    
    return (
        <div className="menu__categories__names__container">
            <div className="menu__categories__names__title">
                Menu
            </div>
            <div className="menu__categories__names__list">
                    {categoryNames.map((categoryName) => (
                        <MenuCategoryName {...categoryName}/>
                    ))}
            </div>
        </div>
    )
}

export default MenuCategoriesNames;