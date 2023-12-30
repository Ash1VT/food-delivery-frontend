import DeliveryAction from '../components/delivery/DeliveryAction'
import DeliveryAddressIcon from '../components/delivery/DeliveryAddressIcon'
import DeliveryOrderIcon from '../components/delivery/DeliveryOrderIcon'
import DeliveryBillIcon from '../components/delivery/DeliveryBillIcon'
import DeliveryMealIcon from '../components/delivery/DeliveryMealIcon'
import '../styles/sections/delivery_process_section.css'
import '../App.css'

const DeliveryProcessSection = () => {
    return (
        <div className="delivery__process__container">
            <div className="delivery__process__wrapper section__wrapper">
                <div className="section__title delivery__process__title">How does it work</div>
                <div className="delivery__process__actions__list">
                    <DeliveryAction Icon={DeliveryAddressIcon} 
                                    title='Select location' 
                                    description='Choose the location where your food will be delivered'/>

                    <DeliveryAction Icon={DeliveryOrderIcon}
                                    title='Choose order'
                                    description='Check over hundreds of menus to pick your favorite food'/>

                    <DeliveryAction Icon={DeliveryBillIcon}
                                    title='Pay advanced'
                                    description="It's quick, safe, and simple. Select several methods of payment"/>

                    <DeliveryAction Icon={DeliveryMealIcon}
                                    title='Enjoy meals'
                                    description="Food is made and delivered directly to your home"/>
                </div>
            </div>
        </div>
    )
}

export default DeliveryProcessSection