import { FooterFollowProps } from '../../types/footer.type'
import '../../styles/footer_follow.css'

const FooterFollow = ({title, icons} : FooterFollowProps) => {
    return (
        <div className="footer__follow__container">
            <div className="footer__follow__title">{title}</div>
            <div className="footer__follow__social__icons">
                 {icons.map((Icon) => {
                    return (
                        <div className="footer__follow__social__icon">
                            <Icon viewBox='2 1 20 21'/>
                        </div>
                    )
                 })}
            </div>
        </div>
    )
}

export default FooterFollow