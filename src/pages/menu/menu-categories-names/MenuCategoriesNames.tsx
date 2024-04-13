import { useState } from 'react';
import MenuCategoryName from '../menu-category-name/MenuCategoryName';
import { MenuCategoriesNamesProps } from '../menu_page.types';
import './menu_categories_names.css'

const MenuCategoriesNames = ({categoryNames} : MenuCategoriesNamesProps) => {
    
    return (
        <div className="menu__categories__names__container">
            <div className="menu__categories__names__title">
                Menu
            </div>
            <div className="menu__categories__names__list">
                    {categoryNames.map((categoryName) => (
                        <MenuCategoryName key={categoryName.id} {...categoryName}/>
                    ))}
            </div>
        </div>
    )
}

export default MenuCategoriesNames;