import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import { getCurrentUser } from './redux/selectors/currentUserSelectors';
import { useAppSelector } from './hooks/redux/useAppSelector';
import IUser from './redux/models/IUser';
import { courierRoutes, customerRoutes, moderatorRoutes, restaurantManagerRoutes } from './routes';

const getUserRoutes = (currentUser?: IUser | undefined | null) => {
    if (!currentUser) return null

    if (currentUser.role === 'customer')
        return customerRoutes

    if (currentUser.role === 'courier')
        return courierRoutes

    if (currentUser.role === 'restaurant_manager')
        return restaurantManagerRoutes

    if (currentUser.role === 'moderator')
        return moderatorRoutes
}

const AppRouter = () => {

    const currentUser = useAppSelector(getCurrentUser)

    const userRoutes = getUserRoutes(currentUser)
    
    return (
        <Router>
            <Routes>
                {userRoutes?.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Routes>
        </Router>
    )
}   

export default AppRouter