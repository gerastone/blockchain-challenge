import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum ERegisterActions {
    REGISTER_ACTION = '[Register] User Register',
    REGISTER_ACTION_SUCCESS = '[Register] User Register Success',
    REGISTER_ACTION_ERROR = '[Register] User Register Error',
    VALIDATION_ACTION = '[Validation] User Validation',
    VALIDATION_ACTION_SUCCESS = '[Validation] User Validation Success',
    VALIDATION_ACTION_ERROR = '[Validation] User Validation Error',

}

export class RegisterAction implements Action {
    readonly type = ERegisterActions.REGISTER_ACTION;
    constructor(public payload: any) { }
}

export class RegisterActionSuccess implements Action {
    readonly type = ERegisterActions.REGISTER_ACTION_SUCCESS;
    constructor(public payload: any) { }
}

export class RegisterActionError implements Action {
    readonly type = ERegisterActions.REGISTER_ACTION_ERROR;
    constructor(public payload: any) { }
}

export class ValidationAction implements Action {
    readonly type = ERegisterActions.VALIDATION_ACTION;
    constructor(public payload: any) { }
}

export class ValidationActionSuccess implements Action {
    readonly type = ERegisterActions.VALIDATION_ACTION_SUCCESS;
    constructor(public payload: any) { }
}

export class ValidationActionError implements Action {
    readonly type = ERegisterActions.VALIDATION_ACTION_ERROR;
    constructor(public payload: any) { }
}

export type RegisterUnionAction =
    | RegisterAction
    | RegisterActionSuccess
    | RegisterActionError
    | ValidationAction
    | ValidationActionSuccess
    | ValidationActionError