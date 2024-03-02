import { DeliveryActionProps } from '../delivery_process.types'
import './delivery_action.css'

const DeliveryAction = ({Icon, title, description}: DeliveryActionProps) => {
    return (
        <div className="delivery__action__container">
            <div className="delivery__action__icon">
                <Icon/>
            </div>
            <div className="delivery__action__text__wrapper">
                <div className="delivery__action__title">{title}</div>
                <div className="delivery__action__description">{description}</div>
            </div>
        </div>
    )
}

export default DeliveryAction