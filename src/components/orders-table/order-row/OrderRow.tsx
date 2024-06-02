import React from 'react'
import { OrderRowProps } from '../orders_table.types'
import moment from 'moment'
import OrderActionButton from '../ui/buttons/order-action-button/OrderActionButton'
import OpenDetailedInformationButton from '../ui/buttons/open-detailed-information-button/OpenDetailedInformationButton'
import './order_row.css'

const OrderRow = ({order, buttonLabel, onOpenDetailedInformation, onOrderButtonClick} : OrderRowProps) => {

    const handleOrderButtonClick = async () => {
        if (!onOrderButtonClick) return

        await onOrderButtonClick(order)
    }

    const handleOpenDetailedInformation = async () => {
        await onOpenDetailedInformation(order)
    }

    return (
        <tr>
            <td>
                <div className="order__text order__margin__left">
                    {order.id}
                </div>
            </td>
            <td>
                <div className="order__text order__margin__left">
                    {order.customer.fullName}
                </div>
            </td>
            <td>
                <div className="order__text order__margin__left">
                    {moment(order.createdAt).format('HH:mm DD.MM.YYYY')}
                </div>
            </td>
            <td>
                <div className='order__buttons__wrapper'>
                    <OpenDetailedInformationButton onClick={handleOpenDetailedInformation}/>
                </div>
            </td>
            {buttonLabel && onOrderButtonClick && (
                <td>
                    <div className='order__margin__left'>
                        <OrderActionButton buttonLabel={buttonLabel} onClick={handleOrderButtonClick}/>
                    </div>
                </td>
            )}
        </tr>
    )
}

export default OrderRow