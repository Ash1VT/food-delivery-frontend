import React from 'react'
import './restaurant_orders_page.css'
import Navbar from 'src/components/navbar'
import Footer from 'src/components/footer'
import OrdersTable from 'src/components/orders-table/OrdersTable'
import { getRestaurantFinishedOrders, getRestaurantPendingOrders, getRestaurantPreparingOrders } from 'src/redux/selectors/orderSelectors'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import IOrder from 'src/redux/models/IOrder'
import { addSuccessNotification } from 'src/utils/notifications'

const RestaurantOrdersPage = () => {
    const restaurantId = '1'


    const pendingOrders = useAppSelector((state) => getRestaurantPendingOrders(state, restaurantId))
    const preparingOrders = useAppSelector((state) => getRestaurantPreparingOrders(state, restaurantId))
    const finishedOrders = useAppSelector((state) => getRestaurantFinishedOrders(state, restaurantId))

    const handleOrderConfirmed = async (order: IOrder) => {
        alert(`Order ${order.id} is confirmed`)
        addSuccessNotification(`Order ${order.id} is confirmed`)
    }

    const handleOrderPrepared = async (order: IOrder) => {
        alert(`Order ${order.id} is prepared`)
        addSuccessNotification(`Order ${order.id} is prepared`)
    }

    const handleOpenDetailedInformation = async (order: IOrder) => {
        alert(`Open detailed information for order ${order.id}`)
    }


    return (
        <div className="container restaurant__orders__container">
            <Navbar/>
            <div className='restaurant__orders__wrapper'>
                <div className="restaurant__orders__sections__wrapper">
                    <div className='restaurant__orders__section restaurant__orders__pending'>
                        <div className='restaurant__orders__section__title'>Pending Orders</div>
                        <OrdersTable
                            orders={pendingOrders}
                            buttonLabel='Confirm Order'
                            onOrderButtonClick={handleOrderConfirmed}
                            onOpenDetailedInformation={handleOpenDetailedInformation}/>
                    </div>
                    <div className='restaurant__orders__section restaurant__orders__preparing'>
                        <div className='restaurant__orders__section__title'>Preparing Orders</div>
                        <OrdersTable
                            orders={preparingOrders}
                            buttonLabel='Prepare Order'
                            onOrderButtonClick={handleOrderPrepared}
                            onOpenDetailedInformation={handleOpenDetailedInformation}/>
                    </div>
                    <div className='restaurant__orders__section restaurant__orders__preparing'>
                        <div className='restaurant__orders__section__title'>Finished Orders</div>
                        <OrdersTable
                            orders={finishedOrders}
                            onOpenDetailedInformation={handleOpenDetailedInformation}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default RestaurantOrdersPage