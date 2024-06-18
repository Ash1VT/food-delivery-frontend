import { ReactNotifications } from 'react-notifications-component';
import AppRouter from './AppRouter';
import './styles/App.css';
import './styles/buttons.css';
import './styles/popup.css';
import './styles/values.css'
import './styles/scrollbars.css'
import './styles/labels.css'
import '@smastrom/react-rating/style.css';
import 'react-notifications-component/dist/theme.css'
import 'reactjs-popup/dist/index.css';
import 'animate.css/animate.compat.css'
import 'react-phone-input-2/lib/style.css'
import LoadingPage from './pages/loading-page/LoadingPage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import stripePublicKey from './constants/stripePublicKey';

const stripe = loadStripe(stripePublicKey)

const App = () => {
    return (
        <>
            <ReactNotifications/>
            <Elements stripe={stripe}>
                <AppRouter/>
            </Elements>
        </>
    )
}

export default App;