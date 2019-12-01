export interface IRegisterState {
    phone: string,
    error: string
}

export const initialRegisterState: IRegisterState = {
    phone: '',
    error: ''
};
