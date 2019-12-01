
import { Injectable } from '@angular/core';
import { ActivationStart, Router, ActivatedRoute } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, tap } from 'rxjs/operators';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { ELoginActions, LoginActionError, LoginActionSuccess } from '../actions/login.action';
import { LoginService } from '../../services/login.service';
import { RouterGo } from 'src/app/core/store/actions/utility.action';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LoginEffects {
    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private loginService: LoginService,
        private translateService: TranslateService
    ) {

    }

    @Effect({ dispatch: false })
    navigate$ = this.actions$.pipe(
        ofType(ELoginActions.LOGIN_ACTION),
        map((data: any) => {
            this.loginService.create(data.payload).subscribe(response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('tokenType', 'JWT');
                console.log('response', response);
                this.store.dispatch(new LoginActionSuccess(response.data.user));
                if (response.data.user.code != null) {
                    this.store.dispatch(new RouterGo({
                        to:
                            { path: '/home' },
                        params: {
                            key: 'user',
                            value: response.data.user
                        }
                    }))
                }
                else {
                    this.store.dispatch(new RouterGo({
                        to:
                            { path: '/register/validate-account' },
                        params: {
                            key: 'user',
                            value: response.data.user
                        }
                    }))
                }

            }, error => {
                const errorMsg = this.translateService.instant('ERROR.LOGIN')
                this.store.dispatch(new LoginActionError(errorMsg));
            })
        })
    );


}
