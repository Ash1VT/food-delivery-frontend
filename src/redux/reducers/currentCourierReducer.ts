import { createSlice } from "@reduxjs/toolkit";

interface CurrentCourierState {
}

const initialState: CurrentCourierState = {
}

const currentCourierSlice = createSlice({
    name: 'currentCourier',
    initialState,
    reducers: {
       
    }
})

export default currentCourierSlice.reducer;