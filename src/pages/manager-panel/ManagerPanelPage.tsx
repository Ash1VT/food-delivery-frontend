import React, { useState } from 'react'
import Footer from 'src/components/footer'
import Navbar from 'src/components/navbar'
import RestaurantInformation from './restaurant-information/RestaurantInformation'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import { getRestaurant } from 'src/redux/selectors/restaurantSelectors'
import { getCurrentRestaurant, getCurrentRestaurantMenuItems, getCurrentRestaurantMenus, getCurrentRestaurantPromocodes } from 'src/redux/selectors/currentRestaurantManagerSelector'
import RestaurantActivity from './restaurant-activity/RestaurantActivity'
import RestaurantWorkingHours from './restaurant-working-hours/RestaurantWorkingHours'
import RestaurantPromocodes from './restaurant-promocodes/RestaurantPromocodes'
import RestaurantMenuItems from './restaurant-menu-items/RestaurantMenuItems'
import RestaurantMenus from './restaurant-menus/RestaurantMenus'
import { getMenu } from 'src/redux/selectors/menuSelectors'
import IMenu from 'src/redux/models/IMenu'
import CurrentRestaurantMenuSelector from './current-restaurant-menu-selector/CurrentRestaurantMenuSelector'
import { addSuccessNotification } from 'src/utils/notifications'
import IRestaurant from 'src/redux/models/IRestaurant'
import IWorkingHours from 'src/redux/models/IWorkingHours'
import IMenuCategory from 'src/redux/models/IMenuCategory'
import IPromocode from 'src/redux/models/IPromocode'
import IMenuItem from 'src/redux/models/IMenuItem'
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core'
import DraggableMenuItem from './restaurant-menu-items/draggable-menu-item/DraggableMenuItem'
import './manager_panel_page.css'
import { getCurrentUser } from 'src/redux/selectors/currentUserSelectors'
import RestaurantImage from './restaurant-image/RestaurantImage'


const ManagerPanelPage = () => {
    const currentUser = useAppSelector(getCurrentUser)

    const restaurant = useAppSelector(getCurrentRestaurant)
    const restaurantPromocodes = useAppSelector(getCurrentRestaurantPromocodes)
    const restaurantMenuItems = useAppSelector(getCurrentRestaurantMenuItems)
    const restaurantMenus = useAppSelector(getCurrentRestaurantMenus)
    const restaurantCurrentMenu = useAppSelector((state) => getMenu(state, restaurant?.id))

    const [activeMenuId, setActiveMenuId] = useState<string | undefined | null>(restaurantCurrentMenu?.id)
    const [draggableMenuItemId, setDraggableMenuItemId] = useState<string | null>(null);

    if (!restaurant){
        return (
            <div>
                Create Application
            </div>
        )
    }

    const handleOpenEditingRestaurantInformation = async (restaurant: IRestaurant) => {
        alert(JSON.stringify(restaurant))
    }

    const handleRestaurantImageUploaded = async (id: string, image: File) => {
        alert('Restaurant image uploaded')
        addSuccessNotification('Restaurant image uploaded')
    }

    const handleRestaurantActivityChanged = async (id: string, isActive: boolean) => {
        alert('Restaurant activity changed')
        addSuccessNotification(`Successfully ${isActive ? 'activated' : 'deactivated'} restaurant`)
    }

    const handleOpenEditingWorkingHours = async (workingHours?: IWorkingHours) => {
        alert(JSON.stringify(workingHours))
    }

    const handleDeleteWorkingHours = async (id: string) => {
        alert('Delete restaurant working hours')
        addSuccessNotification('Deleted restaurant working hours')
    }

    const handleCurrentMenuSelected = async (menuId: string | undefined) => {
        if (!menuId) {
            alert('Unselected current menu')
            addSuccessNotification('Unselected current menu')
            return
        }

        alert('Selected current menu: ' + menuId)
        const menu = restaurantMenus.find(menu => menu.id === menuId)
        addSuccessNotification(`Selected current menu: ${menu?.name}`)
    }

    const handleRemoveMenuItem = async (menuCategoryId: string, menuItemId: string) => {
        alert(`Remove ${menuItemId} menu item from ${menuCategoryId} menu category`)
    }

    const handleDeleteMenuCategory = async (menuCategoryId: string) => {
        alert(`Delete ${menuCategoryId} menu category`)
        addSuccessNotification(`Deleted ${menuCategoryId} menu category`)
    }

    const handleOpenEditingMenuCategory = async (menuCategory: IMenuCategory) => {
        alert(`Open editing menu category: ${JSON.stringify(menuCategory)}`)
    }

    const handleOpenAddingMenu = async () => {
        alert('Open adding menu')
    }

    const handleOpenAddingMenuCategory = async () => {
        alert('Open adding menu category')
    }

    const handlePromocodeActivityChanged = async (id: string, isActive: boolean) => {
        alert('Promocode activity changed')
        addSuccessNotification(`Successfully ${isActive ? 'activated' : 'deactivated'} promocode`)
    }

    const handleOpenAddingPromocode = async () => {
        alert('Open adding promocode')
    }

    const handleOpenEditingPromocode = async (promocode: IPromocode) => {
        alert(`Open editing promocode: ${JSON.stringify(promocode)}`)
    }

    const handleOpenAddingMenuItem = async () => {
        alert('Open adding menu item')
    }

    const handleOpenEditingMenuItem = async (menuItem: IMenuItem) => {
        alert(`Edit ${JSON.stringify(menuItem)}`)
    }

    const handleDeleteMenuItem = async (id: string) => {
        alert(`Delete ${id}`)
    }

    const handleDragStart = (event: DragStartEvent) => {
        setDraggableMenuItemId(event.active.id.toString());
    }
    
    const handleDragEnd = async (event: DragEndEvent) => {
        setDraggableMenuItemId(null);

        const active = event.active
        const over = event.over

        if(!over || !active.data.current ||!over.data.current) return


        addSuccessNotification(`Successfully added ${active.data.current.menuItemName} to ${over.data.current.menuCategoryName}`)
        // console.log(active.data.current.menuItemId)
        // console.log(over.data.current.menuCategoryId)
    }

    return (
        <div className="container manager__panel__container">
            <Navbar currentUser={currentUser}/>
            <div className="manager__panel__wrapper">
                <div className="manager__panel__content">
                    <div className="manager__panel__section__wrapper manager__panel__restaurant__information__wrapper">
                        <div className='manager__panel__section__title'>Restaurant Information</div>
                        <RestaurantInformation 
                            restaurant={restaurant} 
                            onOpenEditingRestaurantInformation={handleOpenEditingRestaurantInformation}/>
                    </div>
                    <div className="manager__panel__section__wrapper manager__panel__restaurant__image__wrapper">
                        <RestaurantImage
                            restaurant={restaurant}
                            onRestaurantImageUploaded={handleRestaurantImageUploaded}/>
                    </div>
                    <div className="manager__panel__activity__hours__section">
                        <div className="manager__panel__section__wrapper manager__panel__restaurant__activity__wrapper">
                            <div className='manager__panel__section__title'>Activity of Restaurant</div>
                            <RestaurantActivity 
                                id={restaurant.id} 
                                isActive={restaurant.isActive} 
                                onRestaurantActivityChange={handleRestaurantActivityChanged}/>
                        </div>
                        <div className="manager__panel__section__wrapper manager__panel__restaurant__working__hours__wrapper">
                            <div className='manager__panel__section__title'>Restaurant Working Hours</div>
                            <RestaurantWorkingHours 
                                workingHours={restaurant.workingHours}
                                onOpenEditingWorkingHours={handleOpenEditingWorkingHours}
                                onDeleteWorkingHours={handleDeleteWorkingHours}/>
                        </div>
                    </div>
                    <div className="manager__panel__section__wrapper manager__panel__promocodes__wrapper">
                        <div className='manager__panel__section__title'>Promocodes</div>
                        <RestaurantPromocodes 
                            promocodes={restaurantPromocodes}
                            onOpenAddingPromocode={handleOpenAddingPromocode}
                            onOpenEditingPromocode={handleOpenEditingPromocode}
                            onPromocodeActivityChanged={handlePromocodeActivityChanged}/>
                    </div>
                    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                        <div className="manager__panel__section__wrapper manager__panel__menus__wrapper">
                            <div className='manager__panel__section__title'>Restaurant Menus</div>
                                <CurrentRestaurantMenuSelector 
                                    activeMenuId={activeMenuId} 
                                    setActiveMenuId={setActiveMenuId} 
                                    menus={restaurantMenus} 
                                    onCurrentMenuSelected={handleCurrentMenuSelected}/>
                                <RestaurantMenus 
                                    menus={restaurantMenus}
                                    onDeleteMenuCategory={handleDeleteMenuCategory}
                                    onOpenEditingMenuCategory={handleOpenEditingMenuCategory}
                                    onOpenAddingMenu={handleOpenAddingMenu}
                                    onOpenAddingMenuCategory={handleOpenAddingMenuCategory}
                                    onRemoveMenuItem={handleRemoveMenuItem}/>
                        </div>
                        <div className="manager__panel__section__wrapper manager__panel__menu__items__wrapper">
                            <div className='manager__panel__section__title'>Menu Items</div>
                            <RestaurantMenuItems 
                                menuItems={restaurantMenuItems}
                                draggableMenuItemId={draggableMenuItemId}
                                onOpenAddingMenuItem={handleOpenAddingMenuItem}
                                onOpenEditingMenuItem={handleOpenEditingMenuItem}
                                onDeleteMenuItem={handleDeleteMenuItem}/>
                        </div>
                        <DragOverlay>
                            {draggableMenuItemId ? (
                                <DraggableMenuItem menuItem={restaurantMenuItems.find(menuItem => menuItem.id === draggableMenuItemId) as IMenuItem}/>
                            ) : null
                            }
                        </DragOverlay>
                    </DndContext>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ManagerPanelPage