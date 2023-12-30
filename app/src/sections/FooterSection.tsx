import { FooterMenuColumnProps, FooterProps } from '../types/footer.type'
import Divider from '../components/Divider'
import FooterCitiesColumn from '../components/footer/FooterCitiesColumn'
import FooterMenuColumn from '../components/footer/FooterMenuColumn'
import FooterFollow from '../components/footer/FooterFollow'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded'
import FooterSubscription from '../components/footer/FooterSubscription'

import '../styles/sections/footer_section.css'
import FooterRights from '../components/footer/FooterRights'
import FooterCities from '../components/footer/FooterCities'
import FooterMenu from '../components/footer/FooterMenu'


const FooterSection = ({cities, cities_per_column, menu_columns} : FooterProps) => {

    return (
        <div className="footer__container">
            <div className="footer__wrapper">
                <FooterCities title='Our top cities' cities={cities} cities_per_column={cities_per_column}/>
                <div className="footer__company__wrapper">
                    <Divider width='100%' height='2px' color='#424242'/>
                    <div className="footer__center__wrapper">
                        <FooterMenu menu_columns={menu_columns}/>
                        <div className="footer__right__wrapper">
                            <FooterFollow title='follow us' icons={[FacebookIcon, InstagramIcon, TwitterIcon]}/>
                            <FooterSubscription title='Receive exclusive offers in your mailbox'/>
                        </div>
                    </div>
                    <div className="footer__bottom__wrapper">
                        <Divider width='100%' height='2px' color='#424242'/>
                        <FooterRights text='All rights Reserved' company='Eat Express' year='2023'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection