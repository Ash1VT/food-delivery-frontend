import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded'
import { FooterRightsProps } from '../../types/footer.type'

import '../../styles/footer_rights.css'


const FooterRights = ({text, company, year} : FooterRightsProps) => {
    return (
        <div className="footer__rights__container">
            <div className="footer__rights__text">{text}</div>
            <CopyrightRoundedIcon className="footer__rights__icon" viewBox='2 1 20 21'/>
            <div className="footer__rights__company">{company}, {year}</div>
        </div>
    )
}

export default FooterRights