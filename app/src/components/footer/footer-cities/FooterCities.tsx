import { FooterCitiesProps } from '../footer.types'
import FooterCitiesColumn from './footer-cities-column/FooterCitiesColumn'
import './footer_cities.css'

const FooterCities = ({title, cities, cities_per_column} : FooterCitiesProps) => {

    const parse_array = (array: Array<any>, chunks_count: number) => {
        return array.reduce((resultArray, item, index) => { 
            const chunkIndex = Math.floor(index/chunks_count)
          
            if(!resultArray[chunkIndex]) {
              resultArray[chunkIndex] = []
            }
          
            resultArray[chunkIndex].push(item)
          
            return resultArray
        }, [])
    }

    const parsed_cities = parse_array(cities, cities_per_column)

    return (
        <div className="footer__cities__container">
            <div className="footer__cities__title">
                {title}
            </div>
            <div className="footer__cities__list">
                {parsed_cities.map((cities_column: string[]) => {
                    return (
                        <FooterCitiesColumn cities={cities_column}/>
                    )
                })}
            </div>
        </div>
    )
}

export default FooterCities