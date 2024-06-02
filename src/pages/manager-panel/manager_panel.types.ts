import SvgIcon from '@mui/material/SvgIcon';
import IMenu from 'src/redux/models/IMenu';
import IMenuCategory from 'src/redux/models/IMenuCategory';
import IMenuItem from 'src/redux/models/IMenuItem';
import IPromocode from "src/redux/models/IPromocode"
import IRestaurant from 'src/redux/models/IRestaurant';
import IWorkingHours from "src/redux/models/IWorkingHours"


// RESTAURANT INFORMATION

export type RestaurantInformationProps = {
    restaurant: IRestaurant
    onOpenEditingRestaurantInformation: (restaurant: IRestaurant) => Promise<void>
}

// RESTAURANT IMAGE

export type RestaurantImageProps = {
    restaurant: IRestaurant
    onRestaurantImageUploaded: (id: string, image: File) => Promise<void>
}

export type UploadRestaurantImageProps = {
    onRestaurantImageUploaded: (image: File) => Promise<void>
}

// RESTAURANT PROMOCODES

export type RestaurantPromocodeProps = {
    promocode: IPromocode
    onOpenEditingPromocode: (promocode: IPromocode) => Promise<void>
    onPromocodeActivityChanged: (id: string, isActive: boolean) => Promise<void>
}

export type RestaurantPromocodesProps = {
    promocodes: IPromocode[]
    onPromocodeActivityChanged: (id: string, isActive: boolean) => Promise<void>
    onOpenAddingPromocode: () => Promise<void>
    onOpenEditingPromocode: (promocode: IPromocode) => Promise<void>
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
    workingHours?: IWorkingHours
    onOpenEditingWorkingHours: (workingHours?: IWorkingHours) => Promise<void>
    onDeleteWorkingHours: (id: string) => Promise<void>
}


export type RestaurantWorkingHoursProps = {
    workingHours: IWorkingHours[]
    onOpenEditingWorkingHours: (workingHours?: IWorkingHours) => Promise<void>
    onDeleteWorkingHours: (id: string) => Promise<void>
}

// RESTAURANT MENU ITEMS

export type RestaurantMenuItemProps = {
    menuItem: IMenuItem
    onOpenEditingMenuItem: (menuItem: IMenuItem) => Promise<void>
    onDeleteMenuItem: (id: string) => Promise<void>
}

export type RestaurantMenuItemsProps = {
    menuItems: IMenuItem[]
    draggableMenuItemId: string | null
    onOpenAddingMenuItem: () => Promise<void>
    onOpenEditingMenuItem: (menuItem: IMenuItem) => Promise<void>
    onDeleteMenuItem: (id: string) => Promise<void>
}

export type DraggableMenuItemProps = {
    menuItem: IMenuItem
}

// RESTAURANT MENUS

export type RestaurantMenusProps = {
    menus: IMenu[]
    onRemoveMenuItem: (menuCategoryId: string, menuItemId: string) => Promise<void>
    onDeleteMenuCategory: (id: string) => Promise<void>
    onOpenAddingMenu: () => Promise<void>
    onOpenEditingMenuCategory: (menuCategory: IMenuCategory) => Promise<void>
    onOpenAddingMenuCategory: () => Promise<void>
}

export type RestaurantMenusNamesProps = {
    activeMenuId?: string | null
    setActiveMenuId: (activeMenuId: string) => void
    menusNames: {
        id: string
        name: string
    }[]
    onOpenAddingMenu: () => Promise<void>
}

export type RestaurantMenuProps = {
    menu: IMenu
    onRemoveMenuItem: (menuCategoryId: string, menuItemId: string) => Promise<void>
    onDeleteMenuCategory: (id: string) => Promise<void>
    onOpenEditingMenuCategory: (menuCategory: IMenuCategory) => Promise<void>
    onOpenAddingMenuCategory: () => Promise<void>
}

export type RestaurantMenuCategoryProps = {
    menuCategory: IMenuCategory
    onOpenEditingMenuCategory: (menuCategory: IMenuCategory) => Promise<void>
    onDeleteMenuCategory: (id: string) => Promise<void>
    onRemoveMenuItem: (menuCategoryId: string, menuItemId: string) => Promise<void>
}

export type RestaurantMenuCategoryItemProps = {
    menuItem: IMenuItem
    menuCategoryId: string
    onRemove: (menuCategoryId: string, menuItemId: string) => Promise<void>
}

export type DroppableMenuItemZoneProps = {
    menuCategory: IMenuCategory
}

// RESTAURANT CURRENT MENU SELECTOR

export type CurrentRestaurantMenuSelectorProps = {
    activeMenuId?: string | null
    setActiveMenuId: (activeMenuId: string) => void
    menus: IMenu[]
    onCurrentMenuSelected: (menuId: string | undefined) => Promise<void>
}

// UI
export type EditRestaurantInformationButtonProps = {
    onEdit: () => Promise<void>
}

export type UploadRestaurantImageButtonProps = {
    onUpload: () => Promise<void>
}

export type IconButtonProps = {
    Icon: typeof SvgIcon
    className?: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>
}

export type AddIconButtonProps = {
    className?: string
    onAdd: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>
}

export type EditIconButtonProps = {
    className?: string
    onEdit: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>
}

export type DeleteIconButtonProps = {
    className?: string
    onDelete: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>
}

export type OpenAddingPromocodeButtonProps = {
    onOpen: () => Promise<void>
}

export type OpenAddingMenuItemButtonProps = {
    onOpen: () => Promise<void>
}

export type OpenAddingMenuButtonProps = {
    onOpen: () => Promise<void>
}

export type OpenAddingMenuCategoryButtonProps = {
    onOpen: () => Promise<void>
}

export type RemoveItemFromCategoryButtonProps = {
    onRemove: () => Promise<void>
}