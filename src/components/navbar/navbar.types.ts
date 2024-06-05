import IUser from "src/redux/models/IUser"

export type NavbarProps = {
    currentUser?: IUser | undefined | null
}

export type NavbarRightComponentProps = {
    currentUser?: IUser | undefined | null
}

export type AnonymousNavbarProps = {
    onOpenOrderCartButtonClick: () => void
    onLoginButtonClick: () => void
}

export type CustomerNavbarButtonsProps = {
    currentUser: IUser
    onOpenOrderCartButtonClick: () => void
    onProfileButtonClick: () => void
    onLogout: () => Promise<void>
}

export type CourierNavbarButtonsProps = {
    currentUser: IUser
    onProfileButtonClick: () => void
    onLogout: () => Promise<void>
    onAvailableOrdersButtonClick: () => void
}

export type RestaurantManagerNavbarButtonsProps = {
    currentUser: IUser
    onRestaurantPanelButtonClick: () => void
    onRestaurantOrdersButtonClick: () => void
    onProfileButtonClick: () => void
    onLogout: () => Promise<void>
}

export type ModeratorNavbarButtonsProps = {
    currentUser: IUser
    onModeratorPanelButtonClick: () => void
    onProfileButtonClick: () => void
    onLogout: () => Promise<void>
}

export type OpenOrderCartButtonProps = {
    onClick: () => void
}

export type ProfileButtonProps = {
    imageUrl: string
    onClick: () => void
}

export type InterfaceButtonProps = {
    label: string
    onClick: () => void
}

export type LogoutButtonProps = {
    onClick: () => Promise<void>
}