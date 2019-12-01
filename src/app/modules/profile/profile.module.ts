import { ChangePasswordService } from './services/changePassword.service';
import { ProfileEffects } from './store/effects/profile.effects';
import { EffectsModule } from '@ngrx/effects';
import { LogoutService } from './services/logout.service';
import { UserService } from './services/user.service';
import { ProfileService } from './services/profile.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { ProfilePage } from './pages/profile/profile.page';


const routes: Routes = [
  { path: '', component: ProfilePage }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    RouterModule.forChild(routes),
    EffectsModule.forRoot([ProfileEffects])
  ],
  declarations: [
    ProfilePage,
  ],
  exports: [
    RouterModule
  ],
  providers:[
    ProfileService,
    UserService,
    LogoutService,
    ChangePasswordService
  ]
})
export class ProfileModule { }
