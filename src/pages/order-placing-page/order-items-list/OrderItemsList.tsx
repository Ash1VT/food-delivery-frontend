import { OrderItemsListProps } from '../order_placing_page.types'
import OrderItem from '../order-item/OrderItem'
import Divider from 'src/components/ui/divider/Divider'
import './order_items_list.css'

const OrderItemsList = ({items}: OrderItemsListProps) => {
    return (
        <div>
            <table>
                <tr>
                    <th className="order__item__label"></th>
                    <th className="order__item__label"></th>
                    <th className="order__item__label">Quantity</th>
                    <th className="order__item__label">Price</th>
                    <th className="order__item__label">Total</th>
                </tr>
                {items.map((item, index) => (
                    <>
                        <OrderItem key={item.id} {...item} />
                        {index !== items.length - 1 && (
                            <>
                            <tr className='tr-top-divider'></tr>
                            <tr className="tr-divider">
                                <th colSpan={5}>
                                    <Divider width='100%' height='3px' color='#CFCFCF'/>
                                </th>
                            </tr>
                            <tr className='tr-bottom-divider'></tr>
                            </>
                        )}
                    </>
                ))}
            </table>
        </div>
    )
}

export default OrderItemsList