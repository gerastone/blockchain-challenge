import { Component, HostListener, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IAppState } from 'src/app/core/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';
import { homeState } from '../../store/selectors/home.selector';
import { TrackListAction, TrackIdAction } from '../../store/actions/home.action';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import { storageState } from 'src/app/core/store/selectors/utility.selector';

@Component({
  selector: 'app-track-detail',
  templateUrl: 'track-detail.page.html',
  styleUrls: ['track-detail.page.scss'],
})
export class TrackDetailPage {
  loadingEvent: any = null;
  home$ = this.store.select(homeState);
  subscription: Subscription;
  timeline = 'assets/imgs/img_timeline_1@3x.png'
  time_first_state = '';
  time_second_state = '';
  time_third_state = '';
  time_last_state = '';
  track: any;
  utilitySubscription: Subscription;
  storage$ = this.store.select(storageState);
  constructor(private router: Router,
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private alertCtrl: AlertController) {
  }


  ngOnInit() {
    this.utilitySubscription = this.storage$.subscribe(result => {
      if (result['track'] != null) {
        this.store.dispatch(new TrackIdAction(result['track'].id))
      }
    })

    this.subscription = this.home$.subscribe(result => {
      if (result.trackDetail != null) {
        this.track = result.trackDetail;
        this.utilitySubscription.unsubscribe()
        this.checkTrack();
      }
    })
  }

  checkTrack() {
    console.log(this.track);
    if (this.track.states.length > 0) {
      this.time_first_state = moment(new Date(this.track.states[0].timestamp)).format('DD/MM/YYYY');
      if (this.track.states.length > 1) {
        this.time_second_state = moment(new Date(this.track.states[1].timestamp)).format('DD/MM/YYYY');
        this.timeline = 'assets/imgs/img_timeline_2@3x.png'
      }
      if (this.track.states.length > 2) {
        this.time_third_state = moment(new Date(this.track.states[2].timestamp)).format('DD/MM/YYYY');
        this.timeline = 'assets/imgs/img_timeline_3@3x.png'
      }
      if (this.track.states.length > 3) {
        this.time_last_state = moment(new Date(this.track.states[3].timestamp)).format('DD/MM/YYYY');
        this.timeline = 'assets/imgs/img_timeline_4@3x.png'
      }
    }
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }




}
