import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { LogoutService } from '../../services/logout.service';
import { ProfileService } from '../../services/profile.service';
import { RouterGo, ShowAlertAction } from './../../../../core/store/actions/utility.action';
import { EProfileActions, LogoutAction, LogoutActionError, LogoutActionSuccess, ProfileAction, ProfileActionError, ProfileActionSuccess, ChangePwAction, ChangePwActionError, ChangePwActionSuccess } from './../actions/profile.action';
import { ChangePasswordService } from '../../services/changePassword.service';

export class ProfileEffects {
    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private profileService: ProfileService,
        private logoutService: LogoutService,
        private changePasswordService: ChangePasswordService
    ) { }

    @Effect({ dispatch: false })
    navigate$ = this.actions$.pipe(
        ofType(EProfileActions.GET_PROFILE_ACTION),
        map((action: ProfileAction) => {
            this.profileService.getUserProfile().subscribe(response => {
                this.store.dispatch(new ProfileActionSuccess(response));
            }, error => this.store.dispatch(new ProfileActionError(error)));
        })
    )

    @Effect({ dispatch: false })
    logout$ = this.actions$.pipe(
        ofType(EProfileActions.LOGOUT_ACTION),
        map((action: LogoutAction) => {
            this.logoutService.logout().subscribe((response: any) => {
                localStorage.clear();
                this.store.dispatch(new LogoutActionSuccess());
                this.store.dispatch(new RouterGo({
                    to:
                        { path: '/login' },
                    params: {
                        key: 'loged',
                        value: false
                    }
                }))
            }, error => this.store.dispatch(new LogoutActionError(error)));
        })
    )

    @Effect({ dispatch: false })
    changePassword$ = this.actions$.pipe(
        ofType(EProfileActions.CHANGE_PW_ACTION),
        map((action: ChangePwAction) => {
            this.changePasswordService.changePassword(action.payload).subscribe((response: any) => {
                this.store.dispatch(new ChangePwActionSuccess());
                localStorage.clear();
                this.store.dispatch(new RouterGo({
                    to:
                        { path: '/login' },
                }))
            }, error => {
                this.store.dispatch(new ShowAlertAction({ title: 'ALERT.ERROR', message: 'ERROR.CHANGE_PASSWORD' }))
                this.store.dispatch(new ChangePwActionError('ERROR.CHANGE_PASSWORD'))
            });
        })
    )

}