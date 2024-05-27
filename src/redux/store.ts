import {combineReducers, configureStore} from "@reduxjs/toolkit";
import currentUserReducer from "src/redux/reducers/currentUserReducer";
import menuItemsReviewsReducer from "src/redux/reducers/menuItemsReviewsReducer";
import menuReducer from "src/redux/reducers/menuReducer";
import orderCartReducer from "src/redux/reducers/orderCartReducer";
import restaurantReviewsReducer from "src/redux/reducers/restaurantReviewsReducer";
import restaurantsReducer from "src/redux/reducers/restaurantsReducer";

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