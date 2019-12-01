import { Component, HostListener, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IAppState } from 'src/app/core/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, Platform } from '@ionic/angular';
import { homeState } from '../../store/selectors/home.selector';
import { TrackListAction, TrackScanAction, BalanceAction } from '../../store/actions/home.action';
import { Subscription } from 'rxjs';
import { RouterGo } from 'src/app/core/store/actions/utility.action';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

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
    private alertCtrl: AlertController,
    private barcodeScanner: BarcodeScanner,
    private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(99999, () => {
      document.addEventListener('backbutton', function (event) {
        event.preventDefault();
        event.stopPropagation();
        console.log('hello');
      }, false);
    });
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

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      if (barcodeData && barcodeData.text != '')
        this.store.dispatch(new TrackScanAction({ ticketCode: barcodeData.text }))
    }).catch(err => {
      console.log('Error', err);
    });
  }

  goToProfile() {
    this.store.dispatch(new RouterGo({
      to: {
        path: 'profile'
      }
    }))
  }

  goToRewards() {
    this.store.dispatch(new RouterGo({
      to: {
        path: 'rewards'
      }
    }))
  }




}
