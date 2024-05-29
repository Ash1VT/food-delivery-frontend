import React from 'react'
import Navbar from 'src/components/navbar'
import Footer from 'src/components/footer'
import OrderItemsList from './order-items-list/OrderItemsList'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import { getOrder, getOrderItems } from 'src/redux/selectors/orderSelectors'
import AddressSelector from './address-selector/AddressSelector'
import { getCurrentCustomerApprovedAddresses } from 'src/redux/selectors/currentCustomerSelectors'
import PromocodeInput from './promocode-input/PromocodeInput'
import OrderPrice from './order-price/OrderPrice'
import './order_placing_page.css'

const OrderPlacingPage = () => {
    const items = useAppSelector((state) => getOrderItems(state, '1'));
    const customerAddresses = useAppSelector(getCurrentCustomerApprovedAddresses);
    const order = useAppSelector((state) => getOrder(state, '1'));

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

    return (
        <div className="container order__placing__container">
            <Navbar/>
            <div className="order__placing__wrapper">
                <div className="order__placing__details">
                    <div className="order__placing__title">Order Placing</div>

                    <div className="order__placing__items__wrapper">
                        <div className="order__placing__section__title">Your Order</div>
                        <OrderItemsList items={items.map((item) => {
                            return {
                                id: item.id,
                                name: item.menuItemName,
                                imageUrl: item.menuItemImageUrl,
                                quantity: item.quantity,
                                price: item.menuItemPrice
                            }
                        })}/>
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