import { User } from "src/models/user.interfaces"

export type NavbarProps = {
    currentUser?: User | undefined | null
}

export type NavbarRightComponentProps = {
    currentUser?: User | undefined | null
}

export type AnonymousNavbarProps = {
    onLoginButtonClick: () => void
}

export type CustomerNavbarButtonsProps = {
    currentUser: User
    onProfileButtonClick: () => void
    onLogout: () => Promise<void>
}

export type CourierNavbarButtonsProps = {
    currentUser: User
    onProfileButtonClick: () => void
    onLogout: () => Promise<void>
    onAvailableOrdersButtonClick: () => void
}

export type RestaurantManagerNavbarButtonsProps = {
    currentUser: User
    onRestaurantPanelButtonClick: () => void
    onRestaurantOrdersButtonClick: () => void
    onProfileButtonClick: () => void
    onLogout: () => Promise<void>
}

export type ModeratorNavbarButtonsProps = {
    currentUser: User
    onModeratorPanelButtonClick: () => void
    onProfileButtonClick: () => void
    onLogout: () => Promise<void>
}

export type OpenOrderCartButtonProps = {
    onClick?: () => void
}

export type ProfileButtonProps = {
    imageUrl: string
    onClick?: () => void
}

export type LogoutButtonProps = {
    onClick?: () => Promise<void>
}

export type HomeButtonProps = {
    onClick?: () => void
}