import { Rating, Star } from '@smastrom/react-rating'
import './menu_item.css'
import { MenuItemProps } from '../menu_page.types'

const ratingStyles = {
    itemShapes: Star,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#f0e385'
}

const MenuItem = ({imageUrl, name, description, ratingValue, reviewsCount, price}: MenuItemProps) => {
    return (
        <div className="menu__category__item__container">
            <div className="menu__category__item__image__wrapper">
                <img src={imageUrl} alt="image" width={150} height={150}/>
            </div>
            <div className="menu__category__item__wrapper">
                <div className="menu__category__item__name">{name}</div>
                <div className="menu__category__item__description">{description}</div>

                <div className="menu__category__item__rating__reviews__wrapper">

                    <div className="menu__category__item__rating__wrapper">
                        <div className="menu__category__item__rating__value">{ratingValue}</div>
                        <Rating className="menu__category__item__rating__stars" style={{ maxWidth: 80 }} itemStyles={ratingStyles} readOnly={true} value={ratingValue}/>
                    </div>
                    <div className="menu__category__item__reviews__wrapper">
                        <div className="menu__category__item__reviews__text">({reviewsCount} reviews)</div>
                    </div>
                </div>
                <div className="menu__category__item__price">{price}$</div>
            </div>         
        </div>
    )
}

export default MenuItem