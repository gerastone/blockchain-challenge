export interface IHomeState {
    trackList: Array<any>,
    trackDetail: any,
    balance: number
}

export const initialHomeState: IHomeState = {
    trackList: [],
    trackDetail: null,
    balance: 0
};
