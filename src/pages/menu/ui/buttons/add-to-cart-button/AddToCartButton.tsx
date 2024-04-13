import AddIcon from '@mui/icons-material/Add';
import { AddToCartButtonProps } from 'src/pages/menu/menu_page.types';
import './add_to_cart_button.css'

const AddToCartButton = ({ onAddedToCart } : AddToCartButtonProps) => {
    return (
        <button className="button__wrapper add__to__cart__button__wrapper" onClick={onAddedToCart}>
            <AddIcon/>
            <p className="button__text add__to__cart__button__text">Add to cart</p>
        </button>
    )
}

export default AddToCartButton