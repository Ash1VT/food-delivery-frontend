import { Commet } from "react-loading-indicators"
import './loading_page.css'

const LoadingPage = () => {
    return (
        <div className="container loading__container">
            <Commet color={'#FF9800'} size={'large'} textColor={'#FF9800'} text={'Loading'}></Commet>
        </div>
    )
}


export default LoadingPage