import { useState } from "react"
import Navbar from "src/components/navbar"
import ProfileCategory from "./profile-category/ProfileCategory"
import ProfileCategoryClicksContext from "./contexts/ProfileCategoryClicksContext"
import { ProfileCategoryClicksContextProps, ProfileCategoryProps } from "./profile.types"
import Footer from "src/components/footer"
import { FooterMenuColumnProps } from "src/components/footer/footer.types"
import PersonalInformation from "./personal-information/PersonalInformation"
import DeliveryAddresses from "./delivery-addresses/DeliveryAddresses"
import PaymentInformation from "./payment-information/PaymentInformation"
import Orders from "./orders/Orders"
import './profile_page.css'


const ProfilePage = () => {
    const [activeCategoryId, setActiveCategoryId] = useState<number>(0)

    const profileCategoryClicksContext: ProfileCategoryClicksContextProps = {
        profileCategoryClicks: [],
        activeCategoryId,
        setActiveCategoryId
    }

    const profileCategories = [
        {
            id: 0,
            name: "Personal Information",
            component: PersonalInformation
        },
        {
            id: 1,
            name: "Delivery Addresses",
            component: DeliveryAddresses
        },
        {
            id: 2,
            name: "Payment Information",
            component: PaymentInformation
        },
        {
            id: 3,
            name: "My Orders",
            component: Orders
        }
    ]
    
    const cities: string[] = [
        'San Francisco',
        'Miami',
        'San Diego',
        'East Bay',
        'Long Beach',
        'Los Angeles',
        'San Francisco',
        'Miami',
        'San Diego',
        'East Bay',
        'Long Beach',
        'Los Angeles',
        'San Francisco',
        'Miami',
        'San Diego',
        'East Bay',
        'Long Beach',
        'Los Angeles',
        'San Francisco',
        'Miami',
    ]

    const menu_columns: FooterMenuColumnProps[] = [
        {
          title: 'Company',
          items: ['About us', 'Team', 'Careers', 'Blog']
        },
        {
          title: 'Contact',
          items: ['Help & Support', 'Partner with us', 'Ride with us']
        },
    ]
    
    const activeCategory = profileCategories.find(category => category.id === activeCategoryId);

    return (
        <div className="container profile__container">
            <Navbar/>
            <div className="profile__wrapper" style={{backgroundImage: `url(images/background.png)`}}>
                <div className="profile__card">
                    <div className="profile__category__list">
                        <ProfileCategoryClicksContext.Provider value={profileCategoryClicksContext}>
                            {profileCategories.map((category) => (
                                <ProfileCategory key={category.id} id={category.id} name={category.name}/>
                            ))}
                        </ProfileCategoryClicksContext.Provider>
                    </div>
                    <div className="profile__category__content">
                        {activeCategory?.component && <activeCategory.component/>}
                    </div>
                </div>
            </div>
            <Footer cities={cities} cities_per_column={5} menu_columns={menu_columns}/>
        </div>
    )
}

export default ProfilePage