import { ProfileUnionAction } from './../actions/profile.action';
import { initialProfileState, IProfileState } from '../state/profile.state';
import * as ProfileActions from '../actions/profile.action'

export function profileReducers(state = initialProfileState, action: ProfileActions.ProfileUnionAction): IProfileState {

    switch (action.type) {
        case ProfileActions.EProfileActions.GET_PROFILE_ACTION_SUCCESS: {
            let user = action.payload[0];

            return {
                ...state,
                user: user
            }
        }
        case ProfileActions.EProfileActions.GET_PROFILE_ACTION_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case ProfileActions.EProfileActions.LOGOUT_ACTION_SUCCESS: {
            return {
                ...state,
                user: null,
            };
        }
        case ProfileActions.EProfileActions.LOGOUT_ACTION_ERROR: {

            return {
                ...state,
                error: action.payload
            };
        }
        case ProfileActions.EProfileActions.CHANGE_PW_ACTION_SUCCESS: {
            return {
                ...state,
            };
        }
        case ProfileActions.EProfileActions.CHANGE_PW_ACTION_ERROR: {

            return {
                ...state,
                error: action.payload

            };
        }
        case ProfileActions.EProfileActions.CHANGE_PHONE_ACTION_SUCCESS: {
            let user = action.payload[0];
            return {
                ...state,
                user: user,
            };
        }
        case ProfileActions.EProfileActions.CHANGE_PHONE_ACTION_ERROR: {

            return {
                ...state,
                error: action.payload
            };
        }
        default: {

            return {
                ...state
            };

        }
    }
}