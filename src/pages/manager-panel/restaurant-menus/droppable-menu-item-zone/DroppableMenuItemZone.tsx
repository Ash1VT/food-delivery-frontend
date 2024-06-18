import React, { useState } from 'react'
import { useDroppable } from '@dnd-kit/core'
import { DroppableMenuItemZoneProps } from '../../manager_panel.types'
import './droppable_menu_item_zone.css'

const DroppableMenuItemZone = ({menuCategory} : DroppableMenuItemZoneProps) => {
    const {setNodeRef, isOver} = useDroppable({
        id: menuCategory.id,
        data: {
            menuCategoryId: menuCategory.id,
            menuCategoryName: menuCategory.name
        }
    })

    const containerClass = `droppable__menu__item__zone__container ${isOver ? 'droppable__menu__item__zone__over' : ''}`

    return (
        <div className={containerClass} 
             ref={setNodeRef}>
            <div className='droppable__menu__item__zone__text'>
                Drag Menu Item there to add it to the Category
            </div>
        </div>
    )
}

export default DroppableMenuItemZone