import { MouseEvent } from 'react'
import PlaceIcon from '@mui/icons-material/Place'
import OrderButton from '../../../../components/ui/buttons/OrderButton/OrderButton'
import { PopularItemProps } from '../../../../types/item.type'
import './popular_item.css'

const PopularItem = ({image_url, name, restaurant_name, price}: PopularItemProps) => {

    const onClick = (e: MouseEvent) => {
        console.log('ordered!')
    }

    return (
        <div className="popular__item__container">
            <div style={{backgroundImage: `url(${image_url})`}} className="popular__item__image__wrapper"/>
            <div className="popular__item__details">
                <div className="popular__item__name">{name}</div>
                <div className="popular__item__restaurant__wrapper">
                    <PlaceIcon className="popular__item__location__icon" viewBox='8 2 8 20'/>
                    <div className="popular__item__restaurant__name">{restaurant_name}</div>
                </div>
                <div className="popular__item__price">${price.toFixed(2)}</div>
            </div>
            <OrderButton onClick={onClick}/>
        </div>
    )
}

export default PopularItem