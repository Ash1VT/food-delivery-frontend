import {combineReducers, configureStore} from "@reduxjs/toolkit";
import currentUserReducer from "src/redux/reducers/currentUserReducer";
import orderCartReducer from "src/redux/reducers/orderCartReducer";
import restaurantReviewsReducer from "src/redux/reducers/restaurantReviewsReducer";
import restaurantsReducer from "src/redux/reducers/restaurantsReducer";
import availableOrdersReducer from "./reducers/availableOrdersReducer";
import currentCourierOrdersReducer from "./reducers/currentCourierOrdersReducer";
import currentCourierRatingReducer from "./reducers/currentCourierRatingReducer";
import currentCourierReviewsReducer from "./reducers/currentCourierReviewsReducer";
import restaurantMenusReducer from "./reducers/restaurantMenusReducer";
import menuItemReviewsReducer from "src/redux/reducers/menuItemReviewsReducer";
import currentCustomerAddressesReducer from "./reducers/currentCustomerAddressesReducer";
import currentCustomerOrdersReducer from "./reducers/currentCustomerOrdersReducer";
import currentManagerRestaurantMenusReducer from "./reducers/currentManagerRestaurantMenusReducer";
import currentManagerRestaurantOrdersReducer from "./reducers/currentManagerRestaurantOrdersReducer";
import currentManagerRestaurantPromocodesReducer from "./reducers/currentManagerRestaurantPromocodesReducer";
import currentManagerRestaurantReducer from "./reducers/currentManagerRestaurantReducer";
import customerAddressesReducer from "./reducers/customerAddressesReducer";
import usersReducer from "./reducers/usersReducer";
import restaurantApplicationsReducer from "./reducers/restaurantApplicationsReducer";
import currentCustomerRestaurantReviewReducer from "./reducers/currentCustomerRestaurantReviewReducer";
import currentCustomerMenuItemReviewReducer from "./reducers/currentCustomerMenuItemReviewReducer";

const rootReducer = combineReducers({
    orderCartReducer,
    restaurantMenusReducer,
    restaurantsReducer,
    restaurantReviewsReducer,
    menuItemReviewsReducer,

    currentUserReducer,
    
    // COURIER
    availableOrdersReducer,
    currentCourierOrdersReducer,
    currentCourierRatingReducer,
    currentCourierReviewsReducer,
    
    // CUSTOMER
    currentCustomerAddressesReducer,
    currentCustomerOrdersReducer,
    currentCustomerRestaurantReviewReducer,
    currentCustomerMenuItemReviewReducer,

    // RESTAURANT MANAGER
    currentManagerRestaurantMenusReducer,
    currentManagerRestaurantOrdersReducer,
    currentManagerRestaurantPromocodesReducer,
    currentManagerRestaurantReducer,

    // MODERATOR
    restaurantApplicationsReducer,
    customerAddressesReducer,
    usersReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']