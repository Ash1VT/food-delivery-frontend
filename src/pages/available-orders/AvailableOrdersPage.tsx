import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import Navbar from 'src/components/navbar'
import Footer from 'src/components/footer'
import OrdersTable from 'src/components/orders-table/OrdersTable'
import { addSuccessNotification } from 'src/utils/notifications'
import { Order } from 'src/models/order.interfaces'
import './available_orders_page.css'

const AvailableOrdersPage = () => {

    const { isLoading: isAvailableOrdersLoading, orders, error: availableOrdersError } = useAppSelector((state) => state.availableOrdersReducer)
    const { isLoading: isCurrentUserLoading, currentUser, error: currentUserError } = useAppSelector((state) => state.currentUserReducer)

    if (!currentUser)
        return null
    
    const handleOrderTaken = async (order: Order) => {
        console.log(`Order ${order.id} taken!`)
        addSuccessNotification(`Order successfully taken for delivery. Visit yout profile to see details`)
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
                            onOrderButtonClick={handleOrderTaken}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AvailableOrdersPage