import { IUser } from '../../../../core/interfaces/user.interface';
export interface IProfileState {
    user: IUser,
    error: string
}

export const initialProfileState: IProfileState = {
    user: null,
    error: ''
}