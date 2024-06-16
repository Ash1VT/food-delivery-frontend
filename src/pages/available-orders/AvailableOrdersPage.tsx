import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import Navbar from 'src/components/navbar'
import Footer from 'src/components/footer'
import OrdersTable from 'src/components/orders-table/OrdersTable'
import { addErrorNotification, addSuccessNotification } from 'src/utils/notifications'
import { Order } from 'src/models/order.interfaces'
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch'
import Popup from 'reactjs-popup'
import TakeOrderModal from './ui/modals/take-order-modal/TakeOrderModal'
import { useEffect, useState } from 'react'
import { fetchAvailableOrders, takeOrder } from 'src/redux/actions/availableOrders.actions'
import './available_orders_page.css'

const AvailableOrdersPage = () => {
    const dispatch = useAppDispatch()
    const { isLoading: isAvailableOrdersLoading, orders, error: availableOrdersError } = useAppSelector((state) => state.availableOrdersReducer)
    const { isLoading: isCurrentUserLoading, currentUser, error: currentUserError } = useAppSelector((state) => state.currentUserReducer)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const [order, setOrder] = useState<Order>()

    useEffect(() => {
        dispatch(fetchAvailableOrders()).then((response) => {
            if (response.type === 'availableOrders/fetchAvailableOrders/rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }, [dispatch])

    if (!currentUser)
        return null
    
    const handleOrderTakenModalOpened = async (order: Order) => {
        setIsModalOpen(true)
        setOrder(order)
    }

    const handleOrderTakenModalClosed = async () => {
        setIsModalOpen(false)
        setOrder(undefined)
    }

    const handleOrderTaken = async (deliveryType: string) => {
        dispatch(takeOrder({
            id: order!.id,
            deliveryType
        })).then((response) => {
            if (response.type === 'availableOrders/takeOrder/fulfilled') {
                addSuccessNotification('Order taken for a delivery. Visit your profile to see details of your delivery.')
                setIsModalOpen(false)
            }

            if (response.type === 'availableOrders/takeOrder/rejected') {
                addErrorNotification(response.payload as string)
            }
        })
    }

    return (
        <div className='container available__orders__container'>
            <Navbar currentUser={currentUser}/>
            <div className='available__orders__wrapper'>
                <div className="available__orders__sections__wrapper">
                    <div className='available__orders__section available__orders__pending'>
                        <div className='available__orders__section__title'>Available Orders</div>
                        <OrdersTable
                            orders={orders}
                            currentUser={currentUser}
                            buttonLabel='Take Order'
                            onOrderButtonClick={handleOrderTakenModalOpened}/>
                        <Popup open={isModalOpen} onClose={handleOrderTakenModalClosed}>
                            <TakeOrderModal onOrderTaken={handleOrderTaken}/>
                        </Popup>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AvailableOrdersPage