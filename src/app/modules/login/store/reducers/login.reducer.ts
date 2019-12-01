import { initialLoginState, ILoginState } from '../state/login.state';
import * as LoginActions from '../actions/login.action';

export function loginReducers(state = initialLoginState, action: LoginActions.LoginUnionAction): ILoginState {

    switch (action.type) {
        case LoginActions.ELoginActions.LOGIN_ACTION_SUCCESS: {
            return {
                ...state,
                error: '',
                user: action.payload
            };;
        }
        case LoginActions.ELoginActions.LOGIN_ACTION_ERROR: {
            return {
                ...state,
                error: action.payload
            };;
        }
        default: {
            {
                return { ...state };
            }
        }
    }
}
