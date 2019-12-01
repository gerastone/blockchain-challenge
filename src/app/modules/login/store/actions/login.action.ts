import { Action } from '@ngrx/store';

export enum ELoginActions {
    LOGIN_ACTION = '[Login] User Login',
    LOGIN_ACTION_SUCCESS = '[Login] User Login Success',
    LOGIN_ACTION_ERROR = '[Login] User Login Error',
}

export class LoginAction implements Action {
    readonly type = ELoginActions.LOGIN_ACTION;
    constructor(public payload: any) { }
}

export class LoginActionSuccess implements Action {
    readonly type = ELoginActions.LOGIN_ACTION_SUCCESS;
    constructor(public payload: any) { }
}

export class LoginActionError implements Action {
    readonly type = ELoginActions.LOGIN_ACTION_ERROR;
    constructor(public payload: any) { }
}

export type LoginUnionAction =
    | LoginAction
    | LoginActionSuccess
    | LoginActionError