import { RouterReducerState } from '@ngrx/router-store';
import { IHomeState, initialHomeState } from 'src/app/modules/home/store/state/home.state';
import { ILoginState, initialLoginState } from 'src/app/modules/login/store/state/login.state';
import { initialProfileState, IProfileState } from 'src/app/modules/profile/store/state/profile.state';
import { initialRegisterState, IRegisterState } from 'src/app/modules/register/store/state/register.state';
import { initialUtilityState, IUtilityState } from './utility.state';
import { IRecoverPasswordState, initialRecoverPasswordState } from 'src/app/modules/recover-password/store/state/recover-password.state';
import { IDashboardState, initialDashboardState } from 'src/app/modules/dashboard/store/state/dashboard.state';


export interface IAppState {
    router?: RouterReducerState;
    utility: IUtilityState,
    login: ILoginState,
    home: IHomeState,
    register: IRegisterState,
    profile: IProfileState,
    recoverPassword: IRecoverPasswordState
    dashboard: IDashboardState
}

export const initialAppState: IAppState = {
    utility: initialUtilityState,
    login: initialLoginState,
    home: initialHomeState,
    register: initialRegisterState,
    profile: initialProfileState,
    recoverPassword: initialRecoverPasswordState,
    dashboard: initialDashboardState
};

export function getInitialState(): IAppState {
    return initialAppState;
}
