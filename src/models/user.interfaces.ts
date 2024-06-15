export interface UserAuthenticationData {
    email: string
    password: string
    isRemember: boolean
}

export interface User {
    id: string;
    firstName: string
    lastName: string
    fullName: string;
    phone: string
    birthDate: string
    imageUrl: string;
    email: string;
    role: string;
    isActive: boolean
    isEmailVerified: boolean
}

export interface UserCreate {
    firstName: string
    lastName: string
    password: string
    phone: string
    birthDate: Date
    email: string
    role: string
    isRemember: boolean
}

export interface UserUpdate {
    id: string;
    firstName: string
    lastName: string
    phone: string
    birthDate: Date
}

export interface UserUploadImage {
    id: string
    image: File
}

export interface UserUpdateActivity {
    id: string
    isActive: boolean
}

export interface UserUpdateEmailVerified {
    id: string
    isEmailVerified: boolean
}

export interface ModeratorCreate {
    firstName: string
    lastName: string
    password: string
    phone: string
    birthDate: Date
    email: string
    role: string
}