import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { OnboardingCompleteAction, RouterGo } from 'src/app/core/store/actions/utility.action';
import { onboardingState } from 'src/app/core/store/selectors/utility.selector';
import { IAppState } from 'src/app/core/store/state/app.state';
import { ONBOARDING_PAGES } from '../../onboarding.config';

@Component({
  selector: 'app-onboarding',
  templateUrl: 'onboarding.page.html',
  styleUrls: ['onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {



  @ViewChild('slides', { static: false })
  slides: IonSlides;
  onboarding$ = this.store.pipe(select(onboardingState))
  actualIndex: number = 0;
  onboardingItems: any[] = [];
  sliderLength: number;
  backgroundImage: string = 'assets/imgs/login@3x.png';
  slideOpts = {
    allowTouchMove: true,
    zoom: false
  }


  constructor(
    private store: Store<IAppState>,
    private translateService: TranslateService
  ) {
    this.loadOnboarding();
  }

  ngOnInit() {

  }

  loadOnboarding() {
    ONBOARDING_PAGES.forEach(({ title, body, backgroundImage }) => {
      this.onboardingItems.push({
        title,
        body,
        backgroundImage
      })
    })
    this.sliderLength = this.onboardingItems.length;
  }

  async swipeEvent($event) {
    await this.slides.getActiveIndex().then((val) => {
      this.actualIndex = val
    })
  }

  async slideNext() {
    await this.slides.isEnd().then(val => {
      if (!val) {
        this.slides.slideNext();
      }
    })

  }

  async slidePrev() {
    await this.slides.isBeginning().then(val => {
      if (!val) {
        this.slides.slidePrev();
      }
    })

  }

  goLogin() {
    this.store.dispatch(new OnboardingCompleteAction());
    this.store.dispatch(new RouterGo({
      to: { path: 'login' }
    }))
  }

  exploreApp() {
    this.store.dispatch(new OnboardingCompleteAction());
    this.store.dispatch(new RouterGo({
      to: { path: 'home' },
    }))
  }

}
