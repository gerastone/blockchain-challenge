import { TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';
import { IUser } from '../../../../core/interfaces/user.interface';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IAppState } from 'src/app/core/store/state/app.state';
import { profileState } from '../../store/selectors/profile.selector';
import { storageState } from './../../../../core/store/selectors/utility.selector';
import { LogoutAction, ProfileAction, ChangePwAction } from './../../store/actions/profile.action';
import { ShowAlertAction, RouterGo } from 'src/app/core/store/actions/utility.action';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {

  storage$ = this.store.pipe(select(storageState));
  profile$ = this.store.pipe(select(profileState));

  utilitySubscription: Subscription;
  profileSusbscription: Subscription;
  user: IUser;
  loged: boolean;

  constructor(private router: Router,
    private translateService: TranslateService,
    private store: Store<IAppState>,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.utilitySubscription = this.storage$.subscribe(result => {

      this.loged = result && result['loged'] ? true : false
      if (this.loged) {
        this.store.dispatch(new ProfileAction())
      }
    });

    this.profileSusbscription = this.profile$.subscribe(result => {
      if (result && result.user) {
        this.user = result.user;
      }
    });
  }

  go() {
    this.router.navigate(['onboarding'])
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }

  async changePassword() {
    let alert = await this.alertCtrl.create({
      header: this.translateService.instant('PROFILE.CHANGE_PASSWORD'),
      inputs: [
        {
          name: 'currentPassword',
          placeholder: this.translateService.instant('PROFILE.ACTUAL_PW'),
          type: 'password'
        },
        {
          name: 'newPassword',
          placeholder: this.translateService.instant('PROFILE.NEW_PW'),
          type: 'password'
        },
        {
          name: 'confirmNewPassword',
          placeholder: this.translateService.instant('PROFILE.NEW_PW_CONFIRM'),
          type: 'password'
        }
      ],
      buttons: [
        {
          text: this.translateService.instant('LABELS.CANCEL'),
          cssClass: 'alert-button-primary-color-class',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: this.translateService.instant('LABELS.ACCEPT'),
          cssClass: 'alert-button-primary-color-class',
          handler: (data) => {
            if (data.newPassword && data.confirmNewPassword) {
              this.store.dispatch(new ChangePwAction({ password: data.currentPassword, newPassword: data.newPassword }));
            } else {
              this.store.dispatch(new ShowAlertAction({ title: 'ALERT.ERROR', message: 'ERROR.CONFIRM_PASSWORD' }));
            }
          }
        }
      ]
    });
    await alert.present();
  }


  createAccount() {
    this.store.dispatch(new RouterGo({
      to: { path: 'register' }
    }))
  }

}
