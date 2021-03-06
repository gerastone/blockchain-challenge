import * as HomeActions from '../actions/home.action';
import { IHomeState, initialHomeState } from '../state/home.state';

export function homeReducers(state = initialHomeState, action: HomeActions.HomeUnionAction): IHomeState {

    switch (action.type) {
        case HomeActions.EHomeActions.GET_TRACK_LIST_SUCCESS: {

            state.trackList.push(...action.payload.tracks);
            return {
                ...state,
                balance: action.payload.balance
            };
        }
        case HomeActions.EHomeActions.GET_TRACK_LIST_ERROR: {
            return {
                ...state
            };
        }

        case HomeActions.EHomeActions.GET_TRACK_ID: {
            return {
                ...state,
                trackDetail: null
            }
        }

        case HomeActions.EHomeActions.GET_TRACK_ID_SUCCESS: {
            return {
                ...state,
                trackDetail: action.payload
            };
        }
        case HomeActions.EHomeActions.GET_TRACK_ID_ERROR: {
            return {
                ...state
            };
        }
        case HomeActions.EHomeActions.GET_BALANCE_SUCCESS: {
            return {
                ...state,
                // balance: action.payload
            };
        }
        case HomeActions.EHomeActions.GET_BALANCE_ERROR: {
            return {
                ...state,
                // balance: 0
            };
        }
        case HomeActions.EHomeActions.VALIDATE_ITEM_SUCCESS: {
            const validated = {
                ...state.validated
            };
            validated[action.payload.time] = action.payload.result ? 2 : 1;
            return {
                ...state,
                validated
            };
        }
        default: {
            {
                return { ...state };
            }
        }
    }
}
