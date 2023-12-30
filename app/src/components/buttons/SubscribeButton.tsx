import { SubscribeButtonProps } from "../../types/button.type"

import '../../styles/buttons/subscribe_button.css'

const SubscribeButton = ({onClick, className} : SubscribeButtonProps) => {
    if (!className)
        className = ''

    return (
        <div onClick={onClick} 
                role="button" 
                className={`subscribe__button__wrapper ${className}`}>
                <p className="subscribe__button__text">Subscribe</p>
        </div>
    )
}

export default SubscribeButton