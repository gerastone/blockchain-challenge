import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EHomeActions, TrackIdActionSuccess, TrackListActionSuccess, TrackListActionError, TrackIdActionError, TrackScanActionSuccess, TrackScanActionError } from '../actions/rewards.action';
import { map } from 'rxjs/operators';
import { ShowAlertAction } from 'src/app/core/store/actions/utility.action';
import { RewardService } from '../../services/rewards.service';

@Injectable()
export class RewardsEffects {
    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private rewardService: RewardService
    ) {

    }

    @Effect({ dispatch: false })
    list$ = this.actions$.pipe(
        ofType(EHomeActions.GET_TRACK_LIST_ACTION),
        map((payload: any) => {
            this.rewardService.list(payload.payload, false).subscribe((response: any) => {
                return this.store.dispatch(new TrackListActionSuccess(response[0].data.home.tracks));
            }, error => {
                return this.store.dispatch(new TrackListActionError(error));
            })
        })
    );

}
