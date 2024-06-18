import OrderCartItemsList from './order-cart-items-list/OrderCartItemsList';
import { useAppSelector } from 'src/hooks/redux/useAppSelector';
import OrderCartButton from './ui/buttons/order-cart-button/OrderCartButton';
import { useEffect } from 'react';
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch';
import { OrderCartProps, OrderCartWithItemsProps } from './order_cart.types';
import { calculateOrderCartTotalPrice } from './utils/price';
import { clearOrderCart, fetchOrderCartItemsFromLocalStorage } from 'src/redux/reducers/orderCartReducer';
import './order_cart.css'
import { createOrder } from 'src/redux/actions/currentCustomerOrders.actions';
import { addErrorNotification, addSuccessNotification } from 'src/utils/notifications';
import { useNavigate } from 'react-router-dom';


const OrderCartWithItems = ({items, onOrderCreated} : OrderCartWithItemsProps) => {
    const totalPrice = calculateOrderCartTotalPrice(items)

    return (
        <>
            <OrderCartItemsList items={items}/>
            <div className="order__cart__button">
                <OrderCartButton totalPrice={totalPrice} onOrdered={onOrderCreated}/>
            </div>
        </>
    )
}

const OrderCartEmpty = () => {
    return (
        <div className="order__cart__empty">
            Cart is empty
        </div>
    )
}


const OrderCart = ({currentUser} : OrderCartProps) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { orderCartItems, restaurantId } = useAppSelector(state => state.orderCartReducer)
    const itemsCount = orderCartItems.length

    const handleOrderCreated = async () => {
        if (!currentUser) {
            addErrorNotification('Please login to make orders')
        }

        if (!currentUser?.isEmailVerified) {
            addErrorNotification('Please verify your email to make orders')
            return
        }

        if (restaurantId)
            dispatch(createOrder({
                items: orderCartItems,
                restaurantId: restaurantId
            })).then((response) => {
                if (response.type === 'currentCustomerOrders/createOrder/fulfilled') {
                    dispatch(clearOrderCart())
                    addSuccessNotification('Order successfully created')
                    navigate('/profile')
                }
                if (response.type === 'currentCustomerOrders/createOrder/rejected') {
                    if (response.payload)
                        addErrorNotification(response.payload as string)
                }
            })
    }

    return (
        <div className="order__cart__container">
            <div className="order__cart__wrapper">
                <div className="order__cart__title">
                    Cart
                </div>
                <div className="order__cart__content">
                    {itemsCount ? 
                        <OrderCartWithItems items={orderCartItems} onOrderCreated={handleOrderCreated}/> 
                        : 
                        <OrderCartEmpty/>}
                </div>
            </div>
        </div>
    )
}

export default OrderCart;