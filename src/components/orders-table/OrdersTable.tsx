import React from 'react'
import { OrdersTableProps } from './orders_table.types'
import OrderRow from './order-row/OrderRow'
import './orders_table.css'

const OrdersTable = ({orders, currentUser, buttonLabel, onOrderButtonClick} : OrdersTableProps) => {

    if (orders.length === 0) {
        return (
            <div className='orders__table__container'>
                <table className='orders__table'>
                    <tr>
                        <th>
                            <div className="order__label">
                                No Orders
                            </div>
                        </th>
                    </tr>
                </table>
            </div>
        )
    }


    return (
        <div className='orders__table__container'>
            <table className='orders__table'>
                <tr>
                    <th>
                        <div className="order__label order__margin__left">
                            ID
                        </div>
                    </th>
                    <th>
                        <div className="order__label order__margin__left">
                            Customer
                        </div>
                    </th>
                    <th>                    
                        <div className="order__label order__margin__left">
                            Created At
                        </div>
                    </th>
                    <th>
                        <div className="order__label order__margin__left">
                            Detailed Information
                        </div>
                    </th>
                    {onOrderButtonClick && <th></th>}
                </tr>
                <tr style={{height: '20px'}}/>
                {orders.map((order) => (
                    <React.Fragment key={order.id}>
                        <OrderRow
                            order={order}
                            currentUser={currentUser}
                            buttonLabel={buttonLabel}
                            onOrderButtonClick={onOrderButtonClick}/>
                        <tr style={{height: '10px'}}/>
                    </React.Fragment>
                ))}
            </table>
        </div>
    )
}

export default OrdersTable