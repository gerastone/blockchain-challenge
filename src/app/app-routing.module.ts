import { ONBOARDING_COMPLETED_LS } from './core/config/app.config';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: localStorage.getItem(ONBOARDING_COMPLETED_LS) ? 'login' : 'onboarding', pathMatch: 'full' },
  { path: 'onboarding', loadChildren: () => import('./modules/onboarding/onboarding.module').then(m => m.OnboardingModule) },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomePageModule) },
  { path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'help', loadChildren: () => import('./modules/help/help.module').then(m => m.HelpModule) },
  { path: 'filter', loadChildren: () => import('./modules/filter/filter.module').then(m => m.FilterModule) },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule) },
  { path: 'recover-password', loadChildren: () => import('./modules/recover-password/recover-password.module').then(m => m.RecoverPasswordModule) },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardPageModule) },
  { path: 'rewards', loadChildren: () => import('./modules/rewards/rewards.module').then(m => m.RewardsPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
