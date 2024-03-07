import Navbar from "src/components/navbar"
import ProfileCategory from "./profile-category/ProfileCategory"
import ProfileCategoryClicksContext from "./contexts/ProfileCategoryClicksContext"
import { ProfileCategoryClicksContextProps, ProfileCategoryProps } from "./profile.types"
import ControlledTextInput from "src/components/ui/controlled-text-input/ControlledTextInput"
import ControlledDateInput from "src/components/ui/controlled-date-input/ControlledDateInput"
import Footer from "src/components/footer"
import { FooterMenuColumnProps } from "src/components/footer/footer.types"
import './profile_page.css'
import PersonalInformation from "./personal-information/PersonalInformation"


const ProfilePage = () => {

    const profileCategoryClicksContext: ProfileCategoryClicksContextProps = {
        profileCategoryClicks: [],
        activeCategoryId: 0
    }

    const profileCategories: ProfileCategoryProps[] = [
        {
            id: 0,
            name: "Personal Information"
        },
        {
            id: 1,
            name: "Delivery Addresses"
        },
        {
            id: 2,
            name: "Payment Information"
        },
        {
            id: 3,
            name: "My Orders"
        }
    ]
    
    const test = () => {
        console.log(profileCategoryClicksContext)
    }

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
        // {
          // title: 'Legal'
        // }
    ]

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
                    <div className="profile__category__content" onClick={test}>
                         <PersonalInformation/>
                    </div>
                </div>
            </div>
            <Footer cities={cities} cities_per_column={5} menu_columns={menu_columns}/>
        </div>
    )
}

export default ProfilePage