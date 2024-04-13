import { Rating, Star } from '@smastrom/react-rating'
import { MenuItemProps } from '../menu_page.types'
import AddToCartButton from '../ui/buttons/add-to-cart-button/AddToCartButton'
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch'
import { addOrderCartItem, removeOrderCartItem } from 'src/components/order-cart/redux/reducers/orderCartReducer'
import { useSelector } from 'react-redux'
import { getIfOrderItemInCart } from 'src/components/order-cart/redux/selectors'
import RemoveFromCartButton from '../ui/buttons/remove-from-cart-button/RemoveFromCartButton'
import './menu_item.css'

const ratingStyles = {
    itemShapes: Star,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#f0e385'
}

const MenuItem = ({id, imageUrl, name, ratingValue, reviewsCount, price}: MenuItemProps) => {
    const dispatch = useAppDispatch()
    const inCart = useSelector(state => getIfOrderItemInCart(state, id))

    const handleAddToCart = () => {
        dispatch(addOrderCartItem({id, quantity: 1}))
    }

    const handleRemoveFromCart = () => {
        dispatch(removeOrderCartItem(id))
    }


    const Button = () => {
        return (
            inCart ? 
                <RemoveFromCartButton onRemovedFromCart={handleRemoveFromCart}/> 
                : 
                <AddToCartButton onAddedToCart={handleAddToCart}/>
        )
    }

    return (
        <div className="menu__category__item__container">
            <div className="menu__category__item__image__wrapper">
                <img src={imageUrl} alt="image" width={150} height={150}/>
            </div>
            <div className="menu__category__item__wrapper">
                <div className="menu__category__item__name">{name}</div>

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
            <Button/>
        </div>
    )
}

export default MenuItem