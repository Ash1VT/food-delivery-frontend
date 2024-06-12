import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import { useAppSelector } from './hooks/redux/useAppSelector';
import { courierRoutes, customerRoutes, guestRoutes, moderatorRoutes, restaurantManagerRoutes } from './routes';
import { fetchCurrentUser } from './redux/actions/user.actions';
import { useAppDispatch } from './hooks/redux/useAppDispatch';
import { addErrorNotification } from './utils/notifications';
import { User } from './models/user.interfaces';

const getUserRoutes = (currentUser?: User | undefined | null) => {
    if (!currentUser) return guestRoutes

    if (currentUser.role === 'customer')
        return customerRoutes

    if (currentUser.role === 'courier')
        return courierRoutes

    if (currentUser.role === 'restaurant_manager')
        return restaurantManagerRoutes

    if (currentUser.role === 'moderator')
        return moderatorRoutes

    return guestRoutes
}

const AppRouter = () => {
    const dispatch = useAppDispatch()
    const { isLoading: isCurrentUserLoading, currentUser, error: currentUserError } = useAppSelector((state) => state.currentUserReducer)

    const userRoutes = getUserRoutes(currentUser)
    
    useEffect(() => {
        dispatch(fetchCurrentUser()).then((response) => {
            if (response.type === 'currentUser/fetchCurrentUser/rejected') {
                if (response.payload)
                    addErrorNotification(response.payload as string)
            }
        })
    }, [])
    
    return (
        <Router>
            <Routes>
                {userRoutes.map((route, index) => (
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