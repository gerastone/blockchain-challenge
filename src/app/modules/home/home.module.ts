import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { CoreModule } from 'src/app/core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './store/effects/home.effects';
import { HomeService } from './services/home.service';
import { RecycleCard } from './components/recycle-card/recycle-card.component';
import { TrackDetailPage } from './pages/track-detail/track-detail.page';
import { TrackDetailCard } from './components/track-detail-card/track-detail-card.component';
import { TrackService } from './services/tracks.service';


const routes: Routes = [
  { path: '', pathMatch: 'home', component: HomePage },
  { path: 'detail', component: TrackDetailPage}
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    RouterModule.forChild(routes),
    EffectsModule.forRoot([HomeEffects])
  ],
  declarations: [
    HomePage,
    TrackDetailPage,
    TrackDetailCard,
    RecycleCard
  ],
  exports: [
    RouterModule
  ],
  providers: [
    HomeService,
    TrackService
  ]
})
export class HomePageModule { }
