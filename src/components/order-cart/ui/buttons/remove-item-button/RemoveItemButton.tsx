import ClearIcon from '@mui/icons-material/Clear';
import './remove_item_button.css';
import { OrderCartRemoveItemButtonProps } from 'src/components/order-cart/order_cart.types';

const RemoveItemButton = ({ onItemRemoved } : OrderCartRemoveItemButtonProps) => {
    return (
        <button className='button__wrapper remove__item__button__wrapper' onClick={onItemRemoved}>
            <ClearIcon/>
        </button>
    )
}

export default RemoveItemButton;
