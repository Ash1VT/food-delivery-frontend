import React from 'react'
import { Link } from 'react-router-dom'
import Footer from 'src/components/footer'
import Navbar from 'src/components/navbar'
import { useAppSelector } from 'src/hooks/redux/useAppSelector'
import { useNavigate } from "react-router-dom";
import './not_found_page.css'

const NotFoundPage = () => {
    const { isLoading: isCurrentUserLoading, currentUser, error: currentUserError } = useAppSelector((state) => state.currentUserReducer)

    const navigate = useNavigate()

    const handlePreviousPage = () => {
        navigate(-1)
    }

    return (
        <div className='container not__found__container'>
            <Navbar currentUser={currentUser}/>
            <div className='not__found__wrapper'>
                <div className='not__found__content'>
                    <div className='not__found__404__wrapper'>
                        <div className='not__found__404__title'>Oops!</div>
                        <div className='not__found__404__description'>404 - The Page can't be Found</div>
                    </div>
                    <div className='not__found__links__wrapper'>
                        <div className='not__found__link' onClick={handlePreviousPage}>Go to Previous Page</div>
                        <Link to='/' className='not__found__link'>Go to Home Page</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>  
    )
}

export default NotFoundPage