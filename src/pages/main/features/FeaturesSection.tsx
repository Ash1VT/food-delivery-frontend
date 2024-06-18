import Feature from './feature/Feature'
import FeatureDiscountIcon from './ui/icons/FeatureDiscountIcon'
import FeatureAddressIcon from './ui/icons/FeatureAddressIcon'
import FeatureClockIcon from './ui/icons/FeatureClockIcon'
import Divider from 'src/components/ui/divider/Divider'
import './features_section.css'

const FeaturesSection = () => {
    return (
        <div className="features__container">
            <div className="features__wrapper section__wrapper">
                <div className="features__list">
                    <Feature Icon={FeatureDiscountIcon} title='Daily Discounts'/>
                    <Divider width='2px' height='96px' color='#CFCFCF' className='features__divider'/>
                    <Feature Icon={FeatureAddressIcon} title='Live Tracing'/>
                    <Divider width='2px' height='96px' color='#CFCFCF' className='features__divider'/>
                    <Feature Icon={FeatureClockIcon} title='Quick Delivery'/>
                </div>
            </div>
        </div>
    )
}

export default FeaturesSection