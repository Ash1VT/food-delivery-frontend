import { useContext, useState } from 'react'
import { OrderCartItemProps } from '../order_cart.types'
import './order_cart_item.css'
import OrderItemCounter from '../order-item-counter/OrderItemCounter'
import { OrderCartTotalPriceContext } from '../contexts/OrderCartTotalPriceContext'

const OrderCartItem = ({id, imageUrl, categoryName, name, quantity, price} : OrderCartItemProps) => {
    const [quantityValue, setQuantityValue] = useState(quantity)
    const { setTotalPrice } = useContext(OrderCartTotalPriceContext)

    const onQuantityChange = (newQuantity: number) => {
        setQuantityValue((prevQuantity) => {
            setTotalPrice((prevTotalPrice) => prevTotalPrice + (newQuantity - prevQuantity) * price);
            return newQuantity;
        })
    }

    return (
        <div className="order__cart__item__container">
            <div className="order__cart__item__image__wrapper">
                <img src={imageUrl} alt="image" width={150} height={150}/>
            </div>
            <div className="order__cart__item__details"> 
                <div className="order__cart__item__name__wrapper">
                    <div className="order__cart__item__category__name">{categoryName}</div>
                    <div className="order__cart__item__name">{name}</div>
                </div>
                <OrderItemCounter quantity={quantityValue} setQuantity={setQuantityValue} onQuantityChanged={onQuantityChange}/>
                <div className="order__cart__item__price">{price}$</div>
            </div>
        </div>
    )
}

export default OrderCartItem