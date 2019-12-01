import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RewardsPage } from './pages/rewards/rewards.page';
import { CoreModule } from 'src/app/core/core.module';
import { DonationsCard } from './components/donations-card/donations-card.component';
import { BonificacionsCard } from './components/bonificacions-card/bonificacions-card.component';


const routes: Routes = [
  { path: '', pathMatch: 'rewards', component: RewardsPage },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    RewardsPage,
    DonationsCard,
    BonificacionsCard
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class RewardsPageModule { }
