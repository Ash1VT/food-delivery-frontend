import { FooterMenuColumnProps, FooterMenuProps } from '../../types/footer.type'
import FooterMenuColumn from './FooterMenuColumn'
import '../../styles/footer_menu.css'

const FooterMenu = ({menu_columns} : FooterMenuProps) => {
    return (
        <div className="footer__menu__container">
            {menu_columns.map((menu_column: FooterMenuColumnProps) => {
                return (
                    <FooterMenuColumn title={menu_column.title} items={menu_column.items}/>
                )
            })}
        </div>
    )
}

export default FooterMenu