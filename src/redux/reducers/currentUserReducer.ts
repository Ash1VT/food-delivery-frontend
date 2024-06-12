import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { authenticate, fetchCurrentUser, logout, register, resendVerificationEmail, updateCurrentUser, uploadCurrentUserImage } from "../actions/currentUser.actions";
import { User } from "src/models/user.interfaces";

interface CurrentUserState {
    isLoading: boolean
    currentUser?: User | undefined | null
    error?: string | undefined | null
}

const initialState: CurrentUserState = {
    isLoading: false,
    currentUser: null,
    error: null
}

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // Authenticate
        
        builder.addCase(authenticate.pending, (state, action) => {
            state.isLoading = true
        })

        builder.addCase(authenticate.fulfilled, (state) => {
            state.isLoading = false
        })

        builder.addCase(authenticate.rejected, (state, action: PayloadAction<string | undefined>) => {
            state.isLoading = false
            state.error = action.payload
        })

        // Register

        builder.addCase(register.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(register.fulfilled, (state, action: PayloadAction<User>) => {
            state.isLoading = false
            state.currentUser = action.payload
            state.error = null
        })

        builder.addCase(register.rejected, (state, action: PayloadAction<string | undefined>) => {
            state.isLoading = false
            state.error = action.payload
        })

        // Update

        builder.addCase(updateCurrentUser.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(updateCurrentUser.fulfilled, (state, action: PayloadAction<User>) => {
            state.isLoading = false
            state.currentUser = action.payload
            state.error = null
        })

        builder.addCase(updateCurrentUser.rejected, (state, action: PayloadAction<string | undefined>) => {
            state.isLoading = false
            state.error = action.payload
        })

        // Upload Image

        builder.addCase(uploadCurrentUserImage.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(uploadCurrentUserImage.fulfilled, (state, action: PayloadAction<User>) => {
            state.isLoading = false
            state.currentUser = action.payload
            state.error = null
        })

        builder.addCase(uploadCurrentUserImage.rejected, (state, action: PayloadAction<string | undefined>) => {
            state.isLoading = false
            state.error = action.payload
        })

        // Resend Verification Email

        builder.addCase(resendVerificationEmail.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(resendVerificationEmail.fulfilled, (state) => {
            state.isLoading = false
        })

        builder.addCase(resendVerificationEmail.rejected, (state, action: PayloadAction<string | undefined>) => {
            state.isLoading = false
            state.error = action.payload
        })

        // Fetch Current User
        
        builder.addCase(fetchCurrentUser.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchCurrentUser.fulfilled, (state, action: PayloadAction<User>) => {
            state.isLoading = false
            state.currentUser = action.payload
            state.error = null
        })

        builder.addCase(fetchCurrentUser.rejected, (state, action: PayloadAction<string | null | undefined>) => {
            state.isLoading = false
            state.error = action.payload
        })

        // Logout

        builder.addCase(logout.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(logout.fulfilled, (state) => {
            state.isLoading = false
            state.currentUser = null
            state.error = null
        })

        builder.addCase(logout.rejected, (state, action: PayloadAction<string | undefined>) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export default currentUserSlice.reducer;
