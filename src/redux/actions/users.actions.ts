import { createAsyncThunk } from "@reduxjs/toolkit";
import { ModeratorCreate, User, UserCreate, UserUpdate, UserUpdateActivity, UserUpdateEmailVerified, UserUploadImage } from "src/models/user.interfaces";
import { UserService } from "src/services/UserService";

export const fetchUsers = createAsyncThunk<User[], void, { rejectValue: string }>(
    'users/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            const suka = await UserService.getUsers()
            console.log(suka)
            return suka
        }
        catch (error: any) {
            console.log(error)
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }

            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const createModerator = createAsyncThunk<User, ModeratorCreate, { rejectValue: string }>(
    'users/createModerator',
    async (data: ModeratorCreate, { rejectWithValue }) => {
        try {
            return await UserService.createModerator(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }
            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const updateUser = createAsyncThunk<User, UserUpdate, { rejectValue: string }>(
    'users/updateUser',
    async (data: UserUpdate, { rejectWithValue }) => {
        try {
            return await UserService.updateUser(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }
            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const uploadUserImage = createAsyncThunk<User, UserUploadImage, { rejectValue: string }>(
    'users/uploadUserImage',
    async (data: UserUploadImage, { rejectWithValue }) => {
        try {
            return await UserService.uploadUserImage(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }
            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const changeUserActiveStatus = createAsyncThunk<User, UserUpdateActivity, { rejectValue: string }>(
    'users/changeUserActiveStatus',
    async (data: UserUpdateActivity, { rejectWithValue }) => {
        try {
            return await UserService.changeUserActiveStatus(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }
            return rejectWithValue(error.response.data.detail)
        }
    }
)

export const changeUserEmailVerififiedStatus = createAsyncThunk<User, UserUpdateEmailVerified, { rejectValue: string }>(
    'users/changeUserEmailVerififiedStatus',
    async (data: UserUpdateEmailVerified, { rejectWithValue }) => {
        try {
            return await UserService.changeUserEmailVerificationStatus(data)
        }
        catch (error: any) {
            if (error.code === "ERR_NETWORK") {
                return rejectWithValue('Host is not available')
            }
            return rejectWithValue(error.response.data.detail)
        }
    }
)