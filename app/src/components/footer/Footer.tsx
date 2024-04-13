import { FooterMenuColumnProps } from './footer.types'
import Divider from '../ui/divider/Divider'
import FooterFollow from './footer-follow/FooterFollow'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FooterSubscription from './footer-subscription/FooterSubscription'
import FooterRights from './footer-rights/FooterRights'
import FooterCities from './footer-cities/FooterCities'
import FooterMenu from './footer-menu/FooterMenu'
import './footer.css'


const Footer = () => {

    const cities: string[] = [
        'San Francisco',
        'Miami',
        'San Diego',
        'East Bay',
        'Long Beach',
        'Los Angeles',
        'San Francisco',
        'Miami',
        'San Diego',
        'East Bay',
        'Long Beach',
        'Los Angeles',
        'San Francisco',
        'Miami',
        'San Diego',
        'East Bay',
        'Long Beach',
        'Los Angeles',
        'San Francisco',
        'Miami',
    ]

    const menuColumns: FooterMenuColumnProps[] = [
        {
          title: 'Company',
          items: ['About us', 'Team', 'Careers', 'Blog']
        },
        {
          title: 'Contact',
          items: ['Help & Support', 'Partner with us', 'Ride with us']
        },
    ]

    const citiesPerColumn = 5;

    return (
        <div className="footer__container">
            <div className="footer__wrapper">
                <FooterCities title='Our top cities' cities={cities} citiesPerColumn={citiesPerColumn}/>
                <div className="footer__company__wrapper">
                    <Divider width='100%' height='2px' color='#424242'/>
                    <div className="footer__center__wrapper">
                        <FooterMenu menuColumns={menuColumns}/>
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



export default Footer