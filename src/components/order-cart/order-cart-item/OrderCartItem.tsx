import { OrderCartItemProps } from '../order_cart.types'
import OrderItemCounter from '../order-item-counter/OrderItemCounter'
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch'
import { removeOrderCartItem, setOrderCartItemQuantity } from '../redux/reducers/orderCartReducer'
import RemoveItemButton from '../ui/buttons/remove-item-button/RemoveItemButton'
import React from 'react'
import { calculateOrderCartItemPrice } from '../utils/price'
import './order_cart_item.css'


const OrderCartItem = ({item} : OrderCartItemProps) => {
    const {
        id,
        imageUrl,
        categoryName,
        name,
        quantity
    } = item

    const orderCartItemPrice = calculateOrderCartItemPrice(item)

    const dispatch = useAppDispatch()

    const handleQuantityChange = (newQuantity: number) => {
        dispatch(setOrderCartItemQuantity({id, quantity: newQuantity}))        
    }

    const handleRemove = () => {
        dispatch(removeOrderCartItem(id))
    }

    return (
        <div className="order__cart__item__container">
            <div className="order__cart__item__content">
                <div className="order__cart__item__image__wrapper">
                    <img src={imageUrl} alt="image" width={150} height={150}/>
                </div>
                <div className="order__cart__item__details"> 
                    <div className="order__cart__item__name__wrapper">
                        <div className="order__cart__item__category__name">{categoryName}</div>
                        <div className="order__cart__item__name">{name}</div>
                    </div>
                    <OrderItemCounter quantity={quantity} onQuantityChanged={handleQuantityChange}/>
                    <div className="order__cart__item__price">{orderCartItemPrice}$</div>
                </div>
            </div>
            <RemoveItemButton onItemRemoved={handleRemove}/>
        </div>
    )
}

export default React.memo(OrderCartItem, (prevProps, nextProps) => prevProps.item.quantity === nextProps.item.quantity)