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
  loged: boolean;
  user: any;

  constructor(private router: Router,
    private translateService: TranslateService,
    private store: Store<IAppState>,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.utilitySubscription = this.storage$.subscribe(result => {

      this.user = result && result['user'];
      if (this.user != null) {
        this.user = result['user']
        console.log(this.user);
      }
    });
  }

  goLogout() {
    localStorage.clear();
    this.store.dispatch(new RouterGo({ to: { path: 'login' } }))
  }
  goBack() {
    localStorage.clear();
    this.store.dispatch(new RouterGo({ to: { path: 'home' } }))
  }
}
