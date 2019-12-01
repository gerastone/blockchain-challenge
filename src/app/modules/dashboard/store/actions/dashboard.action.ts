import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum EDashboardActions {
    GET_DASHBOARD_INFO_ACTION = '[Dashboard] Dashboard Info',
    GET_DASHBOARD_INFO_SUCCESS = '[Dashboard] Dashboard Info Success',
    GET_DASHBOARD_INFO_ERROR = '[Dashboard] Dashboard Info Error',
}

export class DashboardInfoAction implements Action {
    readonly type = EDashboardActions.GET_DASHBOARD_INFO_ACTION;
    constructor(public payload?: any) { }
}

export class DashboardInfoActionSuccess implements Action {
    readonly type = EDashboardActions.GET_DASHBOARD_INFO_SUCCESS;
    constructor(public payload: any) { }
}

export class DashboardInfoActionError implements Action {
    readonly type = EDashboardActions.GET_DASHBOARD_INFO_ERROR;
    constructor(public payload: any) { }
}


export type DashboardUnionAction =
    | DashboardInfoAction
    | DashboardInfoActionSuccess
    | DashboardInfoActionError