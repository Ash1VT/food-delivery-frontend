export default interface IUser {
    id: string;
    firstName: string
    lastName: string
    fullName: string;
    phone: string
    birthDate: Date
    imageUrl: string;
    email: string;
    role: string;
    isActive: boolean
    isEmailVerified: boolean
}