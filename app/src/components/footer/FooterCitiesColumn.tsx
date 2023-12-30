import { FooterCitiesColumnProps } from '../../types/footer.type'
import '../../styles/footer_cities_column.css'

const FooterCitiesColumn = ({cities} : FooterCitiesColumnProps) => {
    return (
        <div className="footer__cities__column__container">
            {cities.map((city: string) => {
                return (
                    <div className="footer__city">
                        {city}
                    </div>
                )
            })}
        </div>
    )
}

export default FooterCitiesColumn