import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/state/app.state';
import { ValidationAction } from '../../store/actions/register.action';
import { registerState } from '../../store/selectors/register.selector';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { ModalCardComponent } from '../../components/modal-card/modal-card';
import { utilityState } from 'src/app/core/store/selectors/utility.selector';

@Component({
    selector: 'app-validate-account',
    templateUrl: 'validate-account.page.html',
    styleUrls: ['validate-account.page.scss'],

})
export class ValidateAccountPage implements OnInit {
    utility$ = this.store.pipe(select(utilityState))
    register$ = this.store.pipe(select(registerState));
    error: string = '';
    code = {
        code: '',
    }
    modal: any;
    userName: string = ''
    registerSubscription: Subscription;

    constructor(private store: Store<IAppState>, private modalCtrl: ModalController) { }


    ngOnInit() {
        this.register$.subscribe(result => {
            this.error = result.error;
        })
        this.utility$.subscribe(result => {
            this.userName = result.storage['user'].first_name;
        })
    }

    sendCode() {
        this.store.dispatch(new ValidationAction(this.code))
    }

    async openCardHelp() {
        await this.modalCtrl.create({ component: ModalCardComponent, cssClass: 'blockchain-modal' })
            .then(result => {
                result.present();
            });
    }
    ngOnDestroy() {
        this.registerSubscription.unsubscribe();
    }
}