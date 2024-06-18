import { YandexMapsButtonProps } from "src/components/order-details/order_details.types";
import { constructYandexMapsUrl } from "src/utils/constructMapsUrl";
import './yandex_maps_button.css'

const YandexMapsButton = ({originAddress, destinationAddress, travelMode} : YandexMapsButtonProps) => {
    return (
        <div className="yandex__maps__button__container">
            <a href={constructYandexMapsUrl(originAddress, destinationAddress, travelMode)} target="_blank" rel="noreferrer" className="yandex__maps__button__link">
                <img src="https://firebasestorage.googleapis.com/v0/b/fooddelivery-21854.appspot.com/o/Images%2Fyandex_maps_logo.svg?alt=media&token=9921e630-9c18-40e4-b293-434812fffc09" className="yandex__maps__button__image" />
                <div className="yandex__maps__button__text">View on Yandex Maps</div>
            </a>
        </div>
    )
}

export default YandexMapsButton