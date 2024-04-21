import {combineReducers, configureStore} from "@reduxjs/toolkit";
import orderCartReducer from "src/components/order-cart/redux/reducers/orderCartReducer";
import menuItemsReviewsReducer from "src/pages/menu-item-reviews/redux/reducers/menuItemsReviewsReducer";
import menuReducer from "src/pages/menu/redux/reducers/menuReducer";
import restaurantReviewsReducer from "src/pages/restaurant-reviews/redux/reducers/restaurantReviewsReducer";
import restaurantsReducer from "src/pages/restaurants/redux/reducers/restaurantsReducer";
import currentUserReducer from "src/redux/reducers/currentUserReducer";

const rootReducer = combineReducers({
    orderCartReducer,
    menuReducer,
    restaurantsReducer,
    restaurantReviewsReducer,
    menuItemsReviewsReducer,
    currentUserReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']