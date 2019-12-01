import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum EHomeActions {
    GET_TRACK_LIST_ACTION = '[Home] Track List',
    GET_TRACK_LIST_SUCCESS = '[Home] Track List Success',
    GET_TRACK_LIST_ERROR = '[Home] Track List Error',
    GET_TRACK_ID = '[Home] TRACK',
    GET_TRACK_ID_SUCCESS = '[Home] TRACK Success',
    GET_TRACK_ID_ERROR = '[Home] TRACK Error'
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

export type HomeUnionAction =
    | TrackListAction
    | TrackListActionSuccess
    | TrackListActionError
    | TrackIdAction
    | TrackIdActionSuccess
    | TrackIdActionError