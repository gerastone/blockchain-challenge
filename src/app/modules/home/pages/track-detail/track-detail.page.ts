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
import { RouterGo } from 'src/app/core/store/actions/utility.action';

@Component({
  selector: 'app-track-detail',
  templateUrl: 'track-detail.page.html',
  styleUrls: ['track-detail.page.scss'],
})
export class TrackDetailPage {
  loadingEvent: any = null;
  home$ = this.store.select(homeState);
  subscription: Subscription;
  trackClass = '';
  timeline = 'assets/imgs/img_timeline_1@3x.png'
  time_first_state = '';
  time_second_state = '';
  time_third_state = '';
  time_last_state = '';
  valid_first_state = false;
  valid_second_state = false;
  valid_third_state = false;
  valid_last_state = false;
  id_first_state = 0;
  id_second_state = 0;
  id_third_state = 0;
  id_last_state = 0;
  id_first = 0;
  id_second = 0;
  id_third = 0;
  id_last = 0;
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
        this.setClassColor(result['track'])
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
      this.valid_first_state = true
      this.id_first = this.track.id;
      this.id_first_state = this.track.states[0].state;
      this.time_first_state = this.track.states[0].timestamp;
      if (this.track.states.length > 1) {
        this.id_second = this.track.id;
        this.time_second_state = this.track.states[1].timestamp;
        this.valid_second_state = true
        this.id_second_state = this.track.states[1].state;
        this.timeline = 'assets/imgs/img_timeline_2@3x.png'
      }
      if (this.track.states.length > 2) {
        this.id_third = this.track.id;
        this.valid_third_state = true
        this.time_third_state = this.track.states[2].timestamp;
        this.id_third_state = this.track.states[2].state;
        this.timeline = 'assets/imgs/img_timeline_3@3x.png'
      }
      if (this.track.states.length > 3) {
        this.id_last = this.track.id;
        this.valid_last_state = true
        this.time_last_state = this.track.states[3].timestamp;
        this.id_last_state = this.track.states[3].state;
        this.timeline = 'assets/imgs/img_timeline_4@3x.png'
      }
    }
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setClassColor(track) {
    switch (track.trashType) {
      case 1:
        this.trackClass = 'organic'

        break;
      case 2:
        this.trackClass = 'plastic'
        break;
      case 3:
        this.trackClass = 'paper'
        break;
      case 4:
        this.trackClass = 'rest'
        break;
      case 5:
        this.trackClass = 'glass'
        break;
    }
  }

  goBack() {
    this.store.dispatch(new RouterGo({
      to: { path: 'home' },
    }))
  }

}
