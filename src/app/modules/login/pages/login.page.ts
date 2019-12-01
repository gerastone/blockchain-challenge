import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/state/app.state';
import { LoginAction } from '../store/actions/login.action';
import { RouterGo } from 'src/app/core/store/actions/utility.action';
import { loginState } from '../store/selectors/login.selector';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss'],
})


export class LoginPage implements OnInit {

    login = {
        username: '',
        password: ''
    }
    loginSubsription: Subscription;
    loginSelector$ = this.store.pipe(select(loginState));
    error = '';
    constructor(private store: Store<IAppState>) { }

    ngOnInit() {
        this.loginSubsription = this.loginSelector$.subscribe(result => {
            if (result.error != '') {
                this.error = result.error
            }
        })
    }

    doLogin() {
        this.store.dispatch(new LoginAction(this.login));
    }

    goToRegister() {
        this.store.dispatch(new RouterGo({
            to: { path: 'register' }
        }))
    }

    goToRecover() {
        this.store.dispatch(new RouterGo({
            to: { path: 'recover-password' }
        }))
    }

    ngOnDestroy() {
        this.loginSubsription.unsubscribe();
    }

}