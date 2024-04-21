import CustomRating from '../custom-rating/CustomRating'
import './menu_item_reference.css'
import { MenuItemReferenceProps } from './menu_item_reference.types'

const MenuItemReference = ({menuItem} : MenuItemReferenceProps) => {

    const {
        name,
        description,
        imageUrl,
        ratingValue,
        reviewsCount,
        price
    } = menuItem

    return (
        <div className="menu__item__reference__container">
            <div className="menu__item__reference__wrapper">
                <div className="menu__item__reference__image__wrapper">
                    <img src={imageUrl} alt='image' width={550} height={550}/>
                </div>
                <div className="menu__item__reference__details">
                    <div className="menu__item__reference__name">{name}</div>
                    <div className="menu__item__reference__description">{description}</div>

                    <div className="menu__item__reference__rating__price__wrapper">
                        <div className="menu__item__reference__rating__reviews__wrapper">
                            <div className="menu__item__reference__rating__wrapper">
                                <div className="menu__item__reference__rating__value">{ratingValue}</div>
                                <CustomRating className="menu__item__reference__rating__stars" style={{ maxWidth: 150 }} readOnly={true} value={ratingValue}/>
                            </div>
                            <div className="menu__item__reference__reviews__wrapper">
                                <div className="menu__item__reference__reviews__text">({reviewsCount} reviews)</div>
                            </div>
                        </div>
                        <div className="menu__item__reference__price">{price}$</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuItemReference