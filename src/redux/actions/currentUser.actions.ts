import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, UserAuthenticationData, UserCreate, UserUpdate, UserUploadImage } from "src/models/user.interfaces";
import { UserService } from "src/services/UserService";
import { parseUserErrors } from "../utils/parseErrors";

export const fetchCurrentUser = createAsyncThunk<User, void, { rejectValue: string | undefined | null }>(
    'currentUser/fetchCurrentUser',
    async (_, { rejectWithValue }) => {
        try {
            return await UserService.getCurrentUser()
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            if (error.response.status === 401) {
                return rejectWithValue(null)
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const authenticate = createAsyncThunk<void, UserAuthenticationData, { rejectValue: string }>(
    'currentUser/authenticate',
    async (data: UserAuthenticationData, { rejectWithValue }) => {

        try {
            return await UserService.authenticate(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }
            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const register = createAsyncThunk<User, UserCreate, { rejectValue: string }>(
    'currentUser/register',
    async (data: UserCreate, { rejectWithValue }) => {

        try {
            return await UserService.register(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }
            return rejectWithValue(parseUserErrors(error.response.data))
        }
    }
)

export const updateCurrentUser = createAsyncThunk<User, UserUpdate, { rejectValue: string }>(
    'currentUser/updateCurrentUser',
    async (data: UserUpdate, { rejectWithValue }) => {
        try {
            return await UserService.updateCurrentUser(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }
            return rejectWithValue(parseUserErrors(error.response.data))
        }
    }
)

export const uploadCurrentUserImage = createAsyncThunk<User, UserUploadImage, { rejectValue: string }>(
    'currentUser/uploadCurrentUserImage',
    async (data: UserUploadImage, { rejectWithValue }) => {
        try {
            return await UserService.uploadCurrentUserImage(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }
            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const resendVerificationEmail = createAsyncThunk<void, void, { rejectValue: string }>(
    'currentUser/resendVerificationEmail',
    async (_, { rejectWithValue }) => {
        try {
            return await UserService.resendVerificationEmail()
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }
            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const logout = createAsyncThunk<void, void, { rejectValue: string }>(
    'currentUser/logout',
    async (_, { rejectWithValue }) => {
        try {
            return await UserService.logout()
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }
            return rejectWithValue(error.response.data.detail)
        }
    }
)