import { createSelector } from '@ngrx/store';
import { IHomeState } from '../state/rewards.state';
import { IAppState } from 'src/app/core/store/state/app.state';

const selectHome = (state: IAppState) => state.home;

export const homeState = createSelector(
    selectHome,
    (state: IHomeState) => state
)

