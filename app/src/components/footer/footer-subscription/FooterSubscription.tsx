import { MouseEvent } from 'react'
import EmailInput from '../../ui/inputs/EmailInput/EmailInput'
import SubscribeButton from '../../ui/buttons/SubscribeButton/SubscribeButton'
import { FooterSubscriptionProps } from '../footer.types'

import './footer_subscription.css'

const FooterSubscription = ({title} : FooterSubscriptionProps) => {
    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        console.log('Click!');
    }

    return (
        <div className="footer__subscription__container">
            <div className="footer__subscription__title">{title}</div>
            <div className="footer__subscription__wrapper">
                <EmailInput placeholder='Enter Your Email' className='footer__subscription__email__input'/>
                <SubscribeButton onClick={onClick}/>
            </div>
        </div>
    )
}

export default FooterSubscription