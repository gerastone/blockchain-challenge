import * as DashboardActions from '../actions/dashboard.action';
import { IDashboardState, initialDashboardState } from '../state/dashboard.state';

export function dashboardReducers(state = initialDashboardState, action: DashboardActions.DashboardUnionAction): IDashboardState {

    switch (action.type) {
        case DashboardActions.EDashboardActions.GET_DASHBOARD_INFO_SUCCESS: {
            return {
                ...state,
            };
        }
        case DashboardActions.EDashboardActions.GET_DASHBOARD_INFO_ERROR: {
            return {
                ...state
            };
        }
        default: {
            {
                return { ...state };
            }
        }
    }
}
