import SvgIcon from '@mui/material/SvgIcon';
import { Menu, MenuCreate } from 'src/models/menu.interfaces';
import { MenuCategory, MenuCategoryCreate, MenuCategoryUpdate } from 'src/models/menuCategory.interfaces';
import { MenuItem, MenuItemCreate, MenuItemUpdate } from 'src/models/menuItem.interfaces';
import { Promocode, PromocodeCreate, PromocodeUpdate } from 'src/models/promocode.interfaces';
import { Restaurant, RestaurantUpdate } from 'src/models/restaurant.interfaces';
import { WorkingHours, WorkingHoursCreate, WorkingHoursUpdate } from 'src/models/workingHours.interfaces';


// RESTAURANT INFORMATION

export type RestaurantInformationProps = {
    restaurant: Restaurant
    onRestaurantUpdated: (restaurant: RestaurantUpdate) => Promise<void>
}

export type EditRestaurantInformationModalProps = {
    restaurant: Restaurant
    onRestaurantUpdated: (restaurant: RestaurantUpdate) => Promise<void>
}

// RESTAURANT IMAGE

export type RestaurantImageProps = {
    restaurant: Restaurant
    onRestaurantImageUploaded: (id: string, image: File) => Promise<void>
}

export type UploadRestaurantImageProps = {
    onRestaurantImageUploaded: (image: File) => Promise<void>
}

// RESTAURANT PROMOCODES

export type RestaurantPromocodeProps = {
    promocode: Promocode
    onPromocodeUpdated: (promocode: PromocodeUpdate) => Promise<void>
    onPromocodeActivityChanged: (id: string, isActive: boolean) => Promise<void>
}

export type RestaurantPromocodesProps = {
    promocodes: Promocode[]
    restaurantId: string
    onPromocodeActivityChanged: (id: string, isActive: boolean) => Promise<void>
    onPromocodeCreated: (promocode: PromocodeCreate) => Promise<void>
    onPromocodeUpdated: (promocode: PromocodeUpdate) => Promise<void>
}


export type AddRestaurantPromocodeModalProps = {
    restaurantId: string
    onPromocodeCreated: (promocode: PromocodeCreate) => Promise<void>
}

export type EditRestaurantPromocodeModalProps = {
    promocode: Promocode
    onPromocodeUpdated: (promocode: PromocodeUpdate) => Promise<void>
}


// Restaurant Activity

export type RestaurantActivityProps = {
    id: string
    isActive: boolean
    onRestaurantActivityChange: (id: string, isActive: boolean) => Promise<void>
}

// RESTAURANT WORKING DAYS

export type RestaurantDayWorkingHoursProps = {
    dayOfWeek: string
    restaurantId: string
    workingHours?: WorkingHours
    onWorkingHoursCreated: (workingHours: WorkingHoursCreate) => Promise<void>
    onWorkingHoursUpdated: (workingHours: WorkingHoursUpdate) => Promise<void>
    onWorkingHoursDeleted: (id: string) => Promise<void>
}


export type RestaurantWorkingHoursProps = {
    workingHours: WorkingHours[]
    restaurantId: string
    onWorkingHoursCreated: (workingHours: WorkingHoursCreate) => Promise<void>
    onWorkingHoursUpdated: (workingHours: WorkingHoursUpdate) => Promise<void>
    onWorkingHoursDeleted: (id: string) => Promise<void>
}

export type AddRestaurantWorkingHoursModalProps = {
    dayOfWeek: string
    restaurantId: string
    onWorkingHoursCreated: (workingHours: WorkingHoursCreate) => Promise<void>
}

export type EditRestaurantWorkingHoursModalProps = {
    workingHours: WorkingHours
    onWorkingHoursUpdated: (workingHours: WorkingHoursUpdate) => Promise<void>
}

// RESTAURANT MENU ITEMS

export type RestaurantMenuItemProps = {
    menuItem: MenuItem
    onMenuItemUpdated: (menuItem: MenuItemUpdate) => Promise<void>
    onMenuItemImageUploaded: (id: string, image: File) => Promise<void>
    onMenuItemDeleted: (id: string) => Promise<void>
}

export type RestaurantMenuItemsProps = {
    menuItems: MenuItem[]
    restaurantId: string
    onMenuItemCreated: (menuItem: MenuItemCreate) => Promise<void>
    onMenuItemUpdated: (menuItem: MenuItemUpdate) => Promise<void>
    onMenuItemImageUploaded: (id: string, image: File) => Promise<void>
    onMenuItemDeleted: (id: string) => Promise<void>
}

export type AddRestaurantMenuItemModalProps = {
    restaurantId: string
    onMenuItemCreated: (menuItem: MenuItemCreate) => Promise<void>
}

export type EditRestaurantMenuItemModalProps = {
    menuItem: MenuItem
    onMenuItemUpdated: (menuItem: MenuItemUpdate) => Promise<void>
    onMenuItemImageUploaded: (id: string, image: File) => Promise<void>
}


export type DraggableMenuItemProps = {
    menuItem: MenuItem
}

// RESTAURANT MENUS

export type RestaurantMenusProps = {
    menus: Menu[]
    restaurantId: string
    onMenuItemRemoved: (menuCategoryId: string, menuItemId: string) => Promise<void>
    onMenuCategoryCreated: (menuCategory: MenuCategoryCreate) => Promise<void>
    onMenuCategoryUpdated: (menuCategory: MenuCategoryUpdate) => Promise<void>
    onMenuCategoryImageUploaded: (id: string, image: File) => Promise<void>
    onMenuCategoryDeleted: (id: string) => Promise<void>
    onMenuCreated: (menu: MenuCreate) => Promise<void>
}

export type RestaurantMenusNamesProps = {
    activeMenuId?: string | null
    setActiveMenuId: (activeMenuId: string) => void
    menusNames: {
        id: string
        name: string
    }[]
    restaurantId: string
    onMenuCreated: (menu: MenuCreate) => Promise<void>
}

export type RestaurantMenuProps = {
    menu: Menu
    onMenuItemRemoved: (menuCategoryId: string, menuItemId: string) => Promise<void>
    onMenuCategoryCreated: (menuCategory: MenuCategoryCreate) => Promise<void>
    onMenuCategoryUpdated: (menuCategory: MenuCategoryUpdate) => Promise<void>
    onMenuCategoryImageUploaded: (id: string, image: File) => Promise<void>
    onMenuCategoryDeleted: (id: string) => Promise<void>
}

export type RestaurantMenuCategoryProps = {
    menuCategory: MenuCategory
    onMenuCategoryImageUploaded: (id: string, image: File) => Promise<void>
    onMenuCategoryUpdated: (menuCategory: MenuCategoryUpdate) => Promise<void>
    onMenuCategoryDeleted: (id: string) => Promise<void>
    onMenuItemRemoved: (menuCategoryId: string, menuItemId: string) => Promise<void>
}

export type RestaurantMenuCategoryItemProps = {
    menuItem: MenuItem
    menuCategoryId: string
    onRemove: (menuCategoryId: string, menuItemId: string) => Promise<void>
}

export type DroppableMenuItemZoneProps = {
    menuCategory: MenuCategory
}

export type AddRestaurantMenuModalProps = {
    restaurantId: string
    onMenuCreated: (menu: MenuCreate) => Promise<void>
}

export type AddRestaurantMenuCategoryModalProps = {
    menuId: string
    onMenuCategoryCreated: (menuCategory: MenuCategoryCreate) => Promise<void>
}

export type EditRestaurantMenuCategoryModalProps = {
    menuCategory: MenuCategory
    onMenuCategoryImageUploaded: (id: string, image: File) => Promise<void>
    onMenuCategoryUpdated: (menuCategory: MenuCategoryUpdate) => Promise<void>
}

// RESTAURANT CURRENT MENU SELECTOR

export type CurrentRestaurantMenuSelectorProps = {
    activeMenuId?: string | null
    setActiveMenuId: (activeMenuId: string) => void
    menus: Menu[]
    onCurrentMenuSelected: (menuId: string | undefined) => Promise<void>
}

// UI

export type UploadRestaurantImageButtonProps = {
    onUpload: () => Promise<void>
}

export type IconButtonProps = {
    Icon: typeof SvgIcon
    className?: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>
}

export type AddIconButtonProps = {
    className?: string
    onAdd?: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>
}

export type EditIconButtonProps = {
    className?: string
    onEdit?: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>
}

export type DeleteIconButtonProps = {
    className?: string
    onDelete?: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>
}

export type OpenEditingRestaurantInformationButtonProps = {
    onOpen?: () => Promise<void>
}

export type OpenAddingPromocodeButtonProps = {
    onOpen?: () => Promise<void>
}

export type OpenAddingMenuItemButtonProps = {
    onOpen?: () => Promise<void>
}

export type OpenAddingMenuButtonProps = {
    onOpen?: () => Promise<void>
}

export type OpenAddingMenuCategoryButtonProps = {
    onOpen?: () => Promise<void>
}

export type RemoveItemFromCategoryButtonProps = {
    onRemove: () => Promise<void>
}