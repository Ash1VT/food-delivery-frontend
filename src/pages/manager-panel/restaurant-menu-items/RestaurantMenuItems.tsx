import React from 'react'
import { RestaurantMenuItemProps, RestaurantMenuItemsProps } from '../manager_panel.types'
import EditIconButton from '../ui/buttons/edit-icon-button/EditIconButton'
import IMenuItem from 'src/redux/models/IMenuItem'
import DeleteIconButton from '../ui/buttons/delete-icon-button/DeleteIconButton'
import OpenAddingMenuItemButton from '../ui/buttons/open-adding-menu-item-button/OpenAddingMenuItemButton'
import Scrollbar from 'react-scrollbars-custom'
import { DragOverlay, useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities';
import './restaurant_menu_items.css'


const RestaurantMenuItem = ({menuItem, onOpenEditingMenuItem, onDeleteMenuItem} : RestaurantMenuItemProps) => {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: menuItem.id,
        data: {
            menuItemId: menuItem.id,
            menuItemName: menuItem.name
        }
    })

    const handleOpenEditingMenuItem = async () => {
        await onOpenEditingMenuItem(menuItem)
    }

    const handleDeleteMenuItem = async () => {
        await onDeleteMenuItem(menuItem.id)
    }

    return (
        <tr className='restaurant__menu__item__tr' ref={setNodeRef} {...attributes} {...listeners}>
            <th>
                <div className="restaurant__menu__item__text">
                    <img className='restaurant__menu__item__image' src={menuItem.imageUrl} alt='image'></img>
                </div>
            </th>
            <th>
                <div className="restaurant__menu__item__text restaurant__menu__item__margin__left">
                    {menuItem.name}
                </div>
            </th>
            <th>
                <div className="restaurant__menu__item__text restaurant__menu__item__margin__left">
                    {menuItem.price}$
                </div>
            </th>
            <th style={{width: '100%'}}>
                <div className='restaurant__menu__item__buttons'>
                    <EditIconButton onEdit={handleOpenEditingMenuItem}/>
                    <DeleteIconButton onDelete={handleDeleteMenuItem}/>
                </div>
            </th>
        </tr>
    )
}

const RestaurantMenuItems = ({menuItems, onOpenAddingMenuItem, onOpenEditingMenuItem, onDeleteMenuItem} : RestaurantMenuItemsProps) => {

    return (
        <div className='restaurant__menu__items__container'>
            <Scrollbar className='restaurant__menu__items__scrollbar' noScrollX={true} noScrollY={false}>
                <table className='restaurant__menu__items__table'>
                    {/* <tr style={{height: '10px'}}/> */}
                    {menuItems.map((menuItem) => (
                        <RestaurantMenuItem
                            key={menuItem.id}
                            onOpenEditingMenuItem={onOpenEditingMenuItem}
                            onDeleteMenuItem={onDeleteMenuItem}
                            menuItem={menuItem}
                        />
                    ))}
                </table>
            </Scrollbar>
            <OpenAddingMenuItemButton onOpen={onOpenAddingMenuItem}/>
        </div>
    )
}

export default RestaurantMenuItems