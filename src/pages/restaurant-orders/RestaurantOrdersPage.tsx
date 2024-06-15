import React, { useCallback } from 'react'
import Navbar from 'src/components/navbar'
import Footer from 'src/components/footer'
import OrdersTable from 'src/components/orders-table/OrdersTable'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import { addSuccessNotification } from 'src/utils/notifications'
import { getCurrentManagerCreateApplication, getCurrentRestaurantDeliveredOrders, getCurrentRestaurantPendingOrders, getCurrentRestaurantPreparingOrders } from 'src/redux/selectors/currentManagerSelectors'
import { Order } from 'src/models/order.interfaces'
import './restaurant_orders_page.css'
import { User } from 'src/models/user.interfaces'

const RestaurantOrdersPage = () => {
    const { isLoading: isCurrentUserLoading, currentUser, error: currentUserError } = useAppSelector((state) => state.currentUserReducer)
    const { isLoading: isCurrentManagerRestaurantOrdersLoading, error: currentManagerRestaurantOrdersError } = useAppSelector((state) => state.currentManagerRestaurantOrdersReducer)
    const { isLoading: isCurrentManagerRestaurantApplicationsLoading, applications: restaurantApplications, error: currentManagerRestaurantApplicationsError } = useAppSelector((state) => state.currentManagerRestaurantApplicationsReducer)
    const { isLoading: isCurrentManagerRestaurantLoading, restaurant, error: currentManagerRestaurantError } = useAppSelector((state) => state.currentManagerRestaurantReducer)

    const pendingOrders = useAppSelector(getCurrentRestaurantPendingOrders)
    const preparingOrders = useAppSelector(getCurrentRestaurantPreparingOrders)
    const deliveredOrders = useAppSelector(getCurrentRestaurantDeliveredOrders)

    const renderOrders = useCallback((currentUser: User) => {
        if (restaurant)
            return (
                <div className="restaurant__orders__sections__wrapper">
                    <div className='restaurant__orders__section restaurant__orders__pending'>
                        <div className='restaurant__orders__section__title'>Pending Orders</div>
                        <OrdersTable
                            orders={pendingOrders}
                            currentUser={currentUser}
                            buttonLabel='Confirm Order'
                            onOrderButtonClick={handleOrderConfirmed}/>
                    </div>
                    <div className='restaurant__orders__section restaurant__orders__preparing'>
                        <div className='restaurant__orders__section__title'>Preparing Orders</div>
                        <OrdersTable
                            orders={preparingOrders}
                            currentUser={currentUser}
                            buttonLabel='Prepare Order'
                            onOrderButtonClick={handleOrderPrepared}/>
                    </div>
                    <div className='restaurant__orders__section restaurant__orders__preparing'>
                        <div className='restaurant__orders__section__title'>Delivered Orders</div>
                        <OrdersTable
                            currentUser={currentUser}
                            orders={deliveredOrders}/>
                    </div>
                </div>
            )

        return (
            <div className='restaurant__orders__empty'>
                You should create your restaurant first to see orders
            </div>
        )
    }, [])

    if (!currentUser) {
        return <></>
    }
    
    const handleOrderConfirmed = async (order: Order) => {
        alert(`Order ${order.id} is confirmed`)
        addSuccessNotification(`Order ${order.id} is confirmed`)
    }

    const handleOrderPrepared = async (order: Order) => {
        alert(`Order ${order.id} is prepared`)
        addSuccessNotification(`Order ${order.id} is prepared`)
    }

    return (
        <div className="container restaurant__orders__container">
            <Navbar currentUser={currentUser}/>
            <div className='restaurant__orders__wrapper'>
                {renderOrders(currentUser)}
            </div>
            <Footer/>
        </div>
    )
}

export default RestaurantOrdersPage