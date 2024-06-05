import { Rating, Star } from '@smastrom/react-rating'
import { MenuItemProps } from '../menu_page.types'
import AddToCartButton from '../ui/buttons/add-to-cart-button/AddToCartButton'
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch'
import { useSelector } from 'react-redux'
import RemoveFromCartButton from '../ui/buttons/remove-from-cart-button/RemoveFromCartButton'
import CustomRating from 'src/components/custom-rating/CustomRating'
import { addOrderCartItem, removeOrderCartItem } from 'src/redux/reducers/orderCartReducer'
import { getIfOrderItemInCart } from 'src/redux/selectors/orderCartSelectors'
import './menu_item.css'
import { useState } from 'react'

const MenuItem = ({menuItem, onMenuItemClick}: MenuItemProps) => {
    const dispatch = useAppDispatch()
    const inCart = useSelector(state => getIfOrderItemInCart(state, menuItem.id))
    const [isMenuItemHovered, setIsMenuItemHovered] = useState(false)

    const handleMenuItemClick = () => {
        onMenuItemClick(menuItem.id)
    }

    const handleAddToCart = () => {
        dispatch(addOrderCartItem(
            {
                id: menuItem.id, 
                menuItemName: menuItem.name, 
                menuItemImageUrl: menuItem.imageUrl, 
                menuItemPrice: menuItem.price, 
                menuItemCategoryName: menuItem.categoryName, 
                quantity: 1
            }
        ))
    }

    const handleRemoveFromCart = () => {
        dispatch(removeOrderCartItem(menuItem.id))
    }


    return (
        <div className="menu__category__item__container">
            <div className={`menu__category__item__image__wrapper ${isMenuItemHovered ? 'menu__category__item__image__hovered' : ''}`}
                 onMouseOver={() => setIsMenuItemHovered(true)} 
                 onMouseOut={() => setIsMenuItemHovered(false)} 
                 onClick={handleMenuItemClick}>
                <img src={menuItem.imageUrl} alt="image" width={150} height={150}/>
            </div>
            <div className="menu__category__item__wrapper"
                 onMouseOver={() => setIsMenuItemHovered(true)} 
                 onMouseOut={() => setIsMenuItemHovered(false)} 
                 onClick={handleMenuItemClick}>
                <div className="menu__category__item__name">{menuItem.name}</div>

                <div className="menu__category__item__rating__reviews__wrapper">

                    <div className="menu__category__item__rating__wrapper">
                        <div className="menu__category__item__rating__value">{menuItem.ratingValue}</div>
                        <CustomRating className="menu__category__item__rating__stars" style={{ maxWidth: 80 }} readOnly={true} value={menuItem.ratingValue}/>
                    </div>
                    <div className="menu__category__item__reviews__wrapper">
                        <div className="menu__category__item__reviews__text">({menuItem.reviewsCount} reviews)</div>
                    </div>
                </div>
                <div className="menu__category__item__price">{menuItem.price}$</div>
            </div>
            {inCart ? 
                <RemoveFromCartButton onRemovedFromCart={handleRemoveFromCart}/> 
                : 
                <AddToCartButton onAddedToCart={handleAddToCart}/>
            }
        </div>
    )
}

export default MenuItem