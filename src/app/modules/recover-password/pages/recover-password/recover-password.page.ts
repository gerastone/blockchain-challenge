import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/state/app.state';
import { RouterGo } from 'src/app/core/store/actions/utility.action';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { REGEX } from 'src/app/core/config/app.config';
import { RecoverPasswordAction } from '../../store/actions/recover-password.action';

@Component({
    selector: 'app-recover-password',
    templateUrl: 'recover-password.page.html',
    styleUrls: ['recover-password.page.scss'],

})
export class RecoverPasswordPage implements OnInit {


    error: string = ''
    terms: boolean = false;
    subs: boolean = false;
    email: string = '';

    constructor(private store: Store<IAppState>, private route: ActivatedRoute,
        private translateService: TranslateService) { }

    ngOnInit() {

    }

    recoverPassword() {
        this.error = '';
        if (this.checkInputs()) {
            this.store.dispatch(new RecoverPasswordAction(this.email));
        }

    }

    goToLogin() {
        this.store.dispatch(new RouterGo({
            to: { path: 'login' }
        }))
    }

    checkInputs() {
        if (!this.email.match(REGEX.MAIL)) {
            this.error = this.translateService.instant('ERROR.EMAIL');
            return false
        } else {
            return true
        }
    }

}