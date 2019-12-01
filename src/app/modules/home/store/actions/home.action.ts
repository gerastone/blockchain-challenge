import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum EHomeActions {
    GET_TRACK_LIST_ACTION = '[Home] Track List',
    GET_TRACK_LIST_SUCCESS = '[Home] Track List Success',
    GET_TRACK_LIST_ERROR = '[Home] Track List Error',
    GET_TRACK_ID = '[Home] TRACK',
    GET_TRACK_ID_SUCCESS = '[Home] TRACK Success',
    GET_TRACK_ID_ERROR = '[Home] TRACK Error',
    GET_BALANCE_ACTION = '[Home] Get Balance',
    GET_BALANCE_SUCCESS = '[Home] Get Balance Success',
    GET_BALANCE_ERROR = '[Home] Get Balance Error',
    VALIDATE_ITEM_ACTION = '[Home] Validate Item',
    VALIDATE_ITEM_SUCCESS = '[Home] Validate Item Success',
    VALIDATE_ITEM_ERROR = '[Home] Validate Item Error'
}

export class TrackListAction implements Action {
    readonly type = EHomeActions.GET_TRACK_LIST_ACTION;
    constructor(public payload?: any) { }
}

export class TrackListActionSuccess implements Action {
    readonly type = EHomeActions.GET_TRACK_LIST_SUCCESS;
    constructor(public payload: any) { }
}

export class TrackListActionError implements Action {
    readonly type = EHomeActions.GET_TRACK_LIST_ERROR;
    constructor(public payload: any) { }
}

export class TrackIdAction implements Action {
    readonly type = EHomeActions.GET_TRACK_ID;
    constructor(public payload?: any) { }
}

export class TrackIdActionSuccess implements Action {
    readonly type = EHomeActions.GET_TRACK_ID_SUCCESS;
    constructor(public payload: any) { }
}

export class TrackIdActionError implements Action {
    readonly type = EHomeActions.GET_TRACK_ID_ERROR;
    constructor(public payload: any) { }
}

export class BalanceAction implements Action {
    readonly type = EHomeActions.GET_BALANCE_ACTION;
    constructor(public payload?: any) { }
}

export class BalanceActionSuccess implements Action {
    readonly type = EHomeActions.GET_BALANCE_SUCCESS;
    constructor(public payload: any) { }
}

export class BalanceActionError implements Action {
    readonly type = EHomeActions.GET_BALANCE_ERROR;
    constructor(public payload: any) { }
}

export class ValidateItemAction implements Action {
    readonly type = EHomeActions.VALIDATE_ITEM_ACTION;
    constructor(public payload?: any) { }
}

export class ValidateItemActionSuccess implements Action {
    readonly type = EHomeActions.VALIDATE_ITEM_SUCCESS;
    constructor(public payload: any) { }
}

export class ValidateItemActionError implements Action {
    readonly type = EHomeActions.VALIDATE_ITEM_ERROR;
    constructor(public payload: any) { }
}

export type HomeUnionAction =
    | TrackListAction
    | TrackListActionSuccess
    | TrackListActionError
    | TrackIdAction
    | TrackIdActionSuccess
    | TrackIdActionError
    | BalanceAction
    | BalanceActionSuccess
    | BalanceActionError
    | ValidateItemAction
    | ValidateItemActionSuccess
    | ValidateItemActionError