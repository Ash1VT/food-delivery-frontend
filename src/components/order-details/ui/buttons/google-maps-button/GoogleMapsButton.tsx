import { GoogleMapsButtonProps } from "src/components/order-details/order_details.types";
import { constructGoogleMapsUrl } from "src/utils/constructMapsUrl";
import './google_maps_button.css'

const GoogleMapsButton = ({originAddress, destinationAddress, travelMode} : GoogleMapsButtonProps) => {
    return (
        <div className="google__maps__button__container">
            <a href={constructGoogleMapsUrl(originAddress, destinationAddress, travelMode)} target="_blank" rel="noreferrer" className="google__maps__button__link">
                <img src="/images/google_maps_logo.svg" className="google__maps__button__image"/>
                <div className="google__maps__button__text">View on Google Maps</div>
            </a>
        </div>
    )
}

export default GoogleMapsButton