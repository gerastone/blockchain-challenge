import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EHomeActions, TrackIdActionSuccess, TrackListActionSuccess, TrackListActionError, TrackIdActionError, BalanceActionSuccess } from '../actions/home.action';
import { map } from 'rxjs/operators';
import { HomeService } from '../../services/home.service';
import { TrackService } from '../../services/tracks.service';
import { EthereumService } from 'src/app/core/services/ethereum.service';

@Injectable()
export class HomeEffects {
    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private homeService: HomeService,
        private trackService: TrackService,
        private ethereumService: EthereumService
    ) {

    }

    @Effect({ dispatch: false })
    list$ = this.actions$.pipe(
        ofType(EHomeActions.GET_TRACK_LIST_ACTION),
        map((payload: any) => {
            this.homeService.list(payload.payload, false).subscribe((response: any) => {
                return this.store.dispatch(new TrackListActionSuccess(response[0].data.home.tracks));
            }, error => {
                return this.store.dispatch(new TrackListActionError(error));
            })
        })
    );

    @Effect({ dispatch: false })
    getid$ = this.actions$.pipe(
        ofType(EHomeActions.GET_TRACK_ID),
        map((payload: any) => {
            this.trackService.getById(payload.payload).subscribe(response => {
                return this.store.dispatch(new TrackIdActionSuccess(response));
            }, error => {
                return this.store.dispatch(new TrackIdActionError(error));
            })
        })
    );

    @Effect({ dispatch: false })
    getBalance$ = this.actions$.pipe(
        ofType(EHomeActions.GET_BALANCE_ACTION),
        map((payload: any) => {
            this.ethereumService.balanceOf()
                .then(result => {
                    console.log('BALANCE RESULT', result)
                    return this.store.dispatch(new BalanceActionSuccess(result));
                })
        })
    );

    @Effect({ dispatch: false })
    validateItem$ = this.actions$.pipe(
        ofType(EHomeActions.VALIDATE_ITEM_ACTION),
        map((payload: any) => {
            this.ethereumService.validateTrack(payload.payload.id, payload.payload.state, payload.payload.time)
                .then(result => {
                    console.log('VALIDATE RESULT', result)
                    return this.store.dispatch(new BalanceActionSuccess(result));
                })
        })
    );
}
