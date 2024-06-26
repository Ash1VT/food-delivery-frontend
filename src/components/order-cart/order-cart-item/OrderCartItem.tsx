import { OrderCartItemProps } from '../order_cart.types'
import OrderItemCounter from '../order-item-counter/OrderItemCounter'
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch'
import RemoveItemButton from '../ui/buttons/remove-item-button/RemoveItemButton'
import React from 'react'
import { calculateOrderCartItemPrice } from '../utils/price'
import { removeOrderCartItem, setOrderCartItemQuantity } from 'src/redux/reducers/orderCartReducer'
import './order_cart_item.css'


const OrderCartItem = ({item} : OrderCartItemProps) => {
    const orderCartItemPrice = calculateOrderCartItemPrice(item)

    const dispatch = useAppDispatch()

    const handleQuantityChange = (newQuantity: number) => {
        dispatch(setOrderCartItemQuantity({id: item.id, quantity: newQuantity}))        
    }

    const handleRemove = () => {
        dispatch(removeOrderCartItem(item.id))
    }

    return (
        <div className="order__cart__item__container">
            <div className="order__cart__item__content">
                <div className="order__cart__item__image__wrapper">
                    <img src={item.menuItemImageUrl} alt="image" width={150} height={150}/>
                </div>
                <div className="order__cart__item__details"> 
                    <div className="order__cart__item__name__wrapper">
                        {/* <div className="order__cart__item__category__name">{categoryName}</div> */}
                        <div className="order__cart__item__name">{item.menuItemName}</div>
                    </div>
                    <OrderItemCounter quantity={item.quantity} onQuantityChanged={handleQuantityChange}/>
                    <div className="order__cart__item__price">{orderCartItemPrice}$</div>
                </div>
            </div>
            <RemoveItemButton onItemRemoved={handleRemove}/>
        </div>
    )
}

export default React.memo(OrderCartItem, (prevProps, nextProps) => prevProps.item.quantity === nextProps.item.quantity)