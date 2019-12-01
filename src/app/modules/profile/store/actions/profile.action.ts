import { Action } from '@ngrx/store';


export enum EProfileActions {
    GET_PROFILE_ACTION = '[Profile] Get profile',
    GET_PROFILE_ACTION_ERROR = '[Profile] Get profile Error',
    GET_PROFILE_ACTION_SUCCESS = '[Profile] Get profile Success',
    LOGOUT_ACTION = '[Profile] User Logout',
    LOGOUT_ACTION_SUCCESS = '[Profile] User Logout Success',
    LOGOUT_ACTION_ERROR = '[Profile] User Logout Error',
    CHANGE_PW_ACTION = '[Profile] Change password',
    CHANGE_PW_ACTION_SUCCESS = '[Profile] Change password success',
    CHANGE_PW_ACTION_ERROR = '[Profile] Change password error',
    CHANGE_PHONE_ACTION = '[Profile] Change phone',
    CHANGE_PHONE_ACTION_SUCCESS = '[Profile] Change phone success',
    CHANGE_PHONE_ACTION_ERROR = '[Profile] Change phone error',
}

export class ProfileAction implements Action {
    readonly type = EProfileActions.GET_PROFILE_ACTION;
    constructor() { }
}

export class ProfileActionSuccess implements Action {
    readonly type = EProfileActions.GET_PROFILE_ACTION_SUCCESS;
    constructor(public payload: any) { }
}

export class ProfileActionError implements Action {
    readonly type = EProfileActions.GET_PROFILE_ACTION_ERROR;
    constructor(public payload: any) { }
}

export class LogoutAction implements Action {
    readonly type = EProfileActions.LOGOUT_ACTION;
    constructor() { }
}

export class LogoutActionSuccess implements Action {
    readonly type = EProfileActions.LOGOUT_ACTION_SUCCESS;
    constructor() { }
}

export class LogoutActionError implements Action {
    readonly type = EProfileActions.LOGOUT_ACTION_ERROR;
    constructor(public payload: any) { }
}

export class ChangePwAction implements Action {
    readonly type = EProfileActions.CHANGE_PW_ACTION;
    constructor(public payload: any) { }
}

export class ChangePwActionSuccess implements Action {
    readonly type = EProfileActions.CHANGE_PW_ACTION_SUCCESS;
    constructor() { }
}

export class ChangePwActionError implements Action {
    readonly type = EProfileActions.CHANGE_PW_ACTION_ERROR;
    constructor(public payload: any) { }
}
export class ChangePhoneAction implements Action {
    readonly type = EProfileActions.CHANGE_PHONE_ACTION;
    constructor() { }
}

export class ChangePhoneActionSuccess implements Action {
    readonly type = EProfileActions.CHANGE_PHONE_ACTION_SUCCESS;
    constructor(public payload: any) { }
}

export class ChangePhoneActionError implements Action {
    readonly type = EProfileActions.CHANGE_PHONE_ACTION_ERROR;
    constructor(public payload: any) { }
}

export type ProfileUnionAction =
    | ProfileAction
    | ProfileActionSuccess
    | ProfileActionError
    | LogoutAction
    | LogoutActionSuccess
    | LogoutActionError
    | ChangePwAction
    | ChangePwActionSuccess
    | ChangePwActionError
    | ChangePhoneAction
    | ChangePhoneActionSuccess
    | ChangePhoneActionError