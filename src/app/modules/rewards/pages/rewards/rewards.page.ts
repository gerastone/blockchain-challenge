import { Component, HostListener, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IAppState } from 'src/app/core/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';
import { homeState } from '../../store/selectors/rewards.selector';
import { TrackListAction, TrackIdAction } from '../../store/actions/rewards.action';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import { storageState } from 'src/app/core/store/selectors/utility.selector';
import { RouterGo } from 'src/app/core/store/actions/utility.action';

@Component({
  selector: 'app-rewards',
  templateUrl: 'rewards.page.html',
  styleUrls: ['rewards.page.scss'],
})
export class RewardsPage {
  loadingEvent: any = null;
  home$ = this.store.select(homeState);
  subscription: Subscription;
  donations = true;
  constructor(private router: Router,
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private alertCtrl: AlertController) {
  }


  ngOnInit() {

  }


  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  goBack() {
    this.store.dispatch(new RouterGo({
      to: { path: 'home' },
    }))
  }

}
