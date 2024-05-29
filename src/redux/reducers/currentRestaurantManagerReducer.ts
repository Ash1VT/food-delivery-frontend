import { createSlice } from "@reduxjs/toolkit";
import IMenu from "../models/IMenu";
import IPromocode from "../models/IPromocode";

interface CurrentRestaurantManagerState {
    restaurantMenus: IMenu[]
    restaurantPromocodes: IPromocode[]
}

const initialState: CurrentRestaurantManagerState = {
    restaurantMenus: [

    ],
    restaurantPromocodes: [
    
    ]
}

const currentRestaurantManagerSlice = createSlice({
    name: 'currentRestaurantManager',
    initialState,
    reducers: {
       
    }
})

export default currentRestaurantManagerSlice.reducer;