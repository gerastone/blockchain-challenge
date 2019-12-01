import { initialUtilityState, IUtilityState } from '../state/utility.state';
import * as UtilityActions from '../actions/utility.action';
import { TAB_OPTIONS } from '../../app.config';
import { ONBOARDING_COMPLETED_LS } from '../../config/app.config';

export function utilityReducers(state = initialUtilityState, action: UtilityActions.UtilityUnionAction): IUtilityState {

    switch (action.type) {


        case UtilityActions.EUtilityActions.ROUTER_CHANGE: {
            if (action.payload.path) {
                let showTabs = TAB_OPTIONS.findIndex(item => ((item.option === action.payload.path)));
                console.log('show tabs', showTabs)
                return {
                    ...state,
                    showTabs: showTabs != -1 ? true : false
                }
            }
            else {
                return {
                    ...state
                }
            }
        }
        case UtilityActions.EUtilityActions.ROUTER_GO: {
            if (action.payload.params) {
                state.storage[action.payload.params.key] = action.payload.params.value
                return {
                    ...state
                }
            }
        }
        case UtilityActions.EUtilityActions.ONBORDING_COMPLETE: {
            localStorage.setItem(ONBOARDING_COMPLETED_LS, 'true');
            return {
                ...state,
                onboardingCompleted: true
            }
        }

        default: {
            {
                return { ...state };
            }
        }
    }
}
