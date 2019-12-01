import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { utilityReducers } from '../reducers/utility.reducer'
import { loginReducers } from 'src/app/modules/login/store/reducers/login.reducer';
import { homeReducers } from 'src/app/modules/home/store/reducers/home.reducer';
import { registerReducers } from 'src/app/modules/register/store/reducers/register.reducer';
import { profileReducers } from 'src/app/modules/profile/store/reducers/profile.reducer';
import { recoverPasswordReducers } from 'src/app/modules/recover-password/store/reducers/recover-password.reducer';
import { dashboardReducers } from 'src/app/modules/dashboard/store/reducers/dashboard.reducer';


export const appReducers: ActionReducerMap<IAppState, any> = {
    utility: utilityReducers,
    login: loginReducers,
    home: homeReducers,
    register: registerReducers,
    profile: profileReducers,
    recoverPassword: recoverPasswordReducers,
    dashboard: dashboardReducers
};
