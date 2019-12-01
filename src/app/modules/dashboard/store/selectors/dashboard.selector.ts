import { IAppState } from 'src/app/core/store/state/app.state';
import { createSelector } from '@ngrx/store';
import { IDashboardState } from '../state/dashboard.state';

const selectDashboard = (state: IAppState) => state.dashboard;

export const homeState = createSelector(
    selectDashboard,
    (state: IDashboardState) => state
)

