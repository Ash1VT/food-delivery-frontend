import { Rating, Star } from '@smastrom/react-rating'
import { MenuItemProps } from '../menu_page.types'
import AddToCartButton from '../ui/buttons/add-to-cart-button/AddToCartButton'
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch'
import { useSelector } from 'react-redux'
import RemoveFromCartButton from '../ui/buttons/remove-from-cart-button/RemoveFromCartButton'
import CustomRating from 'src/components/custom-rating/CustomRating'
import { addOrderCartItem, removeOrderCartItem } from 'src/redux/reducers/orderCartReducer'
import { getIfOrderItemInCart } from 'src/redux/selectors/orderCartSelectors'
import { useCallback, useState } from 'react'
import { User } from 'src/models/user.interfaces'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import './menu_item.css'

const MenuItem = ({currentUser, menuItem, categoryName, onMenuItemClick}: MenuItemProps) => {
    const dispatch = useAppDispatch()
    const { restaurantId } = useAppSelector((state) => state.orderCartReducer)
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
                menuItemId: menuItem.id,
                restaurantId: menuItem.restaurantId,
                quantity: 1
            }
        ))
    }

    const handleRemoveFromCart = () => {
        dispatch(removeOrderCartItem(menuItem.id))
    }

    const renderCartButton = useCallback((inCart: boolean, currentUser?: User | undefined | null) => {
        if (!currentUser || currentUser.role === 'customer') {
            if (!restaurantId || menuItem.restaurantId === restaurantId) {
                if (inCart) {
                    return <RemoveFromCartButton onRemovedFromCart={handleRemoveFromCart}/> 
                }
                return <AddToCartButton onAddedToCart={handleAddToCart}/>
            }
        }
        return null
    }, [currentUser, inCart])

    const ratingValue = menuItem.ratingValue ? menuItem.ratingValue : 0
    const noButtonClassName = (currentUser && currentUser.role !== 'customer') || (restaurantId && menuItem.restaurantId !== restaurantId) ? 'menu__category__item__no__button' : ''

    return (
        <div className={`menu__category__item__container ${noButtonClassName}`}>
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
                        <div className="menu__category__item__rating__value">{ratingValue}</div>
                        <CustomRating className="menu__category__item__rating__stars" style={{ maxWidth: 80 }} readOnly={true} value={ratingValue}/>
                    </div>
                    <div className="menu__category__item__reviews__wrapper">
                        <div className="menu__category__item__reviews__text">({menuItem.reviewsCount} reviews)</div>
                    </div>
                </div>
                <div className="menu__category__item__price">{menuItem.price}$</div>
            </div>
            {renderCartButton(inCart, currentUser)}
        </div>
    )
}

export default MenuItem