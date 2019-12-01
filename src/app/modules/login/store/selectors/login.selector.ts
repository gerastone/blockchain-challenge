import { createSelector } from '@ngrx/store';
import { ILoginState } from '../state/login.state';
import { IAppState } from 'src/app/core/store/state/app.state';

const selectLogin = (state: IAppState) => state.login;

export const loginState = createSelector(
    selectLogin,
    (state: ILoginState) => state
)

