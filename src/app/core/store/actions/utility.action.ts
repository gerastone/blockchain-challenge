import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum EUtilityActions {
    TOGGLE_SHOW_MODAL = '[Utility] Toggle show modal',
    TOGGLE_SHOW_CREDENTIAL_OPTIONS = '[Utility] Toggle show credential options',
    ROUTER_GO = '[Router] Router Go',
    ROUTER_BACK = '[Router] Router Back',
    ROUTER_CHANGE = '[Router] Router Change',
    SHOW_ALERT = '[Alert] Show Alert',
    ONBORDING_COMPLETE = '[Onboarding] Onboarding Complete',
}

export class RouterGo implements Action {
    readonly type = EUtilityActions.ROUTER_GO;

    constructor(
        public payload: {
            to: {
                path: string;
                queryParams?: object;
                extras?: NavigationExtras;
            },
            params?: {
                key: string,
                value: any
            }
        },
    ) {

    }
}

export class RouterChange implements Action {
    readonly type = EUtilityActions.ROUTER_CHANGE;
    constructor(public payload: { params: any; path: string }) { }
}

export class ToggleShowModalAction implements Action {
    readonly type = EUtilityActions.TOGGLE_SHOW_MODAL;

    constructor(public payload: any) { }
}

export class ShowAlertAction implements Action {
    readonly type = EUtilityActions.SHOW_ALERT;
    constructor(public payload: { title: string; message: string }) { }
}

export class OnboardingCompleteAction implements Action {
    readonly type = EUtilityActions.ONBORDING_COMPLETE;
    constructor() { }
}


export type UtilityUnionAction =
    | ToggleShowModalAction
    | RouterGo
    | RouterChange
    | OnboardingCompleteAction