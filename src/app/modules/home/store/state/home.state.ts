export interface IHomeState {
    trackList: Array<any>,
    trackDetail: any,
    balance: number,
    validated: any
}

export const initialHomeState: IHomeState = {
    trackList: [],
    trackDetail: null,
    balance: 0,
    validated: {}
};
