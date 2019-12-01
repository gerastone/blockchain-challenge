import { createSelector } from '@ngrx/store';
import { IRegisterState } from '../state/register.state';
import { IAppState } from 'src/app/core/store/state/app.state';

const selectRegister = (state: IAppState) => state.register;

export const registerState = createSelector(
    selectRegister,
    (state: IRegisterState) => state
)

