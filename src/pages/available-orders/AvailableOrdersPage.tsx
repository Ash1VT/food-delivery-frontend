import React from 'react'
import './available_orders_page.css'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import Navbar from 'src/components/navbar'
import Footer from 'src/components/footer'
import OrdersTable from 'src/components/orders-table/OrdersTable'
import IOrder from 'src/redux/models/IOrder'
import { addSuccessNotification } from 'src/utils/notifications'
import { getAvailableOrders } from 'src/redux/selectors/currentCourierSelectors'
import { getCurrentUser } from 'src/redux/selectors/currentUserSelectors'

const AvailableOrdersPage = () => {

    const availableOrders = useAppSelector(getAvailableOrders)
    const currentUser = useAppSelector(getCurrentUser)

    const handleOrderTaken = async (order: IOrder) => {
        console.log(`Order ${order.id} taken!`)
        addSuccessNotification(`Order successfully taken for delivery. Visit yout profile to see details`)
    }

    const handleOpenDetailedInformation = async (order: IOrder) => {
        alert(`Open detailed information for order ${order.id}`)
    }

    return (
        <div className='container available__orders__container'>
            <Navbar currentUser={currentUser}/>
            <div className='available__orders__wrapper'>
                <div className="available__orders__sections__wrapper">
                    <div className='available__orders__section available__orders__pending'>
                        <div className='available__orders__section__title'>Available Orders</div>
                        <OrdersTable
                            orders={availableOrders}
                            buttonLabel='Take Order'
                            onOrderButtonClick={handleOrderTaken}
                            onOpenDetailedInformation={handleOpenDetailedInformation}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AvailableOrdersPage