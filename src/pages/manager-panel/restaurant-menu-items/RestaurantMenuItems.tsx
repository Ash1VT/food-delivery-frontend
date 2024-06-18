import { useRef } from 'react'
import { RestaurantMenuItemProps, RestaurantMenuItemsProps } from '../manager_panel.types'
import EditIconButton from '../../../components/ui/buttons/edit-icon-button/EditIconButton'
import DeleteIconButton from '../../../components/ui/buttons/delete-icon-button/DeleteIconButton'
import OpenAddingMenuItemButton from '../ui/buttons/open-adding-menu-item-button/OpenAddingMenuItemButton'
import Scrollbar from 'react-scrollbars-custom'
import { useDraggable } from '@dnd-kit/core'
import { MenuItemCreate, MenuItemUpdate } from 'src/models/menuItem.interfaces'
import EditRestaurantMenuItemModal from '../ui/modals/edit-restaurant-menu-item-modal/EditRestaurantMenuItemModal'
import ModalWindow from 'src/components/modal-window/ModalWindow'
import AddRestaurantMenuItemModal from '../ui/modals/add-restaurant-menu-item-modal/AddRestaurantMenuItemModal'
import './restaurant_menu_items.css'


const RestaurantMenuItem = ({menuItem, onMenuItemUpdated, onMenuItemImageUploaded, onMenuItemDeleted} : RestaurantMenuItemProps) => {
    const firstColumnRef = useRef(null);
    const secondColumnRef = useRef(null);
    const thirdColumnRef = useRef(null);
    
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: menuItem.id,
        data: {
            menuItem: menuItem
        }
    })

    const handleMenuItemUpdated = async (menuItem: MenuItemUpdate) => {
        await onMenuItemUpdated(menuItem)
    }

    const handleMenuItemDeleted = async () => {
        await onMenuItemDeleted(menuItem.id)
    }

    return (
        <tr className='restaurant__menu__item__tr' ref={setNodeRef}>
            <th className='restaurant__menu__item__th__draggable' ref={firstColumnRef} {...attributes} {...listeners}>
                <div className="restaurant__menu__item__image__wrapper">
                    <img className='restaurant__menu__item__image' src={menuItem.imageUrl} alt='image'></img>
                </div>
            </th>
            <th className='restaurant__menu__item__th__draggable' ref={secondColumnRef} {...attributes} {...listeners}>
                <div className="restaurant__menu__item__text restaurant__menu__item__margin__left">
                    {menuItem.name}
                </div>
            </th>
            <th className='restaurant__menu__item__th__draggable' ref={thirdColumnRef} {...attributes} {...listeners}>
                <div className="restaurant__menu__item__text restaurant__menu__item__margin__left">
                    {menuItem.price}$
                </div>
            </th>
            <th style={{width: '100%'}}>
                <div className='restaurant__menu__item__buttons'>
                    <ModalWindow button={EditIconButton({})}>
                        <EditRestaurantMenuItemModal menuItem={menuItem} onMenuItemImageUploaded={onMenuItemImageUploaded} onMenuItemUpdated={handleMenuItemUpdated}/>
                    </ModalWindow>
                    <DeleteIconButton onDelete={handleMenuItemDeleted}/>
                </div>
            </th>
        </tr>
    )
}

const RestaurantMenuItems = ({menuItems, restaurantId, onMenuItemCreated, onMenuItemUpdated, onMenuItemImageUploaded, onMenuItemDeleted} : RestaurantMenuItemsProps) => {
    
    const handleMenuItemCreated = async (menuItem: MenuItemCreate) => {
        await onMenuItemCreated(menuItem)
    }
    
    return (
        <div className='restaurant__menu__items__container'>
            <div className='restaurant__menu__items__wrapper'>
                <table className='restaurant__menu__items__table'>
                    {/* <tr style={{height: '10px'}}/> */}
                    {menuItems.map((menuItem) => (
                        <RestaurantMenuItem
                            key={menuItem.id}
                            onMenuItemUpdated={onMenuItemUpdated}
                            onMenuItemImageUploaded={onMenuItemImageUploaded}
                            onMenuItemDeleted={onMenuItemDeleted}
                            menuItem={menuItem}
                        />
                    ))}
                </table>
            </div>
            <ModalWindow button={OpenAddingMenuItemButton({})}>
                <AddRestaurantMenuItemModal restaurantId={restaurantId} onMenuItemCreated={handleMenuItemCreated}/>
            </ModalWindow>
        </div>
    )
}

export default RestaurantMenuItems