import React from 'react'
import { RestaurantMenuCategoryItemProps, RestaurantMenuCategoryProps, RestaurantMenuProps, RestaurantMenusNamesProps, RestaurantMenusProps } from '../manager_panel.types'
import RemoveItemFromCategoryButton from '../ui/buttons/remove-item-from-category-button/RemoveItemFromCategoryButton'
import { Scrollbar } from 'react-scrollbars-custom'
import OpenAddingMenuCategoryButton from '../ui/buttons/open-adding-menu-category-button/OpenAddingMenuCategoryButton'
import EditIconButton from '../../../components/ui/buttons/edit-icon-button/EditIconButton'
import DeleteIconButton from '../../../components/ui/buttons/delete-icon-button/DeleteIconButton'
import AddIconButton from '../../../components/ui/buttons/add-icon-button/AddIconButton'
import DroppableMenuItemZone from './droppable-menu-item-zone/DroppableMenuItemZone'
import { MenuCategoryUpdate } from 'src/models/menuCategory.interfaces'
import ModalWindow from 'src/components/modal-window/ModalWindow'
import EditRestaurantMenuCategoryModal from '../ui/modals/edit-restaurant-menu-category-modal/EditRestaurantMenuCategoryModal'
import AddRestaurantMenuCategoryModal from '../ui/modals/add-restaurant-menu-category-modal/AddRestaurantMenuCategoryModal'
import AddRestaurantMenuModal from '../ui/modals/add-restaurant-menu-modal/AddRestaurantMenuModal'
import './restaurant_menus.css'


const RestaurantMenuCategoryItem = ({menuItem, menuCategoryId, onRemove} : RestaurantMenuCategoryItemProps) => {

    const handleRemove = async () => {
        await onRemove(menuCategoryId, menuItem.id)
    }

    return (
        <tr className='restaurant__menu__category__item__tr'>
            <th>
                <div className="restaurant__menu__category__item__image__wrapper">
                    <img className='restaurant__menu__category__item__image' src={menuItem.imageUrl} alt='image'></img>
                </div>
            </th>
            <th>
                <div className="restaurant__menu__category__item__text restaurant__menu__category__item__margin__left">
                    {menuItem.name}
                </div>
            </th>
            <th>
                <div className="restaurant__menu__category__item__text restaurant__menu__category__item__margin__left">
                    {menuItem.price}$
                </div>
            </th>
            <th style={{width: '100%'}}>
                <div className='restaurant__menu__category__item__buttons'>
                    <RemoveItemFromCategoryButton onRemove={handleRemove}/>
                </div>
            </th>
        </tr>
    )
}

const RestaurantMenuCategory = ({menuCategory, onMenuCategoryUpdated, onMenuCategoryImageUploaded, onMenuCategoryDeleted, onMenuItemRemoved} : RestaurantMenuCategoryProps) => {
    
    const handleMenuCategoryUpdated = async (menuCategory: MenuCategoryUpdate) => {
        await onMenuCategoryUpdated(menuCategory)
    }

    const handleMenuCategoryDeleted = async () => {
        await onMenuCategoryDeleted(menuCategory.id)
    }

    return (
        <React.Fragment>
            <tr>
                <th colSpan={3}>
                    <div className="restaurant__menu__category__text">
                        {menuCategory.name}
                    </div>
                </th>
                <th>
                    <div className='restaurant__menu__category__buttons'>
                        <ModalWindow button={EditIconButton({className: 'open__editing__menu__category__button'})}>
                            <EditRestaurantMenuCategoryModal menuCategory={menuCategory} onMenuCategoryImageUploaded={onMenuCategoryImageUploaded} onMenuCategoryUpdated={handleMenuCategoryUpdated} />
                        </ModalWindow>
                        <DeleteIconButton className='delete__menu__category__button' onDelete={handleMenuCategoryDeleted}/>
                    </div>
                </th>
            </tr>
            <tr className='restaurant__menu__category__bottom__tr'/>
            {menuCategory.items.map((menuItem, index) => {
                return (
                    <React.Fragment key={menuItem.id}>
                        <RestaurantMenuCategoryItem
                            menuItem={menuItem}
                            menuCategoryId={menuCategory.id}
                            onRemove={onMenuItemRemoved}
                        />
                        <tr className='restaurant__menu__category__bottom__tr'/>
                    </React.Fragment>
                )
            })}
            <tr className='restaurant__menu__category__bottom__tr'/>
            <tr>
                <th colSpan={4}>
                    <DroppableMenuItemZone menuCategory={menuCategory}/>
                </th>
            </tr>
        </React.Fragment>
    )
}

const RestaurantMenu = ({menu, onMenuItemRemoved, onMenuCategoryCreated, onMenuCategoryUpdated, onMenuCategoryImageUploaded, onMenuCategoryDeleted} : RestaurantMenuProps ) => {
    const isMenuCategoriesEmpty = menu.menuCategories.length === 0
    
    return (
        <div className="restaurant__menu__container">
            {isMenuCategoriesEmpty ? (
                <div className="restaurant__menu__empty__container">
                    <div className='restaurant__menu__empty__text'>Menu is empty for now</div>
                </div>
            ) 
            :   
                <Scrollbar className='restaurant__menu__scrollbar'>
                    <table className='restaurant__menu__table'>
                        {menu.menuCategories.map((menuCategory, index) => {
                            return (
                                <React.Fragment key={menuCategory.id}>
                                <tr className='restaurant__menu__category__top__tr'/>
                                    <RestaurantMenuCategory
                                        menuCategory={menuCategory}
                                        onMenuCategoryUpdated={onMenuCategoryUpdated}
                                        onMenuCategoryImageUploaded={onMenuCategoryImageUploaded}
                                        onMenuCategoryDeleted={onMenuCategoryDeleted}
                                        onMenuItemRemoved={onMenuItemRemoved}
                                        />
                                </React.Fragment>
                            )
                        })}
                    </table>
                </Scrollbar>

            }
            <ModalWindow button={OpenAddingMenuCategoryButton({})}>
                <AddRestaurantMenuCategoryModal menuId={menu.id} onMenuCategoryCreated={onMenuCategoryCreated}/>
            </ModalWindow>
        </div>
    )
}

const RestaurantMenusNames = ({activeMenuId, setActiveMenuId, menusNames, restaurantId, onMenuCreated} : RestaurantMenusNamesProps) => {

    const onMenuNameClick = (menuId: string) => {
        setActiveMenuId(menuId)
    }


    return (
        <div className="restaurant__menus__names__container">
            <Scrollbar className='restaurant__menus__names__scrollbar' noScrollY={true} noScrollX={false}>
                {menusNames.map((menuName) => {
                    return (
                        <div key={menuName.id} className={`restaurant__menu__name__container ${activeMenuId === menuName.id ? 'restaurant__menu__name__container__active' : ''}`} onClick={() => onMenuNameClick(menuName.id)}>
                            <div className="restaurant__menu__name__text">
                                {menuName.name}
                            </div>
                        </div>
                    )
                })}
                <ModalWindow button={AddIconButton({className: 'open__adding__menu__button'})}>
                    <AddRestaurantMenuModal restaurantId={restaurantId} onMenuCreated={onMenuCreated}/>
                </ModalWindow>
            </Scrollbar>
        </div>
    )
}

const RestaurantMenus = ({menus, restaurantId, onMenuItemRemoved, onMenuCategoryDeleted, onMenuCategoryCreated, onMenuCategoryUpdated, onMenuCategoryImageUploaded, onMenuCreated} : RestaurantMenusProps) => {
    const [activeMenuId, setActiveMenuId] = React.useState<string | null>(menus[0] ? menus[0].id : null)
    const activeMenu = menus.find((menu) => menu.id === activeMenuId)

    return (
        <div className="restaurant__menus__container">
            <RestaurantMenusNames activeMenuId={activeMenuId} setActiveMenuId={setActiveMenuId} menusNames={menus} restaurantId={restaurantId} onMenuCreated={onMenuCreated}/>
            {activeMenu &&
                <RestaurantMenu
                    menu={activeMenu} 
                    onMenuItemRemoved={onMenuItemRemoved} 
                    onMenuCategoryCreated={onMenuCategoryCreated}
                    onMenuCategoryUpdated={onMenuCategoryUpdated}
                    onMenuCategoryImageUploaded={onMenuCategoryImageUploaded}
                    onMenuCategoryDeleted={onMenuCategoryDeleted}/>
            }
        </div>
    )
}

export default RestaurantMenus