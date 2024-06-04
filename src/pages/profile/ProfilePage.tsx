import { useCallback } from "react"
import Navbar from "src/components/navbar"
import { UserUpdateProps } from "./profile.types"
import Footer from "src/components/footer"
import { getCurrentUser } from "src/redux/selectors/currentUserSelectors"
import { useAppSelector } from "src/hooks/redux/useAppSelector"
import { addSuccessNotification } from "src/utils/notifications"
import CustomerProfile from "./customer/CustomerProfile"
import CourierProfile from "./courier/CourierProfile"
import ModeratorProfile from "./moderator/ModeratorProfile"
import RestaurantManagerProfile from "./restaurant-manager/RestaurantManagerProfile"
import './profile_page.css'


const ProfilePage = () => {
    const currentUser = useAppSelector(getCurrentUser)

    const handlePersonalInformationUpdated = async (user: UserUpdateProps) => {
        alert(JSON.stringify(user))
        addSuccessNotification('Personal information successfully updated')
    }

    const renderProfile = useCallback(() => {
        if (!currentUser) return null
        if (currentUser.role === 'customer') return <CustomerProfile currentUser={currentUser} onPersonalInformationUpdated={handlePersonalInformationUpdated}/>
        if (currentUser.role === 'courier') return <CourierProfile currentUser={currentUser} onPersonalInformationUpdated={handlePersonalInformationUpdated}/>
        if (currentUser.role === 'restaurant_manager') return <RestaurantManagerProfile currentUser={currentUser} onPersonalInformationUpdated={handlePersonalInformationUpdated}/>
        if (currentUser.role === 'moderator') return <ModeratorProfile currentUser={currentUser} onPersonalInformationUpdated={handlePersonalInformationUpdated}/>
    }, [currentUser])

    if (!currentUser) return null

    return (
        <div className="container profile__container">
            <Navbar currentUser={currentUser}/>
            <div className="profile__wrapper" style={{backgroundImage: `url(images/background.png)`}}>
                {renderProfile()}
            </div>
            <Footer/>
        </div>
    )
}

export default ProfilePage