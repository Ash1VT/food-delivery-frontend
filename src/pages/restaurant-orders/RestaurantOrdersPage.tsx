import React, { useCallback, useEffect } from 'react'
import Navbar from 'src/components/navbar'
import Footer from 'src/components/footer'
import OrdersTable from 'src/components/orders-table/OrdersTable'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import { addErrorNotification, addSuccessNotification } from 'src/utils/notifications'
import { getCurrentManagerCreateApplication, getCurrentRestaurantDeliveredOrders, getCurrentRestaurantPendingOrders, getCurrentRestaurantPreparingOrders } from 'src/redux/selectors/currentManagerSelectors'
import { Order } from 'src/models/order.interfaces'
import { User } from 'src/models/user.interfaces'
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch'
import { confirmOrder, fetchCurrentManagerRestaurantOrders, prepareOrder } from 'src/redux/actions/currentManagerRestaurantOrders.actions'
import { fetchCurrentManagerRestaurantApplications } from 'src/redux/actions/currentManagerRestaurantApplications.actions'
import { fetchCurrentManagerRestaurant } from 'src/redux/actions/currentManagerRestaurant.actions'
import { Restaurant } from 'src/models/restaurant.interfaces'
import './restaurant_orders_page.css'
import LoadingPage from '../loading-page/LoadingPage'

const RestaurantOrdersPage = () => {
    const dispatch = useAppDispatch()
    const { isLoading: isCurrentUserLoading, currentUser, error: currentUserError } = useAppSelector((state) => state.currentUserReducer)
    const { isLoading: isCurrentManagerRestaurantOrdersLoading, orders, error: currentManagerRestaurantOrdersError } = useAppSelector((state) => state.currentManagerRestaurantOrdersReducer)
    const { isLoading: isCurrentManagerRestaurantApplicationsLoading, applications: restaurantApplications, error: currentManagerRestaurantApplicationsError } = useAppSelector((state) => state.currentManagerRestaurantApplicationsReducer)
    const { isLoading: isCurrentManagerRestaurantLoading, restaurant, error: currentManagerRestaurantError } = useAppSelector((state) => state.currentManagerRestaurantReducer)

    useEffect(() => {
        dispatch(fetchCurrentManagerRestaurantApplications()).then((response) => {
            if (response.type === 'currentManagerRestaurantApplications/fetchCurrentManagerRestaurantApplications/fulfilled') {
                dispatch(fetchCurrentManagerRestaurant()).then((response) => {
                    if (response.type === 'currentManagerRestaurant/fetchCurrentManagerRestaurant/fulfilled') {
                        const restaurant = response.payload as Restaurant
                        if (restaurant) {
                            dispatch(fetchCurrentManagerRestaurantOrders(restaurant.id)).then((response) => {
                                if (response.type === 'currentManagerRestaurantOrders/fetchCurrentManagerRestaurantOrders/rejected') {
                                    if (response.payload) {
                                        addErrorNotification(response.payload as string)
                                    }
                                }
                            })
                        }
                    }

                    if (response.type === 'currentManagerRestaurant/fetchCurrentManagerRestaurant/rejected') {
                        if (response.payload) {
                            addErrorNotification(response.payload as string)
                        }
                    }
                    
                })
            }

            if (response.type === 'currentManagerRestaurant/fetchCurrentManagerRestaurant/rejected') {
                if (response.payload) {
                    addErrorNotification(response.payload as string)
                }
            }
        })
    }, [dispatch])

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
    }, [restaurant, orders])

    if (!currentUser) {
        return <></>
    }
    
    const handleOrderConfirmed = async (order: Order) => {
        dispatch(confirmOrder(order.id)).then((response) => {
            if (response.type === 'currentManagerRestaurantOrders/confirmOrder/fulfilled') {
                addSuccessNotification(`Order ${order.id} is confirmed`)
            }

            if (response.type === 'currentManagerRestaurantOrders/confirmOrder/rejected') {
                if (response.payload) {
                    addErrorNotification(response.payload as string)
                }
            }
        })
    }

    const handleOrderPrepared = async (order: Order) => {
        dispatch(prepareOrder(order.id)).then((response) => {
            if (response.type === 'currentManagerRestaurantOrders/prepareOrder/fulfilled') {
                addSuccessNotification(`Order ${order.id} is prepared`)
            }

            if (response.type === 'currentManagerRestaurantOrders/prepareOrder/rejected') {
                if (response.payload) {
                    addErrorNotification(response.payload as string)
                }
            }
        })
    }

    if (isCurrentManagerRestaurantApplicationsLoading || isCurrentManagerRestaurantLoading || isCurrentManagerRestaurantOrdersLoading || isCurrentUserLoading)
        return <LoadingPage/>

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