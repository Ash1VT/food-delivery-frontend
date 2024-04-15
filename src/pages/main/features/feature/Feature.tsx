import { FeatureProps } from '../features.types'
import './feature.css'

const Feature = ({Icon, title} : FeatureProps) => {
    return (
        <div className="feature__container">
            <div className="feature__icon">
                <Icon/>
            </div>
            <div className="feature__text__wrapper">
                <div className="feature__title">{title}</div>
            </div>
        </div>
    )
}

export default Feature