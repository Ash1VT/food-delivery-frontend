import { createSlice } from "@reduxjs/toolkit"
import { User } from "src/models/user.interfaces"
import { changeUserActiveStatus, changeUserEmailVerififiedStatus, createModerator, fetchUsers, updateUser, uploadUserImage } from "../actions/users.actions"

interface UsersState {
    isLoading: boolean
    users: User[]
    error?: string | undefined | null
}

const initialState: UsersState = {
    isLoading: false,
    users: [],
    error: null
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        // Fetch Users

        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            console.log(action.payload)
            state.isLoading = false
            state.error = null
            state.users = action.payload
        })

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Create Moderator

        builder.addCase(createModerator.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(createModerator.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.users.push(action.payload)
        })

        builder.addCase(createModerator.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Update User

        builder.addCase(updateUser.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.users = state.users.map((user) => {
                if (user.id === action.payload.id) {
                    return action.payload
                }
                return user
            })
        })

        builder.addCase(updateUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Change User Active Status

        builder.addCase(changeUserActiveStatus.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(changeUserActiveStatus.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.users = state.users.map((user) => {
                if (user.id === action.payload.id) {
                    return action.payload
                }
                return user
            })
        })

        builder.addCase(changeUserActiveStatus.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Change User Email Verified Status

        builder.addCase(changeUserEmailVerififiedStatus.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(changeUserEmailVerififiedStatus.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.users = state.users.map((user) => {
                if (user.id === action.payload.id) {
                    return action.payload
                }
                return user
            })
        })

        builder.addCase(changeUserEmailVerififiedStatus.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        // Upload User Image

        builder.addCase(uploadUserImage.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(uploadUserImage.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            state.users = state.users.map((user) => {
                if (user.id === action.payload.id) {
                    return action.payload
                }
                return user
            })
        })

        builder.addCase(uploadUserImage.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default usersSlice.reducer;