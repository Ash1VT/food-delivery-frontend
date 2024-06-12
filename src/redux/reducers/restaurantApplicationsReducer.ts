import { createSlice } from "@reduxjs/toolkit"
import { RestaurantApplication } from "src/models/restaurantApplication.interfaces"

interface RestaurantApplicationsState {
    isLoading: boolean
    applications: RestaurantApplication[]
    error?: string | undefined | null
}

const initialState: RestaurantApplicationsState = {
    isLoading: false,
    applications: [],
    error: null
}

const restaurantApplicationsSlice = createSlice({
    name: 'restaurantApplications',
    initialState,
    reducers: {
       
    }
})

export default restaurantApplicationsSlice.reducer;