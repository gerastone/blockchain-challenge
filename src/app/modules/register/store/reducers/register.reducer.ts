import { initialRegisterState, IRegisterState } from '../state/register.state';
import * as RegisterActions from '../actions/register.action';

export function registerReducers(state = initialRegisterState, action: RegisterActions.RegisterUnionAction): IRegisterState {

    switch (action.type) {
        case RegisterActions.ERegisterActions.REGISTER_ACTION_SUCCESS: {
            return {
                ...state,
                error: ''
            };
        }
        case RegisterActions.ERegisterActions.REGISTER_ACTION_ERROR: {
            return {
                ...state
            };;
        }
        case RegisterActions.ERegisterActions.VALIDATION_ACTION_SUCCESS: {
            return {
                ...state,
                error: ''
            };
        }
        case RegisterActions.ERegisterActions.VALIDATION_ACTION_ERROR: {
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
