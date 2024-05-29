import { ApplyPromocodeButtonProps } from 'src/pages/order-placing-page/order_placing_page.types'
import './apply_promocode_button.css'

const ApplyPromocodeButton = ({isApplied, onPromocodeApplied} : ApplyPromocodeButtonProps) => {
    return (
        <button className={`button__wrapper promocode__button ${isApplied ? 'promocode__button__applied' : ''}`} onClick={onPromocodeApplied}>
            Apply
        </button>
    )
}

export default ApplyPromocodeButton