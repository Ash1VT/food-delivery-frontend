import RemoveIcon from '@mui/icons-material/Remove';
import { RemoveFromCartButtonProps } from 'src/pages/menu/menu_page.types';
import './remove_from_cart_button.css'

const RemoveFromCartButton = ({ onRemovedFromCart } : RemoveFromCartButtonProps) => {
    return (
        <button className="button__wrapper remove__from__cart__button__wrapper" onClick={onRemovedFromCart}>
            <RemoveIcon/>
            <p className="button__text remove__from__cart__button__text">Remove from cart</p>
        </button>
    )
}

export default RemoveFromCartButton