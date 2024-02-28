import './footer_menu_column.css'
import { FooterMenuColumnProps } from '../footer.types'

const FooterMenuColumn = ({title, items} : FooterMenuColumnProps) => {
    return (
        <div className="footer__menu__column__container">
            <div className="footer__menu__column__title">{title}</div>
            <div className="footer__menu__column__items">
                {items.map((item: string) => {
                    return (
                        <div className="footer__menu__column__item">
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FooterMenuColumn