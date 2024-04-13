import { RestaurantReferenceProps } from './restaurant_reference.types'
import ShowRestaurantRatingButton from './ui/buttons/show-restaurant-rating-button/ShowRestaurantRatingButton'
import ShowRestaurantInfoButton from './ui/buttons/show-restaurant-info-button/ShowRestaurantInfoButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Popup from 'reactjs-popup'
import './restaurant_reference.css'
import { useRef, useState } from 'react';


function CustomButton(props: any) {
    return <button {...props}>Custom</button>;
}

const RestaurantReference = ({name, description, imageUrl, address, ratingValue, reviewsCount} : RestaurantReferenceProps) => {
    const handle = () => {
        console.log('clicked')
    }

    return (
        <div className="restaurant__reference__container">
            <div className="restaurant__reference__image__wrapper" style={{backgroundImage: `url(${imageUrl})`}}>
                <div className="restaurant__reference__gradient"></div>
                <div className="restaurant__reference__details">
                    <div className="restaurant__reference__name">
                        {name}
                    </div>
                    <div className="restaurant__reference__buttons">
                        <Popup arrow={false} position={['bottom center', 'left top']} trigger={ShowRestaurantInfoButton({})}>
                            <div className="restaurant__reference__information__wrapper">
                                <h3 className="restaurant__reference__information__name">{name}</h3>
                                <p className="restaurant__reference__information__field restaurant__reference__information__description">{description}</p>
                                <p className="restaurant__reference__information__field">{address}</p>
                            </div>
                        </Popup>
                        <ShowRestaurantRatingButton ratingValue={ratingValue} reviewsCount={reviewsCount}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RestaurantReference