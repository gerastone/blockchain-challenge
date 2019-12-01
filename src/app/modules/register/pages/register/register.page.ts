import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/state/app.state';
import { RouterGo } from 'src/app/core/store/actions/utility.action';
import { ActivatedRoute } from '@angular/router';
import { REGEX } from 'src/app/core/config/app.config';
import { RegisterAction } from '../../store/actions/register.action';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-register',
    templateUrl: 'register.page.html',
    styleUrls: ['register.page.scss'],

})
export class RegisterPage implements OnInit {

    registerModel = {
        first_name: '',
        email: '',
        password: '',
    }

    error: string = ''
    terms: boolean = false;

    confirmPassword: string = '';

    constructor(private store: Store<IAppState>, private route: ActivatedRoute,
        private translateService: TranslateService) { }

    ngOnInit() {

    }

    register() {
        if (this.validateInputs() && this.terms) {
            this.error = '';
            this.store.dispatch(new RegisterAction({ data: this.registerModel, relative: this.route }));
        }
    }


    validateInputs() {
        if (this.registerModel.email != ''
            && this.registerModel.password != '' && this.confirmPassword != '') {
            if (!this.registerModel.email.match(REGEX.MAIL)) {
                this.error = this.translateService.instant('ERROR.EMAIL');
                return false;
            }
            if (this.registerModel.password != this.confirmPassword) {
                this.error = this.translateService.instant('ERROR.PASSWORD');
                return false;
            }
        } else {
            this.error = this.translateService.instant('ERROR.REQUIRED');
            return false
        }
        return true;
    }

    exploreApp() {
        this.store.dispatch(new RouterGo({
            to: { path: 'home' }
        }))
    }

    goToLogin() {
        this.store.dispatch(new RouterGo({
            to: { path: 'login' }
        }))
    }

}