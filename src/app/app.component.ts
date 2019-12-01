
import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { select, State } from '@ngrx/store';
import { utilityState } from './core/store/selectors/utility.selector';
import { IAppState } from './core/store/state/app.state';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  utility$ = this.state.pipe(select(utilityState))
  showTabs: boolean = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private state: State<IAppState>,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      if (this.platform.is('ios')) {
        this.statusBar.backgroundColorByHexString('#ffffff');
      }
    })
  }
}
