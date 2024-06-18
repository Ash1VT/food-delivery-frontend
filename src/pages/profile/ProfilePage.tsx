import { useCallback } from "react"
import Navbar from "src/components/navbar"
import Footer from "src/components/footer"
import { useAppSelector } from "src/hooks/redux/useAppSelector"
import { addErrorNotification, addSuccessNotification } from "src/utils/notifications"
import CustomerProfile from "./customer/CustomerProfile"
import CourierProfile from "./courier/CourierProfile"
import ModeratorProfile from "./moderator/ModeratorProfile"
import RestaurantManagerProfile from "./restaurant-manager/RestaurantManagerProfile"
import { useAppDispatch } from "src/hooks/redux/useAppDispatch"
import { UserUpdate, UserUploadImage } from "src/models/user.interfaces"
import { updateCurrentUser, uploadCurrentUserImage, resendVerificationEmail } from "src/redux/actions/currentUser.actions"
import './profile_page.css'
import LoadingPage from "../loading-page/LoadingPage"


const ProfilePage = () => {
    const dispatch = useAppDispatch()
    const { isLoading: isCurrentUserLoading, currentUser, error: currentUserError } = useAppSelector((state) => state.currentUserReducer)

    const handlePersonalInformationUpdated = async (user: UserUpdate) => {
        dispatch(updateCurrentUser(user)).then((result) => {
            if (result.type === 'currentUser/updateCurrentUser/fulfilled') {
                addSuccessNotification('Personal information successfully updated')
                return
            }

            if (result.type === 'currentUser/updateCurrentUser/rejected') {
                addErrorNotification(result.payload as string)
                return
            }
        })
    }

    const handleUserImageUploaded = async (user: UserUploadImage) => {
        dispatch(uploadCurrentUserImage(user)).then((result) => {
            if (result.type === 'currentUser/uploadCurrentUserImage/fulfilled') {
                addSuccessNotification('User image successfully uploaded')
                return
            }
            if (result.type === 'currentUser/uploadCurrentUserImage/rejected') {
                addErrorNotification(result.payload as string)
                return
            }
        })
    }

    const handleVerificationEmailSent = async () => {
        dispatch(resendVerificationEmail()).then((result) => {
            if (result.type === 'currentUser/resendVerificationEmail/fulfilled') {
                addSuccessNotification('Verification email successfully sent')
                return
            }
            if (result.type === 'currentUser/resendVerificationEmail/rejected') {
                addErrorNotification(result.payload as string)
                return
            }
        })
    }

    const renderProfile = useCallback(() => {
        if (!currentUser) return null
        if (currentUser.role === 'customer') return <CustomerProfile currentUser={currentUser} onUserImageUploaded={handleUserImageUploaded} onVerificationEmailSent={handleVerificationEmailSent} onPersonalInformationUpdated={handlePersonalInformationUpdated}/>
        if (currentUser.role === 'courier') return <CourierProfile currentUser={currentUser} onUserImageUploaded={handleUserImageUploaded} onVerificationEmailSent={handleVerificationEmailSent} onPersonalInformationUpdated={handlePersonalInformationUpdated}/>
        if (currentUser.role === 'restaurant_manager') return <RestaurantManagerProfile currentUser={currentUser} onUserImageUploaded={handleUserImageUploaded} onVerificationEmailSent={handleVerificationEmailSent} onPersonalInformationUpdated={handlePersonalInformationUpdated}/>
        if (currentUser.role === 'moderator') return <ModeratorProfile currentUser={currentUser} onUserImageUploaded={handleUserImageUploaded} onVerificationEmailSent={handleVerificationEmailSent} onPersonalInformationUpdated={handlePersonalInformationUpdated}/>
    }, [currentUser])

    if (!currentUser) return null

    if (isCurrentUserLoading)
        return <LoadingPage/>

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