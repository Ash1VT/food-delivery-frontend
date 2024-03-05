import HeaderSection from './pages/main/header/HeaderSection'
import Navbar from './components/navbar/Navbar';
import { MouseEvent } from 'react';
import Footer from './components/footer';
import { FooterMenuColumnProps } from './components/footer/footer.types';
import MainPage from './pages/main/MainPage';
import './styles/App.css';
import './styles/buttons.css'
import ProfilePage from './pages/profile';

const App = () => {

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

    const menu_columns: FooterMenuColumnProps[] = [
        {
          title: 'Company',
          items: ['About us', 'Team', 'Careers', 'Blog']
        },
        {
          title: 'Contact',
          items: ['Help & Support', 'Partner with us', 'Ride with us']
        },
        // {
          // title: 'Legal'
        // }
    ]
    const onClick = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('Hello!')
    }

    return (
        <ProfilePage/>
    );
}

export default App;
