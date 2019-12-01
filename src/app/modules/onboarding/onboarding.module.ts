import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CoreModule } from './../../core/core.module';
import { OnboardingPage } from './pages/onboarding/onboarding.page';



const routes: Routes = [  
  { path: '', component: OnboardingPage }
];


@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    OnboardingPage,
  ],
  exports: [
    RouterModule
  ]
})
export class OnboardingModule { }
