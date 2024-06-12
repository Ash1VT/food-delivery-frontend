import { User, UserAuthenticationData, UserCreate, UserUpdate, UserUploadImage } from "../models/user.interfaces";
import { userMicroservice } from "./axios";
import sendPrivateRequest from "src/redux/utils/sendPrivateRequest";
import moment from "moment";

export class UserService {

    private static getUserRegistrationRoute (role: string) {
        if (role === 'customer') {
            return '/users/customers/'
        }
    
        if (role === 'courier') {
            return '/users/couriers/'
        }
    
        if (role === 'restaurant_manager') {
            return '/users/managers/'
        }
    
        return 'unknown'
    }

    private static getUserRole (role: string) {
        if (role === 'CU') {
            return 'customer'
        }
    
        if (role === 'CO') {
            return 'courier'
        }
        
        if (role === 'RM') {
            return 'restaurant_manager'
        }
    
        if (role === 'MO') {
            return 'moderator'
        }
    
        return 'unknown'
    }

    private static parseUserFromResponseData(data: any): User {
        return {
            id: data.id,
            role: this.getUserRole(data.role),
            email: data.email,
            isActive: data.is_active,
            isEmailVerified: data.is_email_verified,
            firstName: data.user_profile.first_name,
            lastName: data.user_profile.last_name,
            fullName: data.user_profile.full_name,
            phone: data.user_profile.phone,
            birthDate: data.user_profile.birth_date,
            imageUrl: data.user_profile.image_url
        }
    }

    private static parseUserCreateDataToRequestData(user: UserCreate): any {
        return {
            email: user.email,
            password: user.password,
            user_profile: {
                first_name: user.firstName,
                last_name: user.lastName,
                phone: `+${user.phone}`,
                birth_date: moment(user.birthDate).format('YYYY-MM-DD'),
        }}
    }

    private static parseUserUpdateDataToRequestData(user: UserUpdate): any {
        return {
            user_profile: {
                first_name: user.firstName,
                last_name: user.lastName,
                phone: `+${user.phone}`,
                birth_date: moment(user.birthDate).format('YYYY-MM-DD')
        }}
    }


    private static parseAuthenticationDataToRequestData(data: UserAuthenticationData): any {
        return {
            email: data.email,
            password: data.password,
            expires_session: !data.isRemember
        }
    }

    public static async authenticate(data: UserAuthenticationData): Promise<void> {
        const authenticationData = this.parseAuthenticationDataToRequestData(data)
        await userMicroservice.post('/tokens/', authenticationData)
    }

    public static async getCurrentUser(): Promise<User> {
        return await sendPrivateRequest<User>(async () => {
            const response = await userMicroservice.get('/users/current/')
            return this.parseUserFromResponseData(response.data)
        })
    }

    public static async register(data: UserCreate): Promise<User> {
        const userCreateData = this.parseUserCreateDataToRequestData(data)
        const response = await userMicroservice.post(this.getUserRegistrationRoute(data.role), userCreateData)
        return this.parseUserFromResponseData(response.data)
    }
    
    public static async updateCurrentUser(data: UserUpdate): Promise<User> {
        const userUpdateData = this.parseUserUpdateDataToRequestData(data)
        return await sendPrivateRequest<User>(async () => {
            const response = await userMicroservice.patch(`/users/current/`, userUpdateData)
            return this.parseUserFromResponseData(response.data)
        })
    }

    public static async uploadCurrentUserImage(data: UserUploadImage): Promise<User> {
        const formData = new FormData()
        formData.append('image', data.image)

        return await sendPrivateRequest<User>(async () => {
            const response = await userMicroservice.put(`/users/current/image/`, formData)
            return this.parseUserFromResponseData(response.data)
        })
    }

    public static async resendVerificationEmail(): Promise<void> {
        return await sendPrivateRequest<void>(async () => {
            await userMicroservice.get('/users/current/send-activation/')
        })
    }

    public static async logout(): Promise<void> {
        await userMicroservice.post('/tokens/clear/')
    }
}