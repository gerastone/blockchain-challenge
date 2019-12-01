import { Component, HostListener, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IAppState } from 'src/app/core/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';
import { homeState } from '../../store/selectors/home.selector';
import { TrackListAction } from '../../store/actions/home.action';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-detail',
  templateUrl: 'tracks-detail.page.html',
  styleUrls: ['tracks-detail.page.scss'],
})
export class TrackDetailPage {
  loadingEvent: any = null;
  home$ = this.store.select(homeState);
  subscription: Subscription;
  constructor(private router: Router,
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private alertCtrl: AlertController) {
  }


  ngOnInit() {

    this.store.dispatch(new TrackListAction());
    this.subscription = this.home$.subscribe(result => {
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }




}
