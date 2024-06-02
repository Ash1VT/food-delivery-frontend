import React from 'react'
import Navbar from 'src/components/navbar'
import Footer from 'src/components/footer'
import OrderItemsList from './order-items-list/OrderItemsList'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import AddressSelector from './address-selector/AddressSelector'
import { getCurrentCustomerApprovedAddresses, getCurrentCustomerOrder } from 'src/redux/selectors/currentCustomerSelectors'
import PromocodeInput from './promocode-input/PromocodeInput'
import OrderPrice from './order-price/OrderPrice'
import { getCurrentUser } from 'src/redux/selectors/currentUserSelectors'
import './order_placing_page.css'

const OrderPlacingPage = () => {
    const orderId = '1'
    const currentUser = useAppSelector(getCurrentUser)

    const order = useAppSelector((state) => getCurrentCustomerOrder(state, orderId));
    const customerAddresses = useAppSelector(getCurrentCustomerApprovedAddresses);

    if (!order) {
        return null
    }

    const handleAddressSelected = async (addressId: string) => {
        alert(`Selected address: ${addressId}`)
    }

    const handlePromocodeApplied = async (promocode: string) => {
        alert(`Applied promocode: ${promocode}`)
        return true
    }

    const handleOrderPlaced = async (orderId: string) => {
        alert(`Order placed: ${orderId}`)
    }

    const handleOrderItemQuantityChanged = async (itemId: string, newQuantity: number) => {
        alert(`Order item quantity changed: ${itemId} to ${newQuantity}`)
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