import { createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/state/app.state';
import { IRecoverPasswordState } from '../state/recover-password.state';

const selectRegister = (state: IAppState) => state.recoverPassword;

export const registerState = createSelector(
    selectRegister,
    (state: IRecoverPasswordState) => state
)

