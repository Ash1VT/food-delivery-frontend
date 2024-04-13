import {combineReducers, configureStore} from "@reduxjs/toolkit";
import orderCartReducer from "src/components/order-cart/redux/reducers/orderCartReducer";
import menuReducer from "src/pages/menu/redux/reducers/menuReducer";
import restaurantsReducer from "src/pages/restaurants/redux/reducers/restaurantsReducer";

const rootReducer = combineReducers({
    orderCartReducer,
    menuReducer,
    restaurantsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']