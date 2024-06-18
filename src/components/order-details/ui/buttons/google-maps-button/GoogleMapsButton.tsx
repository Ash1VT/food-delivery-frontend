import { GoogleMapsButtonProps } from "src/components/order-details/order_details.types";
import { constructGoogleMapsUrl } from "src/utils/constructMapsUrl";
import './google_maps_button.css'

const GoogleMapsButton = ({originAddress, destinationAddress, travelMode} : GoogleMapsButtonProps) => {
    return (
        <div className="google__maps__button__container">
            <a href={constructGoogleMapsUrl(originAddress, destinationAddress, travelMode)} target="_blank" rel="noreferrer" className="google__maps__button__link">
                <img src="https://firebasestorage.googleapis.com/v0/b/fooddelivery-21854.appspot.com/o/Images%2Fgoogle_maps_logo.svg?alt=media&token=aa2b6b91-6f6f-460b-ab7c-4a9fb9d36d87" className="google__maps__button__image"/>
                <div className="google__maps__button__text">View on Google Maps</div>
            </a>
        </div>
    )
}

export default GoogleMapsButton