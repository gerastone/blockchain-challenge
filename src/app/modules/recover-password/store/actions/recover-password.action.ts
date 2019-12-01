import { Action } from '@ngrx/store';

export enum ERecoverPasswordActions {
    RECOVER_PASSWORD_ACTION = '[Recover Password] User Recover Password',
    RECOVER_PASSWORD_ACTION_SUCCESS = '[Recover Password] User Recover Password Success',
    RECOVER_PASSWORD_ACTION_ERROR = '[Recover Password] User Recover Password Error',


}

export class RecoverPasswordAction implements Action {
    readonly type = ERecoverPasswordActions.RECOVER_PASSWORD_ACTION;
    constructor(public payload: any) { }
}

export class RecoverPasswordActionSuccess implements Action {
    readonly type = ERecoverPasswordActions.RECOVER_PASSWORD_ACTION_SUCCESS;
    constructor(public payload: any) { }
}

export class RecoverPasswordActionError implements Action {
    readonly type = ERecoverPasswordActions.RECOVER_PASSWORD_ACTION_ERROR;
    constructor(public payload: any) { }
}


export type RecoverPasswordUnionAction =
    | RecoverPasswordAction
    | RecoverPasswordActionSuccess
    | RecoverPasswordActionError