import React from 'react'
import { OrderPriceProps } from '../order_placing_page.types'
import Divider from 'src/components/ui/divider/Divider'
import PlaceOrderButton from '../ui/buttons/place-order-button/PlaceOrderButton'
import './order_price.css'

const OrderPrice = ({order} : OrderPriceProps) => {
    const priceInformation = order.priceInformation

    return (
        <div className="order__price__container">
            <table>
                <tr>
                    <th>
                        <div className="order__price__label">
                            Order Items Price
                        </div>
                    </th>
                    <th>
                        <div className="order__price__text">
                            {priceInformation.orderItemsPrice}$
                        </div>
                    </th>
                </tr>
                <tr className="order__price__divider"/>
                <tr>
                    <th>
                        <div className="order__price__label">
                            Order Items Price with Promocode
                        </div>
                    </th>
                    <th>
                        <div className="order__price__text">
                            {priceInformation.decountedItemsPrice}$
                        </div>
                    </th>
                </tr>
                <tr className="order__price__divider"/>
                <tr>
                    <th>
                        <div className="order__price__label">
                            Delivery Price
                        </div>
                    </th>
                    <th>
                        <div className="order__price__text">
                            {priceInformation.deliveryPrice !== undefined ? `${priceInformation.deliveryPrice}$` : 'N/A'}
                        </div>
                    </th>
                </tr>
                <tr className="order__price__divider"/>
                <tr>
                    <th colSpan={2}>
                        <Divider width='100%' height='3px' color='#CFCFCF'/>
                    </th>
                </tr>
                <tr className="order__price__divider"/>
                <tr>
                    <th>
                        <div className="order__price__label">
                            Total Price
                        </div>
                    </th>
                    <th>
                        <div className="order__price__text order__total__price">
                            {priceInformation.totalPrice}$
                        </div>
                    </th>
                </tr>
            </table>
        </div>
    )
}

export default OrderPrice