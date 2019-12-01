import { IAppState } from 'src/app/core/store/state/app.state';
import { createSelector } from '@ngrx/store';
import { IHomeState } from '../state/home.state';

const selectHome = (state: IAppState) => state.home;

export const homeState = createSelector(
    selectHome,
    (state: IHomeState) => state
)

