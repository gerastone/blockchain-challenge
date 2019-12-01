export interface IUser {
    
    id: number,
    name: string,
    surname: string,
    phone: string,
    email: string,
    role: string,
    activation_token: string
    active: number
    created_at: Date
    deleted_at: null
    email_verified: number
    email_verified_at: null
    sms_verified: number
    updated_at: Date
    
}