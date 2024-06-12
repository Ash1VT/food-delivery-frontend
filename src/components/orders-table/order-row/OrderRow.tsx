import React from 'react'
import { OrderRowProps } from '../orders_table.types'
import moment from 'moment'
import OrderActionButton from '../ui/buttons/order-action-button/OrderActionButton'
import OpenDetailedInformationButton from '../ui/buttons/open-detailed-information-button/OpenDetailedInformationButton'
import './order_row.css'
import ModalWindow from 'src/components/modal-window/ModalWindow'
import OrderDetailedInformationModal from '../ui/modals/order-detailed-information-modal/OrderDetailedInformationModal'

const OrderRow = ({order, currentUser, buttonLabel, onOrderButtonClick} : OrderRowProps) => {

    const handleOrderButtonClick = async () => {
        if (!onOrderButtonClick) return

        await onOrderButtonClick(order)
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
                    {order.customer?.fullName}
                </div>
            </td>
            <td>
                <div className="order__text order__margin__left">
                    {moment(order.createdAt).format('HH:mm DD.MM.YYYY')}
                </div>
            </td>
            <td>
                <div className='order__buttons__wrapper'>
                    <ModalWindow button={OpenDetailedInformationButton({})}>
                        <OrderDetailedInformationModal currentUser={currentUser} order={order}/>
                    </ModalWindow>
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