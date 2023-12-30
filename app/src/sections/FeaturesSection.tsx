import React from 'react'
import Feature from '../components/features/Feature'
import FeatureDiscountIcon from '../components/features/FeatureDiscountIcon'
import FeatureAddressIcon from '../components/features/FeatureAddressIcon'
import FeatureClockIcon from '../components/features/FeatureClockIcon'

import '../styles/sections/features_section.css'
import '../App.css'
import Divider from '../components/Divider'

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