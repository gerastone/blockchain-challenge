
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, tap } from 'rxjs/operators';
import { RouterGo, ShowAlertAction } from 'src/app/core/store/actions/utility.action';
import { RecoverPasswordService } from '../../services/recover-password.service';
import { ERecoverPasswordActions } from '../actions/recover-password.action';

@Injectable()
export class RecoverPasswordEffects {
    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private recoverPasswordService: RecoverPasswordService
    ) {

    }

    @Effect({ dispatch: false })
    register$ = this.actions$.pipe(
        ofType(ERecoverPasswordActions.RECOVER_PASSWORD_ACTION),
        map((data: any) => {
            this.recoverPasswordService.recoverPassword(data.payload).subscribe(result => {
                this.store.dispatch(new ShowAlertAction({ title: 'ALERT.SUCCESS', message: 'ALERT.RESET_PASSWORD' }));
            }, error => {
                this.store.dispatch(new ShowAlertAction({ title: 'ALERT.ERROR', message: 'ERROR.RESET_PASSWORD' }));
            })
        })
    );


}
