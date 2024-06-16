import React, { useEffect } from 'react'
import Navbar from 'src/components/navbar'
import Footer from 'src/components/footer'
import OrderItemsList from './order-items-list/OrderItemsList'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import AddressSelector from './address-selector/AddressSelector'
import { getCurrentCustomerApprovedAddresses, getCurrentCustomerOrder } from 'src/redux/selectors/currentCustomerSelectors'
import PromocodeInput from './promocode-input/PromocodeInput'
import OrderPrice from './order-price/OrderPrice'
import { useNavigate, useParams } from 'react-router-dom'
import NotFoundPage from '../not-found-page/NotFoundPage'
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch'
import { fetchOrder, placeOrder, updateOrder, updateOrderItem } from 'src/redux/actions/orderPlacing.actions'
import { addErrorNotification, addSuccessNotification } from 'src/utils/notifications'
import { fetchCurrentCustomerAddresses } from 'src/redux/actions/currentCustomerAddresses.actions'
import './order_placing_page.css'

const OrderPlacingPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {orderId} = useParams()

    const { isLoading: isCurrentUserLoading, currentUser, error: currentUserError } = useAppSelector((state) => state.currentUserReducer)
    const { isLoading: isOrderLoading, order, error: orderError } = useAppSelector((state) => state.orderPlacingReducer)
    const { isLoading: isCurrentCustomerAddressesLoading, error: currentCustomerAddressesError } = useAppSelector((state) => state.currentCustomerAddressesReducer)

    const customerAddresses = useAppSelector(getCurrentCustomerApprovedAddresses);

    useEffect(() => {
        if (orderId) {
            dispatch(fetchOrder(orderId)).then((response) => {
                if (response.type === 'orderPlacing/fetchOrder/rejected') {
                    if (response.payload) {
                        addErrorNotification(response.payload as string)
                    }
                }

            })

            dispatch(fetchCurrentCustomerAddresses()).then((response) => {
                if (response.type === 'currentCustomerAddresses/fetchCurrentCustomerAddresses/rejected') {
                    if (response.payload) {
                        addErrorNotification(response.payload as string)
                    }
                }
            })
        }
    }, [dispatch])

    if (!order) {
        return <NotFoundPage/>
    }

    const handleAddressSelected = async (addressId: string) => {
        dispatch(updateOrder({id: order.id, customerAddressId: addressId})).then((response) => {
            if (response.type === 'orderPlacing/updateOrder/fulfilled') {
                addSuccessNotification('Order address successfully updated')
            }

            if (response.type === 'orderPlacing/updateOrder/rejected') {
                if (response.payload) {
                    addErrorNotification(response.payload as string)
                }
            }
        })
    }

    const handlePromocodeApplied = async (promocode: string) => {
        dispatch(updateOrder({id: order.id, promocodeName: promocode})).then((response) => {
            if (response.type === 'orderPlacing/updateOrder/fulfilled') {
                addSuccessNotification('Order promocode successfully updated')
            }

            if (response.type === 'orderPlacing/updateOrder/rejected') {
                if (response.payload) {
                    addErrorNotification(response.payload as string)
                }
            }
        })
    }

    const handleOrderPlaced = async (orderId: string) => {
        dispatch(placeOrder(orderId)).then((response) => {
            if (response.type === 'orderPlacing/placeOrder/fulfilled') {
                addSuccessNotification('Order successfully placed')
                navigate('/profile')
            }

            if (response.type === 'orderPlacing/placeOrder/rejected') {
                if (response.payload) {
                    addErrorNotification(response.payload as string)
                }
            }
        })
    }

    const handleOrderItemQuantityChanged = async (itemId: string, newQuantity: number) => {
        dispatch(updateOrderItem({
            itemId: itemId,
            orderId: order.id,
            quantity: newQuantity
        })).then((response) => {
            if (response.type === 'orderPlacing/updateOrderItem/fulfilled') {
                addSuccessNotification('Order item quantity successfully updated')
            }

            if (response.type === 'orderPlacing/updateOrderItem/rejected') {
                if (response.payload) {
                    addErrorNotification(response.payload as string)
                }
            }
        })
    }

    const orderItems = order.items

    return (
        <div className="container order__placing__container">
            <Navbar currentUser={currentUser}/>
            <div className="order__placing__wrapper">
                <div className="order__placing__details">
                    <div className="order__placing__title">Order Placing</div>

                    <div className="order__placing__items__wrapper">
                        <div className="order__placing__section__title">Your Order</div>
                        <OrderItemsList items={orderItems} onQuantityChanged={handleOrderItemQuantityChanged}/>
                    </div>
                    <div className="order__placing__address__wrapper">
                        <div className="order__placing__section__title">Select Address</div>
                        <AddressSelector order={order} addresses={customerAddresses} onAddressSelected={handleAddressSelected}/>
                    </div>
                    <div className="order__placing__promocode__wrapper">
                        <div className="order__placing__section__title">Apply Promocode</div>
                        <PromocodeInput order={order} onPromocodeApplied={handlePromocodeApplied}/>
                    </div>
                    <div className="order__placing__price__wrapper">
                        <div className="order__placing__section__title">Order Price</div>
                        <OrderPrice order={order} onOrderPlaced={handleOrderPlaced}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default OrderPlacingPage