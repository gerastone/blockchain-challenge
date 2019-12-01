import { Component, HostListener, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IAppState } from 'src/app/core/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';
import { homeState } from '../../store/selectors/home.selector';
import { TrackListAction, BalanceAction } from '../../store/actions/home.action';
import { Subscription } from 'rxjs';
import { RouterGo } from 'src/app/core/store/actions/utility.action';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loadingEvent: any = null;
  home$ = this.store.select(homeState);
  subscription: Subscription;
  trackList = [];
  balance = 0;
  constructor(private router: Router,
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private alertCtrl: AlertController) {
  }


  ngOnInit() {

    this.store.dispatch(new TrackListAction());
    this.store.dispatch(new BalanceAction());
    this.subscription = this.home$.subscribe(result => {
      this.trackList = result.trackList;
      this.balance = result.balance;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onTrackClicked(track) {
    this.store.dispatch(new RouterGo({
      to: {
        path: 'detail',
        extras: { relativeTo: this.route }
      },
      params: {
        key: 'track',
        value: track
      }
    }));
  }




}
