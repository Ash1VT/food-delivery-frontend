import { OrderCartItemProps } from '../order_cart.types'
import OrderItemCounter from '../order-item-counter/OrderItemCounter'
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch'
import { removeOrderCartItem, setOrderCartItemQuantity } from '../redux/reducers/orderCartReducer'
import { getOrderCartItemPrice } from '../redux/selectors'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import RemoveItemButton from '../ui/buttons/remove-item-button/RemoveItemButton'
import './order_cart_item.css'
import { useCallback, useEffect } from 'react'
import React from 'react'

const OrderCartItem = ({id, quantity} : OrderCartItemProps) => {
    // const orderCartItemPrice = useAppSelector(state => getOrderCartItemPrice(state, id))
    
    const dispatch = useAppDispatch()

    const handleQuantityChange = useCallback((newQuantity: number) => {
        dispatch(setOrderCartItemQuantity({id, quantity: newQuantity}))        
    }, [quantity])

    const handleRemove = useCallback(() => {
        dispatch(removeOrderCartItem(id))
    }, [])

    // useEffect(() => {
    //     console.log(id, imageUrl, categoryName, name, quantity)
    // }, [])

    return (
        <div className="order__cart__item__container">
            <div className="order__cart__item__content">
                <div className="order__cart_S_item__image__wrapper">
                    {/* <img src={imageUrl} alt="image" width={150} height={150}/> */}
                </div>
                <div className="order__cart__item__details"> 
                    <div className="order__cart__item__name__wrapper">
                        {/* <div className="order__cart__item__category__name">{categoryName}</div> */}
                        {/* <div className="order__cart__item__name">{name}</div> */}
                    </div>
                    <OrderItemCounter quantity={quantity} onQuantityChanged={handleQuantityChange}/>
                    {/* <div className="order__cart__item__price">{orderCartItemPrice}$</div> */}
                </div>
            </div>
            {/* <RemoveItemButton onItemRemoved={handleRemove}/> */}
        </div>
    )
}

export default React.memo(OrderCartItem, (prev, cur) => {
    console.log('not working')
    return prev.id === cur.id &&
        // prev.imageUrl === next.imageUrl &&
        // prev.categoryName === next.categoryName &&
        // prev.name === next.name &&
        prev.quantity === cur.quantity
})