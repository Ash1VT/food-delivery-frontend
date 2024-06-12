import React, { useState } from 'react'
import Footer from 'src/components/footer'
import Navbar from 'src/components/navbar'
import RestaurantInformation from './restaurant-information/RestaurantInformation'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import RestaurantActivity from './restaurant-activity/RestaurantActivity'
import RestaurantWorkingHours from './restaurant-working-hours/RestaurantWorkingHours'
import RestaurantPromocodes from './restaurant-promocodes/RestaurantPromocodes'
import RestaurantMenuItems from './restaurant-menu-items/RestaurantMenuItems'
import RestaurantMenus from './restaurant-menus/RestaurantMenus'
import { getMenu, getMenuItems } from 'src/redux/selectors/menuSelectors'
import CurrentRestaurantMenuSelector from './current-restaurant-menu-selector/CurrentRestaurantMenuSelector'
import { addSuccessNotification } from 'src/utils/notifications'
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core'
import DraggableMenuItem from './restaurant-menu-items/draggable-menu-item/DraggableMenuItem'
import RestaurantImage from './restaurant-image/RestaurantImage'
import { RestaurantUpdate } from 'src/models/restaurant.interfaces'
import { WorkingHoursCreate, WorkingHoursUpdate } from 'src/models/workingHours.interfaces'
import { PromocodeCreate, PromocodeUpdate } from 'src/models/promocode.interfaces'
import { MenuItem, MenuItemCreate, MenuItemUpdate } from 'src/models/menuItem.interfaces'
import { MenuCategoryCreate, MenuCategoryUpdate } from 'src/models/menuCategory.interfaces'
import { MenuCreate } from 'src/models/menu.interfaces'
import './manager_panel_page.css'
import { getCurrentRestaurantMenuItems } from 'src/redux/selectors/currentManagerSelectors'


const ManagerPanelPage = () => {
    const { isLoading: isCurrentUserLoading, currentUser, error: currentUserError } = useAppSelector((state) => state.currentUserReducer)

    const { isLoading: isCurrentManagerRestaurantLoading, restaurant, error: currentManagerRestaurantError } = useAppSelector((state) => state.currentManagerRestaurantReducer)
    const { isLoading: isCurrentManagerRestaurantPromocodesLoading, promocodes: restaurantPromocodes, error: currentManagerRestaurantPromocodesError } = useAppSelector((state) => state.currentManagerRestaurantPromocodesReducer)
    const { isLoading: isCurrentManagerRestaurantMenusLoading, menus: restaurantMenus, error: currentManagerRestaurantMenusError } = useAppSelector((state) => state.currentManagerRestaurantMenusReducer)
    const restaurantMenuItems = useAppSelector((state) => getCurrentRestaurantMenuItems(state))
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

    // RESTAURANT INFORMATION
    const handleRestaurantUpdated = async (restaurant: RestaurantUpdate) => {
        alert(JSON.stringify(restaurant))
    }

    const handleRestaurantImageUploaded = async (id: string, image: File) => {
        alert('Restaurant image uploaded')
        addSuccessNotification('Restaurant image uploaded')
    }

    // RESTAURANT ACTIVITY

    const handleRestaurantActivityChanged = async (id: string, isActive: boolean) => {
        alert('Restaurant activity changed')
        addSuccessNotification(`Successfully ${isActive ? 'activated' : 'deactivated'} restaurant`)
    }

    // RESTAURANT WORKING HOURS

    const handleWorkingHoursCreated = async (workingHours: WorkingHoursCreate) => {
        alert(JSON.stringify(workingHours))
        addSuccessNotification('Created restaurant working hours')
    }

    const handleWorkingHoursUpdated = async (workingHours: WorkingHoursUpdate) => {
        alert(JSON.stringify(workingHours))
        addSuccessNotification('Updated restaurant working hours')
    }

    const handleWorkingHoursDeleted = async (id: string) => {
        alert('Delete restaurant working hours')
        addSuccessNotification('Deleted restaurant working hours')
    }

    // RESTAURANT CURRENT MENU

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

    // RESTAURANT MENUS

    const handleMenuItemRemoved = async (menuCategoryId: string, menuItemId: string) => {
        alert(`Remove ${menuItemId} menu item from ${menuCategoryId} menu category`)
    }

    const handleMenuCategoryCreated = async (menuCategory: MenuCategoryCreate) => {
        alert(JSON.stringify(menuCategory))
        addSuccessNotification('Successfully created menu category')
    }

    const handleMenuCategoryUpdated = async (menuCategory: MenuCategoryUpdate) => {
        alert(JSON.stringify(menuCategory))
        addSuccessNotification('Successfully updated menu category')
    }

    const handleMenuCategoryImageUploaded = async (menuCategoryId: string, image: File) => {
        alert('Menu category image uploaded')
        addSuccessNotification('Menu category image uploaded')
    }

    const handleMenuCategoryDeleted = async (menuCategoryId: string) => {
        alert(`Delete ${menuCategoryId} menu category`)
        addSuccessNotification(`Deleted ${menuCategoryId} menu category`)
    }

    const handleMenuCreated = async (menu: MenuCreate) => {
        alert(JSON.stringify(menu))
        addSuccessNotification('Successfully created menu')
    }

    // RESTAURANT PROMOCODES

    const handlePromocodeActivityChanged = async (id: string, isActive: boolean) => {
        alert('Promocode activity changed')
        addSuccessNotification(`Successfully ${isActive ? 'activated' : 'deactivated'} promocode`)
    }

    const handlePromocodeCreated = async (promocode: PromocodeCreate) => {
        alert(JSON.stringify(promocode))
        addSuccessNotification('Successfully created promocode')
    }

    const handlePromocodeUpdated = async (promocode: PromocodeUpdate) => {
        alert(JSON.stringify(promocode))
        addSuccessNotification('Successfully updated promocode')
    }

    // RESTAURANT MENU ITEMS

    const handleMenuItemCreated = async (menuItem: MenuItemCreate) => {
        alert(JSON.stringify(menuItem))
        addSuccessNotification('Successfully created menu item')
    }

    const handleMenuItemUpdated = async (menuItem: MenuItemUpdate) => {
        alert(JSON.stringify(menuItem))
        addSuccessNotification('Successfully updated menu item')
    }

    const handleMenuItemImageUploaded = async (id: string, image: File) => {
        alert('Menu item image uploaded')
        addSuccessNotification('Menu item image uploaded')
    }

    const handleMenuItemDeleted = async (id: string) => {
        alert(`Delete ${id}`)
        addSuccessNotification(`Successfully deleted menu item`)
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
                            onRestaurantUpdated={handleRestaurantUpdated}/>
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
                                restaurantId={restaurant.id}
                                onWorkingHoursCreated={handleWorkingHoursCreated}
                                onWorkingHoursUpdated={handleWorkingHoursUpdated}
                                onWorkingHoursDeleted={handleWorkingHoursDeleted}/>
                        </div>
                    </div>
                    <div className="manager__panel__section__wrapper manager__panel__promocodes__wrapper">
                        <div className='manager__panel__section__title'>Promocodes</div>
                        <RestaurantPromocodes 
                            promocodes={restaurantPromocodes}
                            restaurantId={restaurant.id}
                            onPromocodeCreated={handlePromocodeCreated}
                            onPromocodeUpdated={handlePromocodeUpdated}
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
                                    restaurantId={restaurant.id}
                                    onMenuCategoryCreated={handleMenuCategoryCreated}
                                    onMenuCategoryUpdated={handleMenuCategoryUpdated}
                                    onMenuCategoryImageUploaded={handleMenuCategoryImageUploaded}
                                    onMenuCategoryDeleted={handleMenuCategoryDeleted}
                                    onMenuCreated={handleMenuCreated}
                                    onMenuItemRemoved={handleMenuItemRemoved}/>
                        </div>
                        <div className="manager__panel__section__wrapper manager__panel__menu__items__wrapper">
                            <div className='manager__panel__section__title'>Menu Items</div>
                            <RestaurantMenuItems 
                                menuItems={restaurantMenuItems}
                                restaurantId={restaurant.id}
                                onMenuItemCreated={handleMenuItemCreated}
                                onMenuItemUpdated={handleMenuItemUpdated}
                                onMenuItemImageUploaded={handleMenuItemImageUploaded}
                                onMenuItemDeleted={handleMenuItemDeleted}/>
                        </div>
                        <DragOverlay>
                            {draggableMenuItemId ? (
                                <DraggableMenuItem menuItem={restaurantMenuItems.find(menuItem => menuItem.id === draggableMenuItemId) as MenuItem}/>
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