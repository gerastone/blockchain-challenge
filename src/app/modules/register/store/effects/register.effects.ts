
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, tap } from 'rxjs/operators';
import { ERegisterActions, RegisterActionError, RegisterActionSuccess, ValidationActionSuccess, ValidationActionError } from '../actions/register.action';
import { RegisterService } from '../../services/register.service';
import { RouterGo, ShowAlertAction } from 'src/app/core/store/actions/utility.action';
import { LoginAction } from 'src/app/modules/login/store/actions/login.action';
import { ValidationCodeService } from '../../services/validate-code.service';

@Injectable()
export class RegisterEffects {
    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private registerService: RegisterService,
        private validationService: ValidationCodeService
    ) {

    }

    @Effect({ dispatch: false })
    register$ = this.actions$.pipe(
        ofType(ERegisterActions.REGISTER_ACTION),
        map((data: any) => {
            this.registerService.create(data.payload.data).subscribe(response => {
                this.store.dispatch(new RegisterActionSuccess(response));

                this.store.dispatch(new ShowAlertAction({ title: 'ALERT.SUCCESS', message: 'ALERT.REGISTRATION_SUCCESS' }));
                this.store.dispatch(new LoginAction({ username: data.payload.data.email, password: data.payload.data.password }));
            }, error => {
                this.store.dispatch(new RegisterActionError(error));
            })
        })
    );

    @Effect({ dispatch: false })
    validation$ = this.actions$.pipe(
        ofType(ERegisterActions.VALIDATION_ACTION),
        map((data: any) => {
            this.validationService.create(data.payload).subscribe(response => {
                this.store.dispatch(new ValidationActionSuccess(response));
                this.store.dispatch(new RouterGo({
                    to:
                        { path: '/home' },
                }))
            }, error => {
                this.store.dispatch(new ValidationActionError('ERROR.VALIDATION_CODE'));
            })
        })
    );

}
