import React from 'react'
import { TakeOrderModalProps } from 'src/pages/available-orders/available_orders.types'
import './take_order_modal.css'

const TakeOrderModal = ({onOrderTaken} : TakeOrderModalProps) => {
    const [selectOption, setSelectOption] = React.useState('walking')

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectOption(e.target.value)
    }

    const handleOrderTaken = async () => {
        await onOrderTaken(selectOption)
    }

    return (
        <div className='take__order__modal__container'>
            <div className='take__order__modal__title'>Choose Delivery Method</div>
            <div className='take__order__modal__delivery__methods'>
                <label className="select__option">
                    <div className="select__option__root">
                        <input
                        type="radio"
                        id="walkingDeliveryType"
                        name="selectOption"
                        className="select__option__control"
                        value="walking"
                        checked={selectOption === "walking"}
                        onChange={handleOptionChange}
                        />
                        <div className="select__option__style select__option__circle"/>
                    </div>
                    <span className="select__option__text">Walking</span>
                </label>
                <label className="select__option">
                    <div className="select__option__root">
                        <input
                        type="radio"
                        id="drivingDeliveryType"
                        name="selectOption"
                        className="select__option__control"
                        value="driving"
                        checked={selectOption === "driving"}
                        onChange={handleOptionChange}
                        />
                        <div className="select__option__style select__option__circle"/>
                    </div>
                    <span className="select__option__text">Driving</span>
                </label>
            </div>

            <button className='take__order__modal__button' onClick={handleOrderTaken}>Take Order</button>
        </div>
    )
}

export default TakeOrderModal