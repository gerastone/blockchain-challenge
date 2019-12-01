import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { HighchartsChartModule } from 'highcharts-angular';


const routes: Routes = [
  { path: '', pathMatch: 'dashboard', component: DashboardPage },
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    HighchartsChartModule,
    RouterModule.forChild(routes),
    EffectsModule.forRoot([])
  ],
  declarations: [
    DashboardPage
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class DashboardPageModule { }
