export interface IUtilityState {
    showLogin: boolean;
    showCredentials: boolean;
    showTabs: boolean;
    storage: [];
    onboardingCompleted: boolean;
    
}

export const initialUtilityState: IUtilityState = {
    showLogin: false,
    showCredentials: true,
    showTabs: false,
    storage: [],
    onboardingCompleted: false
};
