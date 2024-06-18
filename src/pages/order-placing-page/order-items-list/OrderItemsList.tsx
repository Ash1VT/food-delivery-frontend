import { OrderItemsListProps } from '../order_placing_page.types'
import OrderItem from '../order-item/OrderItem'
import Divider from 'src/components/ui/divider/Divider'
import './order_items_list.css'

const OrderItemsList = ({items, onQuantityChanged}: OrderItemsListProps) => {
    return (
        <div>
            <table>
                <tr>
                    <th></th>
                    <th>
                        <div className='order__item__label order__item__margin__left'>
                        </div>
                    </th>
                    <th>
                        <div className='order__item__label order__item__margin__left'>
                            Quantity
                        </div>
                    </th>
                    <th>
                        <div className='order__item__label order__item__margin__left'>
                            Price
                        </div>
                    </th>
                    <th>
                        <div className='order__item__label order__item__margin__left'>
                            Total
                        </div>
                    </th>
                </tr>
                {items.map((item, index) => (
                    <>
                        <OrderItem key={item.id} item={item} onQuantityChanged={onQuantityChanged} />
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