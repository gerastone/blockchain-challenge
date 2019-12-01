
import * as RecoverPasswordActions from '../actions/recover-password.action';
import { initialRecoverPasswordState, IRecoverPasswordState } from '../state/recover-password.state';

export function recoverPasswordReducers(state = initialRecoverPasswordState, action: RecoverPasswordActions.RecoverPasswordUnionAction): IRecoverPasswordState {

    switch (action.type) {
        case RecoverPasswordActions.ERecoverPasswordActions.RECOVER_PASSWORD_ACTION_SUCCESS: {
            return {
                ...state,
                error: ''
            };
        }
        case RecoverPasswordActions.ERecoverPasswordActions.RECOVER_PASSWORD_ACTION_ERROR: {
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
