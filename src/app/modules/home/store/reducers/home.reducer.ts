import * as HomeActions from '../actions/home.action';
import { IHomeState, initialHomeState } from '../state/home.state';

export function homeReducers(state = initialHomeState, action: HomeActions.HomeUnionAction): IHomeState {

    switch (action.type) {
        case HomeActions.EHomeActions.GET_TRACK_LIST_SUCCESS: {

            state.trackList.push(...action.payload);
            return {
                ...state,
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
                balance: action.payload
            };
        }
        case HomeActions.EHomeActions.GET_BALANCE_ERROR: {
            return {
                ...state,
                balance: 0
            };
        }
        default: {
            {
                return { ...state };
            }
        }
    }
}
