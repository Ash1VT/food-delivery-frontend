import { DraggableMenuItemProps } from '../../manager_panel.types'
import './draggable_menu_item.css'

const DraggableMenuItem = ({menuItem} : DraggableMenuItemProps) => {
    return (
        <div className='draggable__menu__item__container'>
            <div className='draggable__menu__item__image__wrapper'>
                <img className='draggable__menu__item__image' src={menuItem.imageUrl} alt='image'></img>
            </div>
            <div className='draggable__menu__item__name'>
                {menuItem.name}
            </div>
            <div className='draggable__menu__item__price'>
                {menuItem.price}$
            </div>
        </div>
    )
}

export default DraggableMenuItem