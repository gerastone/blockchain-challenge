import { createSelector } from '@ngrx/store';
import { IAppState } from "../state/app.state";
import { IUtilityState } from '../state/utility.state';


const selectUtility = (state: IAppState) => state.utility;

export const utilityState = createSelector(
    selectUtility,
    (state: IUtilityState) => state
)

const selectStorage = (state: IAppState) => state.utility.storage;

export const storageState = createSelector(
    selectStorage,
    (storage: []) => storage
)

const selectOnboarding = (state: IAppState) => state.utility.onboardingCompleted

export const onboardingState = createSelector(
    selectOnboarding,
    (onboardingCompleted: boolean) => onboardingCompleted
)
