import React, { useCallback, useState } from 'react'
import DropdownSection from 'src/components/dropdown-section/DropdownSection';
import moment from 'moment';
import Divider from 'src/components/ui/divider/Divider';
import StarIcon from '@mui/icons-material/Star';
import Timer from 'src/components/timer/Timer';
import FinishOrderDeliveryButton from '../../pages/profile/ui/buttons/finish-order-delivery-button/FinishOrderDeliveryButton';
import OpenAddingReviewButton from '../../pages/profile/ui/buttons/open-adding-review-button/OpenAddingReviewButton';
import PlaceOrderButton from '../../pages/profile/ui/buttons/place-order-button/PlaceOrderButton';
import Review from 'src/components/reviews/review/Review';
import ModalWindow from 'src/components/modal-window/ModalWindow';
import AddCourierReviewModal from '../../pages/profile/ui/modals/add-courier-review-modal/AddCourierReviewModal';
import { Order } from 'src/models/order.interfaces';
import { User } from 'src/models/user.interfaces';
import { OrderDetailsProps } from './order_details.types';
import './order_details.css'

const OrderDetails = ({currentUser, order, onOrderReviewCreated, onOrderPlaced, onOrderDeliveryFinished} : OrderDetailsProps) => {

    const handleOrderPlaced = async () => {
        if (!onOrderPlaced) return
        await onOrderPlaced(order.id)
    }

    const handleOrderDeliveryFinished = async () => {
        if (!onOrderDeliveryFinished) return
        await onOrderDeliveryFinished(order.id)
    }


    const renderUserDetails = useCallback((currentUser: User) => {
        if (currentUser.role === 'customer' && order.courier && (order.status === 'delivering' || order.status === 'delivered')) {
            return (
                <>
                    <tr className='order__details__tr'>
                        <td>
                            <div className="order__details__label">Courier</div>
                        </td>
                        <td>
                            <div className='order__details__courier__wrapper'>
                                <div className='order__details__user__image__wrapper'>
                                    <img className="order__details__user__image" src={order.courier.imageUrl} alt="image"/>
                                </div>
                                <div className="order__details__text">{order.courier.fullName}</div>
                                <div className="order__details__courier__rating__wrapper">
                                    <div className="order__details__text">{order.courierRating}</div>
                                    <StarIcon className='order__details__star__icon' viewBox='8 2 8 20'/>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr style={{height: '20px'}}>
                        <td colSpan={2}>
                            <Divider width={'100%'} height={'4px'} color={'#E5E5E5'}/>
                        </td>
                    </tr>
                </>
            )
        }

        if (currentUser.role === 'courier' && order.customer) {
            return (
                <>
                    <tr className='order__details__tr'>
                        <td>
                            <div className="order__details__label">Customer</div>
                        </td>
                        <td>
                            <div className='order__details__customer__wrapper'>
                                <div className='order__details__user__image__wrapper'>
                                    <img className="order__details__user__image" src={order.customer.imageUrl} alt="image"/>
                                </div>
                                <div className="order__details__text">{order.customer.fullName}</div>
                            </div>
                        </td>
                    </tr>
                    <tr style={{height: '20px'}}>
                        <td colSpan={2}>
                            <Divider width={'100%'} height={'4px'} color={'#E5E5E5'}/>
                        </td>
                    </tr>
                </>

            )
        }

        if (currentUser.role === 'restaurant_manager' && order.courier && order.customer && (order.status === 'delivering' || order.status === 'delivered')) {
            return (
                <>
                    <tr className='order__details__tr'>
                        <td>
                            <div className="order__details__label">Courier</div>
                        </td>
                        <td>
                            <div className='order__details__courier__wrapper'>
                                <div className='order__details__user__image__wrapper'>
                                    <img className="order__details__user__image" src={order.courier.imageUrl} alt="image"/>
                                </div>
                                <div className="order__details__text">{order.courier.fullName}</div>
                                <div className="order__details__courier__rating__wrapper">
                                    <div className="order__details__text">{order.courierRating}</div>
                                    <StarIcon className='order__details__star__icon' viewBox='8 2 8 20'/>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className='order__details__tr'>
                        <td>
                            <div className="order__details__label">Customer</div>
                        </td>
                        <td>
                            <div className='order__details__customer__wrapper'>
                                <div className='order__details__user__image__wrapper'>
                                    <img className="order__details__user__image" src={order.customer.imageUrl} alt="image"/>
                                </div>
                                <div className="order__details__text">{order.customer.fullName}</div>
                            </div>
                        </td>
                    </tr>
                    <tr style={{height: '20px'}}>
                        <td colSpan={2}>
                            <Divider width={'100%'} height={'4px'} color={'#E5E5E5'}/>
                        </td>
                    </tr>
                </>
            )
        
        }

    
        return null
    }, [currentUser.role, order.status])

    const renderDestinationAddress = useCallback((order: Order) => {
        return (
            <tr className='order__details__tr'>
                <td>
                    <div className="order__details__label">Destination Address</div>
                </td>
                <td>
                    <div className="order__details__text">{order.deliveryInformation.destinationAddress ? order.deliveryInformation.destinationAddress : 'N/A'}</div>
                </td>
            </tr>
        )
    }, [order.deliveryInformation.destinationAddress])

    const renderDeliveryAcceptedAt = useCallback((order: Order) => {
        if ((order.status === 'delivered' || order.status === 'delivering') && order.deliveryInformation.deliveryAcceptedAt) {
            return (
                <tr className='order__details__tr'>
                    <td>
                        <div className="order__details__label">Delivery Accepted At</div>
                    </td>
                    <td>
                        <div className="order__details__text">{moment(order.deliveryInformation.deliveryAcceptedAt).format('DD.MM.YYYY HH:mm')}</div>
                    </td>
                </tr>
            )
        }
    }, [order.status])

    const renderDeliveringInformation = useCallback((order: Order) => {
        if (order.status === 'delivering') {
            return (
                <tr className='order__details__tr'>
                    <td>
                        <div className="order__details__label">Delivery Time Left</div>
                    </td>
                    <td>
                        <Timer initialSeconds={moment(order.deliveryInformation.deliveryAcceptedAt).add(order.deliveryInformation.supposedDeliveryTime, 'minutes').diff(moment(), 'seconds')}/>
                    </td>
                </tr>
            )
        }
        return null
    }, [order.status])


    const renderDeliveredInformation = useCallback((order: Order) => {
        if (order.status === 'delivered' && order.deliveryInformation.supposedDeliveryTime && order.deliveryInformation.deliveryFinishedAt && order.deliveryInformation.actualDeliveryTime) {
            const isSupposedDeliveryTimeFailed = order.deliveryInformation.actualDeliveryTime > order.deliveryInformation.supposedDeliveryTime
            const deliveryTime = moment.utc(order.deliveryInformation.actualDeliveryTime*60*1000).format('HH:mm:ss')
            const deliveryFinishedAt = moment(order.deliveryInformation.deliveryFinishedAt).format('DD.MM.YYYY HH:mm')
            const supposedDeliveryTime = moment.utc(order.deliveryInformation.supposedDeliveryTime*60*1000).format('HH:mm:ss')

            return (
                <>
                <tr className='order__details__tr'>
                    <td>
                        <div className="order__details__label">Supposed Delivery Time</div>
                    </td>
                    <td>
                        <div className="order__details__text">{supposedDeliveryTime}</div>
                    </td>
                </tr>
                <tr className='order__details__tr'>
                    <td>
                        <div className="order__details__label">Delivery Finished At</div>
                    </td>
                    <td>
                        <div className="order__details__text">{deliveryFinishedAt}</div>
                    </td>
                </tr>
                <tr className='order__details__tr'>
                    <td>
                        <div className="order__details__label">Delivery Time</div>
                    </td>
                    <td>
                        <div className={`order__details__text ${isSupposedDeliveryTimeFailed ? 'order__details__delivery__time__failed' : ''}`}>{deliveryTime}</div>
                    </td>
                </tr>
                </>
            )
        }
    }, [order.status])

    const renderCourierFinishButton = useCallback((currentUser: User, order: Order) => {
        if (order.status === 'delivering' && currentUser.role === 'courier') {
            return (
                <tr className='order__details__tr'>
                    <td colSpan={2}>
                        <FinishOrderDeliveryButton onClick={handleOrderDeliveryFinished}/>
                    </td>
                </tr>
            )
        }
    }, [currentUser.role, order.status])

    const renderReview = useCallback((order: Order) => {
        if (currentUser.role === 'customer' && order.status === 'delivered') {

            if (!order.review && order.courier && onOrderReviewCreated) {
                return (
                    <tr className='order__details__tr'>
                        <td colSpan={2}>
                            <ModalWindow button={OpenAddingReviewButton({isReviewAdded: Boolean(order.review)})}>
                                <AddCourierReviewModal courier={order.courier} orderId={order.id} onCourierReviewCreated={onOrderReviewCreated}/>
                            </ModalWindow>
                        </td>
                    </tr>
                )
            }

            if (order.review) {
                return (
                    <tr className='order__details__tr'>
                        <td colSpan={2}>
                            <div className="order__details__review__wrapper">
                                <Review id={order.review.id} comment={order.review.comment} rating={order.review.rating} customerFullName={order.review.customerFullName} customerImageUrl={order.review.customerImageUrl} customerId={order.review.customerId} />
                            </div>
                        </td>
                    </tr>
                )
            }
            
        }

        if (currentUser.role === 'courier' && order.status === 'delivered' && order.review) {
            return (
                <tr className='order__details__tr'>
                    <td colSpan={2}>
                        <div className="order__details__review__wrapper">
                            <Review id={order.review.id} comment={order.review.comment} rating={order.review.rating} customerFullName={order.review.customerFullName} customerImageUrl={order.review.customerImageUrl} customerId={order.review.customerId} />
                        </div>
                    </td>
                </tr>
            )
        }
    }, [currentUser.role, order.status])

    const renderCustomerPlaceOrderButton = useCallback((order: Order) => {
        if (currentUser.role === 'customer' && order.status === 'placing') {
            return (
                <PlaceOrderButton onClick={handleOrderPlaced}/>
            )
        }
    }, [currentUser.role, order.status])

    return (
        <div className="order__details__container">
            <div className='order__details__wrapper'>
                <div className='order__details__id__wrapper'>
                    <div className="order__details__label">Order #{order.id}</div>
                </div>
                <div className="order__details__text">{moment(order.createdAt).format('DD.MM.YYYY HH:mm')}</div>
            </div>
            <DropdownSection title="Delivery Details">
                <table className='order__details__table'>
                    {renderUserDetails(currentUser)}
                    {renderDestinationAddress(order)}
                    {renderDeliveryAcceptedAt(order)}
                    {renderDeliveringInformation(order)}
                    {renderDeliveredInformation(order)}
                    {renderCourierFinishButton(currentUser, order)}
                    {renderReview(order)}
                </table>
            </DropdownSection>
            {order.restaurant && (
                <DropdownSection title="Restaurant Details">
                    <table className='order__details__table'>
                        <tr className='order__details__tr'>
                            <td style={{width: '50%'}}>
                                <div className="order__details__label">Name</div>
                            </td>
                            <td>
                                <div className="order__details__text">{order.restaurant.name}</div>
                            </td>
                        </tr>
                        <tr className='order__details__tr'>
                            <td>
                                <div className="order__details__label">Rating</div>
                            </td>
                            <td>
                                <div className='order__details__restaurant__rating__wrapper'>
                                    <div className='order__details__restaurant__rating'>
                                        <div className="order__details__text">{order.restaurant.ratingValue}</div>
                                        <StarIcon className='order__details__star__icon' viewBox='8 2 8 20'/>
                                    </div>
                                    <div className="order__details__text">({order.restaurant.reviewsCount} reviews)</div>
                                </div>
                            </td>
                        </tr>
                        <tr className='order__details__tr'>
                            <td>
                                <div className="order__details__label">Address</div>
                            </td>
                            <td>
                                <div className="order__details__text">{order.restaurant.address}</div>
                            </td>
                        </tr>
                        <tr className='order__details__tr'>
                            <td>
                                <div className="order__details__label">Phone</div>
                            </td>
                            <td>
                                <div className="order__details__text">{order.restaurant.phone}</div>
                            </td>
                        </tr>
                    </table>
                </DropdownSection>
            )}

            <DropdownSection title="Items Details">
                <table className='order__details__table'>
                    <th></th>
                    <th>
                        <div className='order__item__label order__item__margin__left'>Name</div>
                    </th>
                    <th>
                        <div className='order__item__label order__item__margin__left'>Price</div>
                    </th>
                    <th>
                        <div className='order__item__label order__item__margin__left'>Quantity</div>
                    </th>
                    <th>
                        <div className='order__item__label order__item__margin__left'>Total</div>
                    </th>

                    {order.items.map(item => (
                        <tr>
                            <td>
                                <div className='order__details__item__image__wrapper'>
                                    <img className='order__details__item__image' src={item.menuItemImageUrl} alt='image'></img>
                                </div>
                            </td>
                            <td>
                                <div className='order__details__text order__details__items__text order__item__margin__left'>
                                    {item.menuItemName}
                                </div>
                            </td>
                            <td>
                                <div className='order__details__text order__details__items__text order__item__margin__left'>
                                    {item.menuItemPrice}$
                                </div>
                            </td>
                            <td>
                                <div className='order__details__text order__details__items__text order__item__margin__left'>
                                    {item.quantity}
                                </div>
                            </td>
                            <td>
                                <div className='order__details__text order__details__items__text order__item__margin__left'>
                                    {item.menuItemPrice * item.quantity}$
                                </div>
                            </td>
                        </tr>
                    ))}
                </table>
            </DropdownSection>

            <DropdownSection title="Price Details">
                <table className='order__details__table'>
                    <tr className='order__details__tr'>
                        <td style={{width: '50%'}}>
                            <div className="order__details__label">Items Price</div>
                        </td>
                        <td>
                            <div className="order__details__text">${order.priceInformation.orderItemsPrice.toFixed(2)}</div>
                        </td>
                    </tr>
                    {order.priceInformation.promocodeName && (
                        <>
                            <tr className='order__details__tr'>
                                <td>
                                    <div className="order__details__label">Promocode</div>
                                </td>
                                <td>
                                    <div className="order__details__text">{order.priceInformation.promocodeName} (-${order.priceInformation.promocodeDiscount?.toFixed(2)})</div>
                                </td>
                            </tr>
                            <tr className='order__details__tr'>
                                <td>
                                    <div className="order__details__label">Discounted Price</div>
                                </td>
                                <td>
                                    <div className="order__details__text">${order.priceInformation.decountedItemsPrice.toFixed(2)}</div>
                                </td>
                            </tr>
                        </>
                    )}
                    <tr className='order__details__tr'>
                        <td>
                            <div className="order__details__label">Delivery Price</div>
                        </td>
                        <td>
                            {order.priceInformation.deliveryPrice ? (
                                <div className="order__details__text">${order.priceInformation.deliveryPrice.toFixed(2)}</div>
                            )
                            : (
                                <div className="order__details__text">N/A</div>
                            )}
                        </td>
                    </tr>
                    <tr style={{height: '20px'}}>
                        <td colSpan={2}>
                            <Divider width={'100%'} height={'4px'} color={'#E5E5E5'}/>
                        </td>
                    </tr>
                    <tr className='order__details__tr'>
                        <td>
                            <div className="order__details__label">Total Price</div>
                        </td>
                        <td>
                            <div className="order__details__text order__details__total__text">${order.priceInformation.totalPrice.toFixed(2)}</div>
                        </td>
                    </tr>
                </table>
            </DropdownSection>
            {renderCustomerPlaceOrderButton(order)}
        </div>
    );
}

export default OrderDetails