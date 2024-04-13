import { FooterMenuColumnProps, FooterMenuProps } from '../footer.types'
import FooterMenuColumn from './footer-menu-column/FooterMenuColumn'
import './footer_menu.css'

const FooterMenu = ({menuColumns} : FooterMenuProps) => {
    return (
        <div className="footer__menu__container">
            {menuColumns.map((menu_column: FooterMenuColumnProps) => {
                return (
                    <FooterMenuColumn title={menu_column.title} items={menu_column.items}/>
                )
            })}
        </div>
    )
}

export default FooterMenu