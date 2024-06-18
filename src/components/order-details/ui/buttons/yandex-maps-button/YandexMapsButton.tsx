import { YandexMapsButtonProps } from "src/components/order-details/order_details.types";
import { constructYandexMapsUrl } from "src/utils/constructMapsUrl";
import './yandex_maps_button.css'

const YandexMapsButton = ({originAddress, destinationAddress, travelMode} : YandexMapsButtonProps) => {
    return (
        <div className="yandex__maps__button__container">
            <a href={constructYandexMapsUrl(originAddress, destinationAddress, travelMode)} target="_blank" rel="noreferrer" className="yandex__maps__button__link">
                <img src="/images/yandex_maps_logo.svg" className="yandex__maps__button__image" />
                <div className="yandex__maps__button__text">View on Yandex Maps</div>
            </a>
        </div>
    )
}

export default YandexMapsButton