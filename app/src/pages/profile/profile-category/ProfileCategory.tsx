import { ProfileCategoryProps } from '../profile.types'
import './profile_category.css'
import useProfileCategoryClick from '../hooks/useProfileCategoryClick'

const ProfileCategory = ({id, name} : ProfileCategoryProps) => {
    const { isClicked, onClick } = useProfileCategoryClick(id)
    const activeClass = isClicked ? 'profile__category__active' : ''

    return (
        <div className={`profile__category ${activeClass}`} onClick={onClick}>
            <div className="profile__category__name">
                {name}
            </div>
        </div>
    )
}

export default ProfileCategory