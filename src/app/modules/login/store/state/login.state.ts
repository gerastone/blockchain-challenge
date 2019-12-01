import { IUser } from './../../../../core/interfaces/user.interface';
export interface ILoginState {
    loged: boolean,
    user: IUser,
    error: string;
}

export const initialLoginState: ILoginState = {
    loged: false,
    user: null,
    error: ''
};
