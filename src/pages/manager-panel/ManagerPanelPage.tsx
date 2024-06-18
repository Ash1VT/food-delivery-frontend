import React, { useCallback, useEffect, useState } from 'react'
import Footer from 'src/components/footer'
import Navbar from 'src/components/navbar'
import RestaurantInformation from './restaurant-information/RestaurantInformation'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import RestaurantActivity from './restaurant-activity/RestaurantActivity'
import RestaurantWorkingHours from './restaurant-working-hours/RestaurantWorkingHours'
import RestaurantPromocodes from './restaurant-promocodes/RestaurantPromocodes'
import RestaurantMenuItems from './restaurant-menu-items/RestaurantMenuItems'
import RestaurantMenus from './restaurant-menus/RestaurantMenus'
import CurrentRestaurantMenuSelector from './current-restaurant-menu-selector/CurrentRestaurantMenuSelector'
import { addErrorNotification, addSuccessNotification } from 'src/utils/notifications'
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core'
import DraggableMenuItem from './restaurant-menu-items/draggable-menu-item/DraggableMenuItem'
import RestaurantImage from './restaurant-image/RestaurantImage'
import { Restaurant, RestaurantCreate, RestaurantUpdate } from 'src/models/restaurant.interfaces'
import { WorkingHoursCreate, WorkingHoursUpdate } from 'src/models/workingHours.interfaces'
import { PromocodeCreate, PromocodeUpdate } from 'src/models/promocode.interfaces'
import { MenuItem, MenuItemCreate, MenuItemUpdate } from 'src/models/menuItem.interfaces'
import { MenuCategoryCreate, MenuCategoryUpdate } from 'src/models/menuCategory.interfaces'
import { Menu, MenuCreate } from 'src/models/menu.interfaces'
import { getCurrentManagerCreateApplication, getCurrentRestaurantMenu } from 'src/redux/selectors/currentManagerSelectors'
import RestaurantCreateApplication from './restaurant-create-application/RestaurantCreateApplication'
import './manager_panel_page.css'
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch'
import { activateRestaurant, createRestaurantWorkingHours, deactivateRestaurant, deleteRestaurantWorkingHours, fetchCurrentManagerRestaurant, updateRestaurantWorkingHours, uploadRestaurantImage } from 'src/redux/actions/currentManagerRestaurant.actions'
import { createRestaurant, fetchCurrentManagerRestaurantApplications, updateRestaurant } from 'src/redux/actions/currentManagerRestaurantApplications.actions'
import { createRestaurantMenuItem, deleteRestaurantMenuItem, fetchRestaurantMenuItems, updateRestaurantMenuItem, uploadRestaurantMenuItemImage } from 'src/redux/actions/currentManagerRestaurantMenuItems.actions'
import { addMenuItemToCategory, createRestaurantMenu, createRestaurantMenuCategory, deleteRestaurantMenuCategory, fetchCurrentManagerRestaurantCurrentMenu, fetchCurrentManagerRestaurantMenus, removeMenuItemFromCategory, setCurrentRestaurantMenu, unsetCurrentRestaurantMenu, updateRestaurantMenuCategory, uploadRestaurantMenuCategoryImage } from 'src/redux/actions/currentManagerRestaurantMenus.actions'
import { activatePromocode, createPromocode, deactivatePromocode, fetchCurrentManagerRestaurantPromocodes, updatePromocode } from 'src/redux/actions/currentManagerRestaurantPromocodes.actions'
import LoadingPage from '../loading-page/LoadingPage'


const ManagerPanelPage = () => {
    const dispatch = useAppDispatch()
    const { isLoading: isCurrentUserLoading, currentUser, error: currentUserError } = useAppSelector((state) => state.currentUserReducer)

    const { isLoading: isCurrentManagerRestaurantLoading, restaurant, error: currentManagerRestaurantError } = useAppSelector((state) => state.currentManagerRestaurantReducer)
    const { isLoading: isCurrentManagerRestaurantPromocodesLoading, promocodes: restaurantPromocodes, error: currentManagerRestaurantPromocodesError } = useAppSelector((state) => state.currentManagerRestaurantPromocodesReducer)
    const { isMenusLoading: isCurrentManagerRestaurantMenusLoading, isCurrentMenuLoading: isCurrentManagerRestaurantCurrentMenuLoading, currentMenuId, menus: restaurantMenus, currentMenuError: currentManagerRestaurantCurrentMenuError, menusError: currentManagerRestaurantMenusError } = useAppSelector((state) => state.currentManagerRestaurantMenusReducer)
    const { isLoading: isCurrentManagerRestaurantApplicationsLoading, applications: restaurantApplications, error: currentManagerRestaurantApplicationsError } = useAppSelector((state) => state.currentManagerRestaurantApplicationsReducer)
    const { isLoading: isCurrentManagerRestaurantMenuItemsLoading, menuItems: restaurantMenuItems, error: currentManagerRestaurantMenuItemsError } = useAppSelector((state) => state.currentManagerRestaurantMenuItemsReducer)
    
    const restaurantCreateApplication = useAppSelector((state) => getCurrentManagerCreateApplication(state))
    const restaurantCurrentMenu = useAppSelector((state) => getCurrentRestaurantMenu(state))
    const [draggableMenuItemId, setDraggableMenuItemId] = useState<string | null>(null);


    useEffect(() => {
        dispatch(fetchCurrentManagerRestaurantApplications()).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                dispatch(fetchCurrentManagerRestaurant()).then((response) => {
                    if (response.meta.requestStatus === 'fulfilled') {
                        const restaurant = response.payload as Restaurant
                        if (restaurant) {
    
                            dispatch(fetchRestaurantMenuItems(restaurant.id)).then((response) => {
                                if (response.meta.requestStatus === 'rejected') {
                                    addErrorNotification(response.payload as string)
                                }
                            })
    
                            dispatch(fetchCurrentManagerRestaurantMenus(restaurant.id)).then((response) => {
                                if (response.meta.requestStatus === 'fulfilled') {
                                    dispatch(fetchCurrentManagerRestaurantCurrentMenu(restaurant.id)).then((response) => {
                                        // if (response.meta.requestStatus === 'fulfilled') {
                                        //     const currentMenu = response.payload as Menu
                                        //     if (currentMenu)
                                        //         setActiveMenuId(currentMenu.id)
                                        // }
                                    })
                                }
                                
                                if (response.meta.requestStatus === 'rejected') {
                                    addErrorNotification(response.payload as string)
                                }
                            })
    
                            dispatch(fetchCurrentManagerRestaurantPromocodes(restaurant.id)).then((response) => {
                                if (response.meta.requestStatus === 'rejected') {
                                    addErrorNotification(response.payload as string)
                                }
                            })   
                        }
                    }

                    if (response.meta.requestStatus === 'rejected') {
                        addErrorNotification(response.payload as string)
                    }
                })
            }
        })

    }, [dispatch])

    // RESTAURANT CREATE APPLICATION

    const handleRestaurantCreated = async (restaurant: RestaurantCreate) => {
        dispatch(createRestaurant(restaurant)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully created restaurant application. Wait until moderation will apply it.')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    // RESTAURANT INFORMATION
    const handleRestaurantUpdated = async (restaurant: RestaurantUpdate) => {
        dispatch(updateRestaurant(restaurant)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully created restaurant application. Wait until moderation will apply it.')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleRestaurantImageUploaded = async (id: string, image: File) => {
        console.log('dolvoeb')
        dispatch(uploadRestaurantImage({id, image})).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Restaurant image uploaded')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    // RESTAURANT ACTIVITY

    const handleRestaurantActivityChanged = async (id: string, isActive: boolean) => {
        if (isActive) {
            dispatch(activateRestaurant(id)).then((response) => {
                if (response.meta.requestStatus === 'fulfilled') {
                    addSuccessNotification('Successfully activated restaurant')
                }
                if (response.meta.requestStatus === 'rejected') {
                    addErrorNotification(response.payload as string)
                }
            })
        } else {
            dispatch(deactivateRestaurant(id)).then((response) => {
                if (response.meta.requestStatus === 'fulfilled') {
                    addSuccessNotification('Successfully deactivated restaurant')
                }
                if (response.meta.requestStatus === 'rejected') {
                    addErrorNotification(response.payload as string)
                }
            })
        }
    }

    // RESTAURANT WORKING HOURS

    const handleWorkingHoursCreated = async (workingHours: WorkingHoursCreate) => {
        dispatch(createRestaurantWorkingHours(workingHours)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully created restaurant working hours')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleWorkingHoursUpdated = async (workingHours: WorkingHoursUpdate) => {
        dispatch(updateRestaurantWorkingHours(workingHours)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully updated restaurant working hours')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleWorkingHoursDeleted = async (id: string) => {
        dispatch(deleteRestaurantWorkingHours(id)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully deleted restaurant working hours')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    // RESTAURANT CURRENT MENU

    const handleCurrentMenuSelected = async (menuId: string | undefined) => {
        if (restaurant) {
            if (!menuId) {
                dispatch(unsetCurrentRestaurantMenu(restaurant.id)).then((response) => {
                    if (response.meta.requestStatus === 'fulfilled') {
                        addSuccessNotification('Unselected current menu for restaurant')
                    }
                    if (response.meta.requestStatus === 'rejected') {
                        addErrorNotification(response.payload as string)
                    }
                })
                return
            }

            dispatch(setCurrentRestaurantMenu({restaurantId: restaurant.id, menuId: menuId})).then((response) => {
                if (response.meta.requestStatus === 'fulfilled') {
                    addSuccessNotification('Selected current menu for restaurant')
                }
                if (response.meta.requestStatus === 'rejected') {
                    addErrorNotification(response.payload as string)
                }
            })
        }
    }

    // RESTAURANT MENUS

    const handleMenuItemRemoved = async (menuCategoryId: string, menuItemId: string) => {
        dispatch(removeMenuItemFromCategory({categoryId: menuCategoryId, itemId: menuItemId})).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully removed menu item from menu category')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleMenuCategoryCreated = async (menuCategory: MenuCategoryCreate) => {
        dispatch(createRestaurantMenuCategory(menuCategory)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully created menu category')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleMenuCategoryUpdated = async (menuCategory: MenuCategoryUpdate) => {
        dispatch(updateRestaurantMenuCategory(menuCategory)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully updated menu category')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleMenuCategoryImageUploaded = async (menuCategoryId: string, image: File) => {
        dispatch(uploadRestaurantMenuCategoryImage({id: menuCategoryId, image})).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Menu category image uploaded')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleMenuCategoryDeleted = async (menuCategoryId: string) => {
        dispatch(deleteRestaurantMenuCategory(menuCategoryId)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully deleted menu category')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleMenuCreated = async (menu: MenuCreate) => {
        dispatch(createRestaurantMenu(menu)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully created menu')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    // RESTAURANT PROMOCODES

    const handlePromocodeActivityChanged = async (id: string, isActive: boolean) => {
        if (isActive) {
            dispatch(activatePromocode(id)).then((response) => {
                if (response.meta.requestStatus === 'fulfilled') {
                    addSuccessNotification('Successfully activated promocode')
                }
                if (response.meta.requestStatus === 'rejected') {
                    addErrorNotification(response.payload as string)
                }
            })
        } else {
            dispatch(deactivatePromocode(id)).then((response) => {
                if (response.meta.requestStatus === 'fulfilled') {
                    addSuccessNotification('Successfully deactivated promocode')
                }
                if (response.meta.requestStatus === 'rejected') {
                    addErrorNotification(response.payload as string)
                }
            })
        }
    }

    const handlePromocodeCreated = async (promocode: PromocodeCreate) => {
        dispatch(createPromocode(promocode)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully created promocode')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handlePromocodeUpdated = async (promocode: PromocodeUpdate) => {
        dispatch(updatePromocode(promocode)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully updated promocode')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    // RESTAURANT MENU ITEMS

    const handleMenuItemCreated = async (menuItem: MenuItemCreate) => {
        dispatch(createRestaurantMenuItem(menuItem)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully created menu item')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleMenuItemUpdated = async (menuItem: MenuItemUpdate) => {
        dispatch(updateRestaurantMenuItem(menuItem)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully updated menu item')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleMenuItemImageUploaded = async (id: string, image: File) => {
        console.log('eblanishe')
        dispatch(uploadRestaurantMenuItemImage({id, image})).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Menu item image uploaded')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleMenuItemDeleted = async (id: string) => {
        dispatch(deleteRestaurantMenuItem(id)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification('Successfully deleted menu item')
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const handleDragStart = (event: DragStartEvent) => {
        setDraggableMenuItemId(event.active.id.toString());
    }

    const handleDragEnd = async (event: DragEndEvent) => {
        setDraggableMenuItemId(null);

        const active = event.active
        const over = event.over

        if(!over || !active.data.current ||!over.data.current) return

        dispatch(addMenuItemToCategory({categoryId: over.data.current.menuCategoryId, menuItem: active.data.current.menuItem})).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                addSuccessNotification(`Successfully added menu item ${active.data.current?.menuItemName} to menu category ${over.data.current?.menuCategoryName}`)
            }
            if (response.meta.requestStatus === 'rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    const renderPanel = useCallback(() => {
        if (restaurant) {
            return (
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
                    <div className="manager__panel__section__wrapper manager__panel__menus__wrapper">
                        <div className='manager__panel__section__title'>Restaurant Menus</div>
                            <CurrentRestaurantMenuSelector 
                                activeMenuId={currentMenuId} 
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
                </div>
            )
        }

        if (restaurantCreateApplication) {
            return (
                <div className='manager__panel__content'>
                    <div className='manager__panel__content__title'>
                        Your application has been submitted. Wait for your restaurant to be approved.
                    </div>
                </div>
            )
        }

        return (
            <div className="manager__panel__content">
                <RestaurantCreateApplication onRestaurantCreated={handleRestaurantCreated}/>
            </div>
        )
    }, [restaurant, restaurantCreateApplication, currentMenuId, restaurantMenuItems, restaurantMenus, restaurantPromocodes])


    if (isCurrentManagerRestaurantApplicationsLoading || isCurrentUserLoading || isCurrentManagerRestaurantPromocodesLoading || isCurrentManagerRestaurantMenusLoading ||  isCurrentManagerRestaurantMenuItemsLoading ||isCurrentManagerRestaurantLoading) {
        return <LoadingPage/>
    }


    return (
        <div className="container manager__panel__container">
            <Navbar currentUser={currentUser}/>
            <div className="manager__panel__wrapper">
                <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                    {renderPanel()}
                    <DragOverlay>
                        {draggableMenuItemId ? (
                            <DraggableMenuItem menuItem={restaurantMenuItems.find(menuItem => menuItem.id.toString() === draggableMenuItemId) as MenuItem}/>
                        ) : null}
                    </DragOverlay>
                </DndContext>
            </div>
            <Footer/>
        </div>
    )
}

export default ManagerPanelPage